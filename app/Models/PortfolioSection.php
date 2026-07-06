<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class PortfolioSection extends Model
{
    public const TYPES = [
        'hero',
        'about',
        'features',
        'projects',
        'text',
        'cta',
        'contact',
    ];

    protected $fillable = [
        'type',
        'title',
        'subtitle',
        'body',
        'image',
        'settings',
        'sort_order',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'settings' => 'array',
            'is_active' => 'boolean',
        ];
    }

    /**
     * @param  Builder<PortfolioSection>  $query
     * @return Builder<PortfolioSection>
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }
}
