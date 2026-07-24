<?php

namespace App\Http\Controllers;

use App\Models\Bundle;
use App\Models\Software;
use App\Support\SeoMeta;
use App\Support\SoftwareIcons;
use Inertia\Inertia;
use Inertia\Response;

class BundlePageController extends Controller
{
    public function index(): Response
    {
        $bundles = Bundle::query()
            ->where('is_active', true)
            ->with(['software' => fn ($q) => $q->where('is_active', true)->select('software.id', 'name', 'slug', 'icon')])
            ->orderByDesc('is_featured')
            ->orderBy('name')
            ->get()
            ->map(fn (Bundle $bundle) => $this->formatBundle($bundle));

        return Inertia::render('bundles/index', [
            'bundles' => $bundles,
            'seo' => SeoMeta::page('bundles', ['path' => '/bundles']),
        ]);
    }

    public function show(Bundle $bundle): Response
    {
        abort_unless($bundle->is_active, 404);

        $bundle->load(['software' => fn ($q) => $q->where('is_active', true)]);

        return Inertia::render('bundles/show', [
            'bundle' => $this->formatBundle($bundle, detailed: true),
            'seo' => [
                'title' => SeoMeta::brandTitle($bundle->meta_title ?? "{$bundle->name} Software Bundle"),
                'description' => $bundle->meta_description
                    ?: ($bundle->description
                        ?: "Install the {$bundle->name} app bundle on Windows, macOS, or Ubuntu with one ProLampX setup file."),
                'keywords' => "{$bundle->name}, software bundle, app bundle, ProLampX installer, curated apps",
                'image' => config('seo.defaults.image'),
                'canonical' => url('/bundles/'.$bundle->slug),
            ],
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    private function formatBundle(Bundle $bundle, bool $detailed = false): array
    {
        return [
            'id' => $bundle->id,
            'name' => $bundle->name,
            'slug' => $bundle->slug,
            'description' => $bundle->description,
            'is_featured' => $bundle->is_featured,
            'software_count' => $bundle->software->count(),
            'software' => $bundle->software->map(fn (Software $s) => array_filter([
                'id' => $s->id,
                'name' => $s->name,
                'slug' => $s->slug,
                'icon' => SoftwareIcons::url($s->slug, $s->icon),
                'description' => $detailed ? $s->description : null,
                'license_type' => $detailed ? ($s->license_type->value ?? $s->license_type) : null,
                'category' => $detailed ? $s->category : null,
            ]))->values()->all(),
        ];
    }
}
