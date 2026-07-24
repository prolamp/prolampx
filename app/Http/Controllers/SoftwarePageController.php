<?php

namespace App\Http\Controllers;

use App\Models\Software;
use App\Services\SoftwareCatalogService;
use App\Support\OperatingSystemDetector;
use App\Support\SeoMeta;
use App\Support\SoftwareIcons;
use Inertia\Inertia;
use Inertia\Response;

class SoftwarePageController extends Controller
{
    public function index(SoftwareCatalogService $catalog): Response
    {
        $detected = request()->attributes->get('detected_os', 'unknown');
        $requested = request()->query('os');
        $os = $requested
            ? OperatingSystemDetector::resolveCatalogOs((string) $requested, false)
            : OperatingSystemDetector::resolveCatalogOs((string) $detected);

        $software = $catalog->forOs($os);

        return Inertia::render('software/index', [
            'selectedOs' => $os,
            'detectedOs' => $detected,
            'catalogVersion' => $catalog->version(),
            'software' => $software
                ->groupBy(fn (Software $s) => $s->categoryRelation?->name ?? str_replace('-', ' ', $s->category))
                ->map(fn ($items) => $items->map(fn (Software $s) => [
                    'id' => $s->id,
                    'name' => $s->name,
                    'slug' => $s->slug,
                    'icon' => SoftwareIcons::url($s->slug, $s->icon),
                    'category' => $s->category,
                    'license_type' => $s->license_type->value ?? $s->license_type,
                    'description' => $s->description,
                ])->values()->all())
                ->all(),
            'seo' => SeoMeta::page('software', ['path' => '/software']),
        ]);
    }

    public function show(Software $software): Response
    {
        abort_unless($software->is_active, 404);

        $software->load('installCommands:id,software_id,os,package_manager,command');

        return Inertia::render('software/show', [
            'software' => $software->only([
                'id', 'name', 'slug', 'icon', 'category', 'license_type',
                'description', 'latest_version', 'meta_title', 'meta_description',
                'meta_keywords', 'og_image',
            ]) + [
                'icon' => SoftwareIcons::url($software->slug, $software->icon),
                'install_commands' => $software->installCommands,
            ],
            'seo' => [
                'title' => SeoMeta::brandTitle($software->meta_title ?? "Download {$software->name} Free"),
                'description' => $software->meta_description
                    ?: ($software->description
                        ?: "Download and install {$software->name} on Windows, macOS, or Ubuntu with the free ProLampX multi-OS installer."),
                'keywords' => $software->meta_keywords
                    ?: "{$software->name}, download {$software->name}, free {$software->name}, ProLampX installer, freeware",
                'image' => $software->og_image ?? SoftwareIcons::url($software->slug, $software->icon),
                'canonical' => url('/software/'.$software->slug),
                'type' => 'software',
            ],
        ]);
    }
}
