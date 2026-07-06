<?php

namespace App\Models;

use App\Enums\OperatingSystem;
use Illuminate\Database\Eloquent\Model;

class GeneratedSetup extends Model
{
    protected $fillable = [
        'token',
        'os',
        'software_ids',
        'file_content',
        'filename',
        'expires_at',
    ];

    protected function casts(): array
    {
        return [
            'os' => OperatingSystem::class,
            'software_ids' => 'array',
            'expires_at' => 'datetime',
        ];
    }
}
