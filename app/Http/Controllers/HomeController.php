<?php

namespace App\Http\Controllers;

use App\Support\SeoMeta;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('home', [
            'contactEmail' => config('mail.contact_to'),
            'seo' => SeoMeta::page('home', ['path' => '/']),
        ]);
    }
}
