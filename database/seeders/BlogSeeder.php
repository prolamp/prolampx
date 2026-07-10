<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use Database\Seeders\Support\BlogPostContent;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        foreach (BlogPostContent::posts() as $post) {
            $category = BlogCategory::query()->where('slug', $post['category_slug'])->first();

            BlogPost::query()->updateOrCreate(
                ['slug' => $post['slug']],
                [
                    'title' => $post['title'],
                    'blog_category_id' => $category?->id,
                    'body' => $post['body'],
                    'cover_image' => $post['cover_image'] ?? null,
                    'og_image' => $post['og_image'] ?? null,
                    'meta_title' => $post['meta_title'],
                    'meta_description' => $post['meta_description'],
                    'published_at' => now()->subDays(match ($post['slug']) {
                        'how-to-download-and-install-software-with-prolampx' => 1,
                        'setup-fresh-windows-pc' => 3,
                        'install-software-on-macos-with-prolampx' => 5,
                        'install-software-on-ubuntu-with-prolampx' => 7,
                        default => 0,
                    }),
                ]
            );
        }
    }
}
