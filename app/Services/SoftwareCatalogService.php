<?php

namespace App\Services;

use App\Enums\OperatingSystem;
use App\Events\CatalogUpdated;
use App\Models\Software;
use App\Support\CacheKeys;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

class SoftwareCatalogService
{
    /**
     * @return Collection<int, Software>
     */
    public function forOs(string $os): Collection
    {
        if (! in_array($os, array_column(OperatingSystem::cases(), 'value'), true)) {
            return collect();
        }

        return Software::query()
            ->select([
                'id', 'name', 'slug', 'icon', 'category', 'category_id',
                'license_type', 'access_tier', 'latest_version',
                'description', 'is_featured', 'sort_order',
            ])
            ->where('is_active', true)
            ->whereHas('installCommands', fn ($q) => $q->where('os', $os))
            ->with([
                'categoryRelation:id,name,slug',
                'installCommands' => fn ($q) => $q->where('os', $os)->select('id', 'software_id', 'os', 'package_manager', 'command'),
            ])
            ->orderBy('category')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();
    }

    public function flush(string $os): void
    {
        Cache::forget(CacheKeys::softwareCatalog($os));
    }

    public function flushAll(): void
    {
        foreach (OperatingSystem::cases() as $case) {
            $this->flush($case->value);
        }

        if (! Cache::has('catalog:version')) {
            Cache::put('catalog:version', 1);
        }

        $version = (int) Cache::increment('catalog:version');

        try {
            broadcast(new CatalogUpdated($version));
        } catch (\Throwable) {
            // Reverb may be offline — polling fallback still updates clients.
        }
    }

    public function version(): int
    {
        return (int) Cache::get('catalog:version', 1);
    }
}
