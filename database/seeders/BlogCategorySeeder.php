<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use Illuminate\Database\Seeder;

class BlogCategorySeeder extends Seeder
{
    public function run(): void
    {
        BlogCategory::query()->updateOrCreate(
            ['slug' => 'guides'],
            [
                'name' => 'Guides',
                'description' => 'How-to guides for setting up your PC or laptop.',
                'sort_order' => 0,
                'is_active' => true,
            ]
        );

        BlogCategory::query()->updateOrCreate(
            ['slug' => 'news'],
            [
                'name' => 'News',
                'description' => 'Product updates and announcements.',
                'sort_order' => 1,
                'is_active' => true,
            ]
        );
    }
}
