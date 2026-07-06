<?php

namespace App\Models;

use App\Enums\OperatingSystem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SoftwareInstallCommand extends Model
{
    protected $fillable = [
        'software_id',
        'os',
        'package_manager',
        'command',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'os' => OperatingSystem::class,
        ];
    }

    public function software(): BelongsTo
    {
        return $this->belongsTo(Software::class);
    }
}
