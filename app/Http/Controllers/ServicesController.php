<?php

namespace App\Http\Controllers;

use App\Support\SeoMeta;
use Inertia\Inertia;
use Inertia\Response;

class ServicesController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('services/index', [
            'seo' => SeoMeta::page('services', ['path' => '/services']),
        ]);
    }
}
