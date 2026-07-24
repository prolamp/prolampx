<?php

namespace App\Http\Controllers;

use App\Models\Page;
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
                'title' => $page->meta_title ?? $page->title,
                'description' => $page->meta_description,
                'image' => $page->og_image,
            ],
        ]);
    }
}
