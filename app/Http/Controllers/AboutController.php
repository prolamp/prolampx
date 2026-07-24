<?php

namespace App\Http\Controllers;

use App\Support\SeoMeta;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('about/index', [
            'seo' => SeoMeta::page('about', ['path' => '/about']),
        ]);
    }
}
