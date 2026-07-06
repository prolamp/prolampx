<?php

namespace Database\Seeders;

use App\Models\PortfolioSection;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        PortfolioSection::query()->updateOrCreate(
            ['type' => 'hero', 'sort_order' => 0],
            [
                'title' => 'Install your apps on a fresh PC in one click',
                'subtitle' => 'Pick software for your OS, download a single installer, and let ProLampX handle the rest — no toolbars, no junk.',
                'is_active' => true,
                'settings' => [
                    'cta_text' => 'Get Your Installer',
                    'cta_url' => '/installer',
                    'secondary_cta_text' => 'Browse catalog',
                    'secondary_cta_url' => '/software',
                ],
            ]
        );

        PortfolioSection::query()->updateOrCreate(
            ['type' => 'about', 'sort_order' => 10],
            [
                'title' => 'About ProLampX',
                'body' => '<p>ProLampX is a Ninite-style installer for Windows, macOS, and Ubuntu. We help you set up a new machine with the right free and freeware software — fast, clean, and without bundled junk.</p>',
                'is_active' => true,
            ]
        );

        PortfolioSection::query()->updateOrCreate(
            ['type' => 'features', 'sort_order' => 20],
            [
                'title' => 'Why ProLampX',
                'is_active' => true,
                'settings' => [
                    'items' => [
                        ['title' => 'One-click bulk install', 'description' => 'Select apps and download a single installer script.', 'icon' => 'zap'],
                        ['title' => 'OS-aware catalog', 'description' => 'Only shows software available for your operating system.', 'icon' => 'monitor'],
                        ['title' => 'Curated bundles', 'description' => 'Start from preset app groups like a Fresh Dev Setup.', 'icon' => 'layers'],
                    ],
                ],
            ]
        );

        PortfolioSection::query()->updateOrCreate(
            ['type' => 'projects', 'sort_order' => 30],
            [
                'title' => 'What we build',
                'subtitle' => 'Tools and experiences for developers and everyday users.',
                'is_active' => true,
                'settings' => [
                    'items' => [
                        [
                            'title' => 'App Installer',
                            'description' => 'Multi-OS software installer with bundle support.',
                            'image' => null,
                            'url' => '/installer',
                        ],
                        [
                            'title' => 'Software Catalog',
                            'description' => 'Browse free and freeware apps by category.',
                            'image' => null,
                            'url' => '/software',
                        ],
                    ],
                ],
            ]
        );

        PortfolioSection::query()->updateOrCreate(
            ['type' => 'cta', 'sort_order' => 40],
            [
                'title' => 'Ready to set up your machine?',
                'subtitle' => 'Pick your apps and download your installer in under a minute.',
                'is_active' => true,
                'settings' => [
                    'cta_text' => 'Start installing',
                    'cta_url' => '/installer',
                ],
            ]
        );
    }
}
