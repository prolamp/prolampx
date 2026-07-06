<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        Page::query()->updateOrCreate(
            ['slug' => 'privacy-policy'],
            [
                'title' => 'Privacy Policy',
                'body' => '<p>ProLampX respects your privacy. We use cookies and Google AdSense to serve ads. We do not sell personal data.</p>',
                'meta_title' => 'Privacy Policy — ProLampX',
                'meta_description' => 'ProLampX privacy policy for visitors and installer users.',
            ]
        );
    }
}
