<?php

namespace Database\Seeders;

use App\Models\Bundle;
use App\Models\Software;
use Illuminate\Database\Seeder;

class BundleSeeder extends Seeder
{
    public function run(): void
    {
        $bundle = Bundle::query()->updateOrCreate(
            ['slug' => 'fresh-dev-setup'],
            [
                'name' => 'Fresh Dev Setup',
                'description' => 'Essential developer tools for a new machine — Chrome, VS Code, Git, and Node.js pre-selected.',
                'is_featured' => true,
                'is_active' => true,
            ]
        );

        $bundle->software()->sync(
            Software::query()->whereIn('slug', ['google-chrome', 'visual-studio-code', 'git', 'nodejs'])->pluck('id')
        );
    }
}
