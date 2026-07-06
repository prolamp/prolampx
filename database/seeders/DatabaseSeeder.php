<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            PageSeeder::class,
            PortfolioSeeder::class,
            BlogCategorySeeder::class,
            BlogSeeder::class,
            SoftwareSeeder::class,
            BundleSeeder::class,
        ]);
    }
}
