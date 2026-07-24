<?php

return [
    'defaults' => [
        'image' => '/images/prolampx-logo.png',
        'site_name' => 'ProLampX',
    ],

    /*
    |--------------------------------------------------------------------------
    | Static public page SEO
    | Titles ~50–60 chars, descriptions ~150–160 chars where possible.
    | Keywords support discovery tools; Google ranking still depends on content.
    |--------------------------------------------------------------------------
    */
    'pages' => [
        'home' => [
            'title' => 'ProLampX — Software Development, IT Consultancy & Products',
            'description' => 'ProLampX delivers web development, mobile apps, staff augmentation, and product engineering—plus the free multi-OS ProLampX installer for Windows, macOS, and Ubuntu.',
            'keywords' => 'ProLampX, software development company, web development, mobile app development, IT consultancy, staff augmentation, UI UX design, software installer, Windows macOS Ubuntu',
            'image' => '/images/blog/home-page.png',
        ],
        'about' => [
            'title' => 'About ProLampX — Engineering Culture & Company Story',
            'description' => 'Learn how ProLampX bridges enterprise reliability with modern DevOps. Our story, core values, and approach to building high-performance software products.',
            'keywords' => 'about ProLampX, software engineering company, IT agency, DevOps consultancy, product engineering team, enterprise software partner',
        ],
        'services' => [
            'title' => 'Software Development Services — Web, Mobile & Design | ProLampX',
            'description' => 'Hire ProLampX for full-stack web development, native and Flutter mobile apps, staff augmentation, and UI/UX design. End-to-end engineering for modern businesses.',
            'keywords' => 'web development services, mobile app development, staff augmentation, UI UX design, React development, Flutter development, tech lead consulting, ProLampX services',
        ],
        'products' => [
            'title' => 'ProLampX Products — Installer, InsightEngine & SecureAuth',
            'description' => 'Explore the ProLampX product ecosystem: multi-OS freeware installer, InsightEngine analytics, SecureAuth Pro zero-trust identity, and Internal Labs experiments.',
            'keywords' => 'ProLampX products, software installer, InsightEngine, SecureAuth Pro, product ecosystem, freeware installer, zero trust authentication, infrastructure tools',
        ],
        'installer' => [
            'title' => 'Free Software Installer for Windows, macOS & Ubuntu | ProLampX',
            'description' => 'Pick free apps for your OS, download one custom setup file, and install everything automatically via winget, Homebrew, or apt. No account required.',
            'keywords' => 'software installer, free software installer, Windows installer, macOS installer, Ubuntu installer, winget installer, Homebrew batch install, apt installer, Ninite alternative, freeware setup',
        ],
        'software' => [
            'title' => 'Free Software Catalog for Windows, macOS & Ubuntu | ProLampX',
            'description' => 'Browse curated free and open-source apps for Windows, macOS, and Ubuntu. Filter by category and add them to your ProLampX one-click installer.',
            'keywords' => 'free software catalog, freeware download, open source software, Windows free apps, macOS free apps, Ubuntu packages, software library, ProLampX catalog',
        ],
        'bundles' => [
            'title' => 'Curated Software Bundles — Developer, Design & More | ProLampX',
            'description' => 'Start with ready-made app bundles for developers, designers, privacy, and fresh installs. One click applies a toolkit to your ProLampX installer.',
            'keywords' => 'software bundles, app bundles, developer toolkit, design software bundle, privacy apps, fresh PC setup, ProLampX bundles, curated installers',
        ],
        'blog' => [
            'title' => 'Blog — Setup Guides for Windows, macOS & Ubuntu | ProLampX',
            'description' => 'Practical guides and tips for installing free software, setting up fresh PCs, and using ProLampX on Windows, macOS, and Ubuntu.',
            'keywords' => 'ProLampX blog, software setup guides, Windows PC setup, Mac app install guide, Ubuntu package install, freeware tutorials, multi OS installer tips',
        ],
        'contact' => [
            'title' => 'Contact ProLampX — Projects, Support & Partnerships',
            'description' => 'Contact ProLampX for project inquiries, product support, privacy requests, or partnership opportunities. We typically respond as soon as we can.',
            'keywords' => 'contact ProLampX, software project inquiry, IT consultancy contact, installer support, business partnership, privacy request',
        ],
    ],
];
