<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\PortfolioSection;
use App\Services\SoftwareCatalogService;
use App\Support\OperatingSystemDetector;
use App\Support\SoftwareIcons;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(SoftwareCatalogService $catalog): Response
    {
        $detected = request()->attributes->get('detected_os', 'unknown');
        $os = OperatingSystemDetector::resolveCatalogOs((string) $detected);

        $sections = PortfolioSection::query()
            ->active()
            ->orderBy('sort_order')
            ->get()
            ->map(fn (PortfolioSection $section) => [
                'id' => $section->id,
                'type' => $section->type,
                'title' => $section->title,
                'subtitle' => $section->subtitle,
                'body' => $section->body,
                'image' => $section->image,
                'settings' => $section->settings ?? [],
            ]);

        return Inertia::render('home', [
            'detectedOs' => $detected,
            'selectedOs' => $os,
            'catalogVersion' => $catalog->version(),
            'sections' => $sections,
            'featuredSoftware' => $catalog->forOs($os)
                ->where('is_featured', true)
                ->take(8)
                ->map(fn ($s) => [
                    'id' => $s->id,
                    'name' => $s->name,
                    'slug' => $s->slug,
                    'icon' => SoftwareIcons::url($s->slug, $s->icon),
                ])
                ->values(),
            'latestPosts' => BlogPost::query()
                ->published()
                ->with('category:id,name,slug')
                ->latest('published_at')
                ->limit(3)
                ->get(['id', 'title', 'slug', 'cover_image', 'published_at', 'meta_description', 'blog_category_id'])
                ->map(fn (BlogPost $post) => [
                    'id' => $post->id,
                    'title' => $post->title,
                    'slug' => $post->slug,
                    'cover_image' => $post->cover_image,
                    'published_at' => $post->published_at?->toDateString(),
                    'meta_description' => $post->meta_description,
                    'category' => $post->category ? [
                        'name' => $post->category->name,
                        'slug' => $post->category->slug,
                    ] : null,
                ]),
            'seo' => [
                'title' => 'ProLampX — Install Software for Windows, macOS & Ubuntu',
                'description' => 'Pick apps, download one installer, and set up your fresh PC or laptop in minutes. Free and freeware software for Windows, macOS, and Ubuntu.',
            ],
        ]);
    }
}
