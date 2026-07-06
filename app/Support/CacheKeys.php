<?php

namespace App\Support;

class CacheKeys
{
    public static function softwareCatalog(string $os): string
    {
        return "software.catalog.{$os}";
    }

    public static function sitemap(): string
    {
        return 'sitemap.xml';
    }
}
