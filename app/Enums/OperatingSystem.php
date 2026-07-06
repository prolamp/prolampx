<?php

namespace App\Enums;

enum OperatingSystem: string
{
    case Windows = 'windows';
    case Macos = 'macos';
    case Ubuntu = 'ubuntu';

    public function label(): string
    {
        return match ($this) {
            self::Windows => 'Windows',
            self::Macos => 'macOS',
            self::Ubuntu => 'Ubuntu',
        };
    }

    public function installerExtension(): string
    {
        return match ($this) {
            self::Windows => 'bat',
            self::Macos => 'command',
            self::Ubuntu => 'sh',
        };
    }

    public function installerFilename(): string
    {
        return 'prolampx-setup.'.$this->installerExtension();
    }
}
