<?php

namespace App\Http\Controllers;

use App\Enums\OperatingSystem;
use App\Http\Requests\GenerateSetupRequest;
use App\Models\Bundle;
use App\Models\GeneratedSetup;
use App\Models\Software;
use App\Services\InstallScriptGenerator;
use App\Services\SoftwareCatalogService;
use App\Support\OperatingSystemDetector;
use App\Support\SoftwareIcons;
use Illuminate\Http\Response as HttpResponse;
use Inertia\Inertia;
use Inertia\Response;

class InstallerController extends Controller
{
    public function index(SoftwareCatalogService $catalog): Response
    {
        $detected = request()->attributes->get('detected_os', 'unknown');
        $requested = request()->query('os');
        $os = $requested
            ? OperatingSystemDetector::resolveCatalogOs((string) $requested, false)
            : OperatingSystemDetector::resolveCatalogOs((string) $detected);

        $software = $catalog->forOs($os);
        $catalogIds = $software->pluck('id');

        $bundles = Bundle::query()
            ->where('is_active', true)
            ->with(['software' => fn ($q) => $q->where('is_active', true)->select('software.id', 'name', 'slug', 'icon')])
            ->orderByDesc('is_featured')
            ->orderBy('name')
            ->get()
            ->map(fn (Bundle $bundle) => [
                'id' => $bundle->id,
                'name' => $bundle->name,
                'slug' => $bundle->slug,
                'description' => $bundle->description,
                'is_featured' => $bundle->is_featured,
                'software' => $bundle->software->map(fn (Software $s) => [
                    'id' => $s->id,
                    'name' => $s->name,
                    'slug' => $s->slug,
                    'icon' => SoftwareIcons::url($s->slug, $s->icon),
                ])->values()->all(),
                'software_ids' => $bundle->software->pluck('id')->all(),
            ]);

        $selectedBundle = null;
        $bundleSlug = request()->query('bundle');

        if ($bundleSlug) {
            $bundle = Bundle::query()
                ->where('is_active', true)
                ->where('slug', $bundleSlug)
                ->with(['software' => fn ($q) => $q->where('is_active', true)->select('software.id', 'name', 'slug', 'icon')])
                ->first();

            if ($bundle) {
                $softwareIds = $bundle->software->pluck('id')->intersect($catalogIds)->values()->all();

                $selectedBundle = [
                    'id' => $bundle->id,
                    'name' => $bundle->name,
                    'slug' => $bundle->slug,
                    'description' => $bundle->description,
                    'is_featured' => $bundle->is_featured,
                    'software' => $bundle->software->map(fn (Software $s) => [
                        'id' => $s->id,
                        'name' => $s->name,
                        'slug' => $s->slug,
                        'icon' => SoftwareIcons::url($s->slug, $s->icon),
                    ])->values()->all(),
                    'software_ids' => $softwareIds,
                ];
            }
        }

        $preselectedSoftwareIds = $selectedBundle
            ? $selectedBundle['software_ids']
            : [];

        return Inertia::render('installer/index', [
            'selectedOs' => $os,
            'detectedOs' => $detected,
            'catalogVersion' => app(SoftwareCatalogService::class)->version(),
            'activeBundleSlug' => $bundleSlug,
            'categories' => $this->groupSoftware($software),
            'bundles' => $bundles->values()->all(),
            'selectedBundle' => $selectedBundle,
            'preselectedSoftwareIds' => array_values($preselectedSoftwareIds),
            'seo' => [
                'title' => 'App Installer — ProLampX',
                'description' => 'Pick software for your OS and download one installer that installs everything automatically.',
            ],
        ]);
    }

    public function generate(GenerateSetupRequest $request, InstallScriptGenerator $generator)
    {
        $os = OperatingSystem::from($request->validated('os'));

        $software = Software::query()
            ->whereIn('id', $request->validated('software_ids'))
            ->with(['installCommands' => fn ($q) => $q->where('os', $os)])
            ->get();

        $generated = $generator->generate($software, $os);
        $setup = $generator->store($software, $os, $generated);

        return response()->json([
            'download_url' => route('installer.download', [
                'token' => $setup->token,
                'extension' => $os->installerExtension(),
            ]),
            'filename' => $generated['filename'],
            'warnings' => $generated['warnings'],
        ]);
    }

    public function download(string $token, string $extension): HttpResponse
    {
        $setup = GeneratedSetup::query()
            ->where('token', $token)
            ->where(function ($q) {
                $q->whereNull('expires_at')->orWhere('expires_at', '>', now());
            })
            ->firstOrFail();

        abort_unless(str_ends_with($setup->filename, $extension), 404);

        return response($setup->file_content, 200, [
            'Content-Type' => 'application/octet-stream',
            'Content-Disposition' => 'attachment; filename="'.$setup->filename.'"',
        ]);
    }

    /**
     * @param  \Illuminate\Support\Collection<int, Software>  $software
     * @return array<string, array<int, array<string, mixed>>>
     */
    private function groupSoftware($software): array
    {
        return $software
            ->groupBy(fn (Software $s) => $s->categoryRelation?->name ?? str_replace('-', ' ', $s->category))
            ->map(fn ($items) => $items->map(fn (Software $s) => [
                'id' => $s->id,
                'name' => $s->name,
                'slug' => $s->slug,
                'icon' => SoftwareIcons::url($s->slug, $s->icon),
                'category' => $s->category,
                'is_featured' => $s->is_featured,
                'license_type' => $s->license_type->value ?? $s->license_type,
            ])->values()->all())
            ->all();
    }
}
