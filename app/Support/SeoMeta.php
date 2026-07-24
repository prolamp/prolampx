<?php

namespace App\Support;

class SeoMeta
{
    /**
     * @param  array<string, mixed>  $overrides
     * @return array<string, mixed>
     */
    public static function page(string $key, array $overrides = []): array
    {
        /** @var array<string, mixed> $page */
        $page = config('seo.pages.'.$key, []);
        $path = $overrides['path'] ?? null;
        unset($overrides['path']);

        $seo = array_merge([
            'title' => config('seo.defaults.site_name', 'ProLampX'),
            'description' => '',
            'keywords' => '',
            'image' => config('seo.defaults.image'),
            'canonical' => null,
            'type' => 'website',
        ], $page, $overrides);

        if (is_string($path) && $path !== '' && empty($seo['canonical'])) {
            $seo['canonical'] = url($path);
        }

        return $seo;
    }

    public static function brandTitle(string $title, string $suffix = 'ProLampX'): string
    {
        if (str_contains($title, $suffix)) {
            return $title;
        }

        return $title.' | '.$suffix;
    }
}
