<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Support\SeoMeta;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function show(string $slug): Response
    {
        $page = Page::query()
            ->where('slug', $slug)
            ->where('is_published', true)
            ->first();

        if (! $page) {
            throw new ModelNotFoundException();
        }

        return Inertia::render('page/show', [
            'page' => $page->only(['title', 'slug', 'body', 'meta_title', 'meta_description', 'og_image', 'is_published']),
            'seo' => [
                'title' => SeoMeta::brandTitle($page->meta_title ?? $page->title),
                'description' => $page->meta_description
                    ?: str($page->body)->stripTags()->limit(160)->value(),
                'keywords' => match ($page->slug) {
                    'privacy-policy' => 'ProLampX privacy policy, data protection, personal data, AdSense privacy',
                    'terms-of-service' => 'ProLampX terms of service, terms and conditions, installer terms',
                    'cookie-policy' => 'ProLampX cookie policy, cookies consent, advertising cookies',
                    default => 'ProLampX, '.$page->title,
                },
                'image' => $page->og_image ?? config('seo.defaults.image'),
                'canonical' => url('/page/'.$page->slug),
            ],
        ]);
    }
}
