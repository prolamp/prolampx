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

        BlogCategory::query()->updateOrCreate(
            ['slug' => 'windows'],
            [
                'name' => 'Windows',
                'description' => 'Setup guides for Windows 10 and Windows 11.',
                'sort_order' => 2,
                'is_active' => true,
            ]
        );

        BlogCategory::query()->updateOrCreate(
            ['slug' => 'macos'],
            [
                'name' => 'macOS',
                'description' => 'Setup guides for Mac computers.',
                'sort_order' => 3,
                'is_active' => true,
            ]
        );

        BlogCategory::query()->updateOrCreate(
            ['slug' => 'ubuntu'],
            [
                'name' => 'Ubuntu',
                'description' => 'Setup guides for Ubuntu and Linux desktops.',
                'sort_order' => 4,
                'is_active' => true,
            ]
        );
    }
}
