<?php

namespace App\Services;

use App\Enums\OperatingSystem;
use App\Models\GeneratedSetup;
use App\Models\Software;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class InstallScriptGenerator
{
    /**
     * @param  Collection<int, Software>  $software
     * @return array{content: string, filename: string, mime_type: string, download_url: string, warnings: array<int, string>}
     */
    public function generate(Collection $software, OperatingSystem $os): array
    {
        $commands = $software
            ->flatMap(fn (Software $item) => $item->installCommands->where('os', $os))
            ->pluck('command')
            ->filter()
            ->values();

        $warnings = [];

        if ($commands->isEmpty()) {
            $warnings[] = 'No install commands found for the selected software on this OS.';
        }

        $content = match ($os) {
            OperatingSystem::Windows => $this->buildWindowsScript($commands),
            OperatingSystem::Macos => $this->buildMacScript($commands),
            OperatingSystem::Ubuntu => $this->buildUbuntuScript($commands),
        };

        $filename = $os->installerFilename();

        return [
            'content' => $content,
            'filename' => $filename,
            'mime_type' => 'text/plain',
            'download_url' => '',
            'warnings' => $warnings,
        ];
    }

    public function store(Collection $software, OperatingSystem $os, array $generated): GeneratedSetup
    {
        $token = Str::random(48);

        $setup = GeneratedSetup::query()->create([
            'token' => $token,
            'os' => $os,
            'software_ids' => $software->pluck('id')->values()->all(),
            'file_content' => $generated['content'],
            'filename' => $generated['filename'],
            'expires_at' => now()->addDays(7),
        ]);

        $generated['download_url'] = route('installer.download', [
            'token' => $token,
            'extension' => $os->installerExtension(),
        ]);

        return $setup;
    }

    /**
     * @param  Collection<int, string>  $commands
     */
    private function buildWindowsScript(Collection $commands): string
    {
        $lines = [
            '@echo off',
            'title ProLampX Setup',
            'echo ProLampX - Installing selected software...',
            'echo.',
        ];

        foreach ($commands as $command) {
            $lines[] = 'echo Installing: '.$command;
            $lines[] = $command.' --accept-package-agreements --accept-source-agreements';
            $lines[] = 'if errorlevel 1 echo Warning: install may have failed for above step.';
            $lines[] = 'echo.';
        }

        $lines[] = 'echo Done.';
        $lines[] = 'pause';

        return implode("\r\n", $lines);
    }

    /**
     * @param  Collection<int, string>  $commands
     */
    private function buildMacScript(Collection $commands): string
    {
        $lines = [
            '#!/bin/bash',
            'cd "$(dirname "$0")"',
            'echo "ProLampX - Installing selected software..."',
            'echo',
        ];

        foreach ($commands as $command) {
            $lines[] = 'echo "Running: '.$command.'"';
            $lines[] = $command;
        }

        $lines[] = 'echo';
        $lines[] = 'echo "Done."';
        $lines[] = 'read -p "Press Enter to close..." _';

        return implode("\n", $lines);
    }

    /**
     * @param  Collection<int, string>  $commands
     */
    private function buildUbuntuScript(Collection $commands): string
    {
        $lines = [
            '#!/bin/bash',
            'set -e',
            'echo "ProLampX - Installing selected software..."',
            'echo',
        ];

        foreach ($commands as $command) {
            $lines[] = 'echo "Running: '.$command.'"';
            $lines[] = $command;
        }

        $lines[] = 'echo';
        $lines[] = 'echo "Done."';

        return implode("\n", $lines);
    }
}
