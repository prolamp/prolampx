<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'body',
        'meta_title',
        'meta_description',
        'og_image',
        'is_published',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
