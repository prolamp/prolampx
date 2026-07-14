<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('home', [
            'contactEmail' => config('mail.contact_to'),
            'seo' => [
                'title' => 'ProLampX — Install Software for Windows, macOS & Ubuntu',
                'description' => 'Pick apps, download one installer, and set up your fresh PC or laptop in minutes. Free and freeware software for Windows, macOS, and Ubuntu.',
                'keywords' => 'ProLampX, software installer, free software, Windows installer, macOS installer, Ubuntu installer, winget, Homebrew, apt, freeware setup',
                'image' => '/images/blog/home-page.png',
                'canonical' => url('/'),
            ],
        ]);
    }
}
