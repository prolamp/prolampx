<?php

namespace App\Support;

class SoftwareIcons
{
    /** @var array<string, string> */
    private const MAP = [
        'google-chrome' => 'https://cdn.simpleicons.org/googlechrome/4285F4',
        'mozilla-firefox' => 'https://cdn.simpleicons.org/firefox/FF7139',
        'visual-studio-code' => 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
        'git' => 'https://cdn.simpleicons.org/git/F05032',
        'nodejs' => 'https://cdn.simpleicons.org/nodedotjs/339933',
        'vlc' => 'https://cdn.simpleicons.org/vlcmediaplayer/FF8800',
        '7-zip' => 'https://cdn.simpleicons.org/7zip/000000',
        'notepad-plus-plus' => 'https://cdn.simpleicons.org/notepadplusplus/90E59A',
        'slack' => 'https://cdn.simpleicons.org/slack/4A154B',
        'zoom' => 'https://cdn.simpleicons.org/zoom/0B5CFF',
        'spotify' => 'https://cdn.simpleicons.org/spotify/1DB954',
        'docker-desktop' => 'https://cdn.simpleicons.org/docker/2496ED',
    ];

    public static function url(string $slug, ?string $stored = null): string
    {
        if (filled($stored)) {
            return $stored;
        }

        return self::MAP[$slug] ?? self::fallback($slug);
    }

    public static function fallback(string $slug): string
    {
        $label = str_replace('-', ' ', $slug);

        return 'https://ui-avatars.com/api/?'.http_build_query([
            'name' => $label,
            'background' => '6366f1',
            'color' => 'ffffff',
            'size' => '128',
            'bold' => 'true',
            'format' => 'svg',
        ]);
    }

    /**
     * @return array<string, string>
     */
    public static function catalogMap(): array
    {
        return self::MAP;
    }
}
