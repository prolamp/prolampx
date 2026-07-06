<?php

namespace App\Models;

use App\Enums\AccessTier;
use App\Enums\LicenseType;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property-read Collection<int, SoftwareInstallCommand> $installCommands
 * @property-read Collection<int, Bundle> $bundles
 * @property-read Category|null $categoryRelation
 */
class Software extends Model
{
    protected $table = 'software';

    protected $fillable = [
        'name',
        'slug',
        'icon',
        'category_id',
        'category',
        'license_type',
        'access_tier',
        'latest_version',
        'description',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'og_image',
        'is_featured',
        'is_active',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'license_type' => LicenseType::class,
            'access_tier' => AccessTier::class,
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ];
    }

    public function installCommands(): HasMany
    {
        return $this->hasMany(SoftwareInstallCommand::class);
    }

    public function categoryRelation(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function bundles(): BelongsToMany
    {
        return $this->belongsToMany(Bundle::class, 'bundle_software');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
