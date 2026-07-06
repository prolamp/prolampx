<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $category = BlogCategory::query()->where('slug', 'guides')->first();

        BlogPost::query()->updateOrCreate(
            ['slug' => 'setup-fresh-windows-pc'],
            [
                'title' => 'How to Set Up a Fresh Windows PC in One Click',
                'blog_category_id' => $category?->id,
                'body' => '<p>Use ProLampX to pick essential apps and download a single installer for your new Windows machine.</p>',
                'meta_title' => 'Setup Fresh Windows PC — ProLampX',
                'meta_description' => 'Install Chrome, VS Code, Git, and more on a fresh Windows PC with one ProLampX installer.',
                'published_at' => now(),
            ]
        );
    }
}
