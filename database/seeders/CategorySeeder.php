<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * @return array<int, array{name: string, slug: string, sort_order: int}>
     */
    public static function definitions(): array
    {
        return [
            ['name' => 'Web Browsers', 'slug' => 'browsers', 'sort_order' => 1],
            ['name' => 'Developer Tools', 'slug' => 'developer-tools', 'sort_order' => 2],
            ['name' => 'Messaging', 'slug' => 'messaging', 'sort_order' => 3],
            ['name' => 'Media', 'slug' => 'media', 'sort_order' => 4],
            ['name' => 'Utilities', 'slug' => 'utilities', 'sort_order' => 5],
            ['name' => 'Security', 'slug' => 'security', 'sort_order' => 6],
            ['name' => 'Compression', 'slug' => 'compression', 'sort_order' => 7],
        ];
    }

    public function run(): void
    {
        foreach (self::definitions() as $category) {
            Category::query()->updateOrCreate(
                ['slug' => $category['slug']],
                $category
            );
        }
    }
}
