<?php

namespace App\Http\Controllers;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Support\SeoMeta;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(): Response
    {
        $categorySlug = request()->query('category');

        $posts = BlogPost::query()
            ->published()
            ->with('category:id,name,slug')
            ->when($categorySlug, fn ($q) => $q->whereHas('category', fn ($c) => $c->where('slug', $categorySlug)))
            ->latest('published_at')
            ->paginate(12)
            ->through(fn (BlogPost $post) => [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'cover_image' => $post->cover_image,
                'published_at' => $post->published_at?->toDateString(),
                'excerpt' => $post->meta_description ?? str($post->body)->stripTags()->limit(160)->value(),
                'category' => $post->category ? [
                    'name' => $post->category->name,
                    'slug' => $post->category->slug,
                ] : null,
            ]);

        return Inertia::render('blog/index', [
            'posts' => $posts,
            'categories' => BlogCategory::query()
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get(['id', 'name', 'slug']),
            'activeCategory' => $categorySlug,
            'seo' => SeoMeta::page('blog', ['path' => '/blog']),
        ]);
    }

    public function show(BlogPost $post): Response
    {
        abort_unless($post->published_at && $post->published_at->lte(now()), 404);

        $post->load('category:id,name,slug');

        return Inertia::render('blog/show', [
            'post' => [
                ...$post->only([
                    'id', 'title', 'slug', 'body', 'cover_image',
                    'meta_title', 'meta_description', 'meta_keywords',
                    'og_image', 'canonical_url', 'published_at',
                ]),
                'category' => $post->category ? [
                    'name' => $post->category->name,
                    'slug' => $post->category->slug,
                ] : null,
            ],
            'seo' => [
                'title' => SeoMeta::brandTitle($post->meta_title ?? $post->title, 'ProLampX Blog'),
                'description' => $post->meta_description ?? str($post->body)->stripTags()->limit(160)->value(),
                'keywords' => $post->meta_keywords ?: 'ProLampX blog, software setup guides, free software installer, Windows macOS Ubuntu',
                'image' => $post->og_image ?? $post->cover_image ?? config('seo.defaults.image'),
                'canonical' => $post->canonical_url ?: url('/blog/'.$post->slug),
                'type' => 'article',
            ],
        ]);
    }
}
