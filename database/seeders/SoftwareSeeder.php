<?php

namespace Database\Seeders;

use App\Enums\AccessTier;
use App\Enums\LicenseType;
use App\Enums\OperatingSystem;
use App\Models\Category;
use App\Models\Software;
use App\Support\SoftwareIcons;
use Illuminate\Database\Seeder;

class SoftwareSeeder extends Seeder
{
    public function run(): void
    {
        $catalog = [
            ['name' => 'Google Chrome', 'slug' => 'google-chrome', 'category' => 'browsers', 'featured' => true, 'commands' => [
                'windows' => 'winget install -e --id Google.Chrome',
                'macos' => 'brew install --cask google-chrome',
                'ubuntu' => 'sudo snap install chromium',
            ]],
            ['name' => 'Mozilla Firefox', 'slug' => 'mozilla-firefox', 'category' => 'browsers', 'featured' => false, 'commands' => [
                'windows' => 'winget install -e --id Mozilla.Firefox',
                'macos' => 'brew install --cask firefox',
                'ubuntu' => 'sudo snap install firefox',
            ]],
            ['name' => 'Visual Studio Code', 'slug' => 'visual-studio-code', 'category' => 'developer-tools', 'featured' => true, 'commands' => [
                'windows' => 'winget install -e --id Microsoft.VisualStudioCode',
                'macos' => 'brew install --cask visual-studio-code',
                'ubuntu' => 'sudo snap install code --classic',
            ]],
            ['name' => 'Git', 'slug' => 'git', 'category' => 'developer-tools', 'featured' => true, 'commands' => [
                'windows' => 'winget install -e --id Git.Git',
                'macos' => 'brew install git',
                'ubuntu' => 'sudo apt install -y git',
            ]],
            ['name' => 'Node.js', 'slug' => 'nodejs', 'category' => 'developer-tools', 'featured' => true, 'commands' => [
                'windows' => 'winget install -e --id OpenJS.NodeJS.LTS',
                'macos' => 'brew install node',
                'ubuntu' => 'sudo apt install -y nodejs npm',
            ]],
            ['name' => 'VLC Media Player', 'slug' => 'vlc', 'category' => 'media', 'featured' => true, 'commands' => [
                'windows' => 'winget install -e --id VideoLAN.VLC',
                'macos' => 'brew install --cask vlc',
                'ubuntu' => 'sudo apt install -y vlc',
            ]],
            ['name' => '7-Zip', 'slug' => '7-zip', 'category' => 'utilities', 'featured' => true, 'commands' => [
                'windows' => 'winget install -e --id 7zip.7zip',
                'macos' => 'brew install p7zip',
                'ubuntu' => 'sudo apt install -y p7zip-full',
            ]],
            ['name' => 'Notepad++', 'slug' => 'notepad-plus-plus', 'category' => 'developer-tools', 'featured' => false, 'commands' => [
                'windows' => 'winget install -e --id Notepad++.Notepad++',
            ]],
            ['name' => 'Slack', 'slug' => 'slack', 'category' => 'messaging', 'featured' => false, 'commands' => [
                'windows' => 'winget install -e --id SlackTechnologies.Slack',
                'macos' => 'brew install --cask slack',
                'ubuntu' => 'sudo snap install slack',
            ]],
            ['name' => 'Zoom', 'slug' => 'zoom', 'category' => 'messaging', 'featured' => false, 'commands' => [
                'windows' => 'winget install -e --id Zoom.Zoom',
                'macos' => 'brew install --cask zoom',
                'ubuntu' => 'sudo snap install zoom-client',
            ]],
            ['name' => 'Spotify', 'slug' => 'spotify', 'category' => 'media', 'featured' => false, 'commands' => [
                'windows' => 'winget install -e --id Spotify.Spotify',
                'macos' => 'brew install --cask spotify',
                'ubuntu' => 'sudo snap install spotify',
            ]],
            ['name' => 'Docker Desktop', 'slug' => 'docker-desktop', 'category' => 'developer-tools', 'featured' => false, 'commands' => [
                'windows' => 'winget install -e --id Docker.DockerDesktop',
                'macos' => 'brew install --cask docker',
                'ubuntu' => 'sudo apt install -y docker.io',
            ]],
        ];

        foreach ($catalog as $index => $item) {
            $category = Category::query()->where('slug', $item['category'])->first();

            $software = Software::query()->updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'name' => $item['name'],
                    'icon' => SoftwareIcons::url($item['slug']),
                    'category_id' => $category?->id,
                    'category' => $item['category'],
                    'license_type' => LicenseType::Free,
                    'access_tier' => AccessTier::Public,
                    'description' => "Install {$item['name']} on Windows, macOS, or Ubuntu with ProLampX.",
                    'meta_title' => "Download {$item['name']} — ProLampX",
                    'meta_description' => "One-click install {$item['name']} on your fresh PC or laptop.",
                    'is_featured' => $item['featured'],
                    'sort_order' => $index,
                ]
            );

            $software->installCommands()->delete();

            foreach ($item['commands'] as $os => $command) {
                $software->installCommands()->create([
                    'os' => OperatingSystem::from($os),
                    'package_manager' => match ($os) {
                        'windows' => 'winget',
                        'macos' => 'brew',
                        default => 'apt',
                    },
                    'command' => $command,
                ]);
            }
        }
    }
}
