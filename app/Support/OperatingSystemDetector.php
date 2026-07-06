<?php

namespace App\Support;

use App\Enums\OperatingSystem;

class OperatingSystemDetector
{
    /**
     * Detect OS from User-Agent. Returns windows|macos|ubuntu|linux|unknown.
     */
    public static function detectFromUserAgent(string $userAgent): string
    {
        $ua = strtolower($userAgent);

        if ($ua === '') {
            return 'unknown';
        }

        // Windows (10, 11, etc.)
        if (preg_match('/windows nt|win32|win64|wow64|windows phone/', $ua)) {
            return OperatingSystem::Windows->value;
        }

        // macOS (exclude iPhone/iPad unless desktop mode — still treat as macos for cask installs)
        if (preg_match('/macintosh|mac os x|mac_powerpc/', $ua)) {
            return OperatingSystem::Macos->value;
        }

        // Ubuntu is often explicit in UA on desktop
        if (str_contains($ua, 'ubuntu')) {
            return OperatingSystem::Ubuntu->value;
        }

        // Other Linux distros
        if (preg_match('/linux|x11|fedora|debian|arch|manjaro|centos|rhel/', $ua)) {
            return 'linux';
        }

        // Chromium OS / Chromebook
        if (str_contains($ua, 'cros')) {
            return 'linux';
        }

        return 'unknown';
    }

    /**
     * Map detected value to a supported catalog OS (defaults to windows).
     */
    public static function resolveCatalogOs(string $detected, bool $assumeUbuntuForLinux = true): string
    {
        if (in_array($detected, array_column(OperatingSystem::cases(), 'value'), true)) {
            return $detected;
        }

        if ($detected === 'linux' && $assumeUbuntuForLinux) {
            return OperatingSystem::Ubuntu->value;
        }

        return OperatingSystem::Windows->value;
    }
}
