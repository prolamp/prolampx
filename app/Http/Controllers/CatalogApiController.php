<?php

namespace App\Http\Controllers;

use App\Services\SoftwareCatalogService;
use App\Support\SoftwareIcons;
use Illuminate\Http\JsonResponse;

class CatalogApiController extends Controller
{
    public function version(SoftwareCatalogService $catalog): JsonResponse
    {
        return response()->json(['version' => $catalog->version()]);
    }

    public function show(string $os, SoftwareCatalogService $catalog): JsonResponse
    {
        $software = $catalog->forOs($os);

        return response()->json([
            'version' => $catalog->version(),
            'software_ids' => $software->pluck('id')->values()->all(),
            'categories' => $software
                ->groupBy(fn ($s) => $s->categoryRelation?->name ?? str_replace('-', ' ', $s->category))
                ->map(fn ($items) => $items->map(fn ($s) => [
                    'id' => $s->id,
                    'name' => $s->name,
                    'slug' => $s->slug,
                    'icon' => SoftwareIcons::url($s->slug, $s->icon),
                    'category' => $s->category,
                    'is_featured' => $s->is_featured,
                    'license_type' => $s->license_type->value ?? $s->license_type,
                ])->values()->all())
                ->all(),
        ]);
    }
}
