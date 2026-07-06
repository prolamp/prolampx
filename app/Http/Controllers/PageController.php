<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function show(Page $page): Response
    {
        return Inertia::render('page/show', [
            'page' => $page->only(['title', 'slug', 'body', 'meta_title', 'meta_description', 'og_image']),
            'seo' => [
                'title' => $page->meta_title ?? $page->title,
                'description' => $page->meta_description,
                'image' => $page->og_image,
            ],
        ]);
    }
}
