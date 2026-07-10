<?php

namespace Database\Seeders\Support;

class BlogPostContent
{
    private static function figure(string $src, string $alt, string $caption): string
    {
        return <<<HTML
<figure>
<img src="{$src}" alt="{$alt}" loading="lazy" />
<figcaption>{$caption}</figcaption>
</figure>
HTML;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public static function posts(): array
    {
        return [
            [
                'slug' => 'how-to-download-and-install-software-with-prolampx',
                'category_slug' => 'guides',
                'title' => 'How to Download and Install Software with ProLampX (Step-by-Step)',
                'cover_image' => '/images/blog/installer-page.png',
                'og_image' => '/images/blog/installer-page.png',
                'meta_title' => 'Download & Install Software with ProLampX — Complete Guide',
                'meta_description' => 'Learn how to browse free software, build a custom installer, download one file, and install everything on Windows, macOS, or Ubuntu.',
                'body' => self::masterGuide(),
            ],
            [
                'slug' => 'setup-fresh-windows-pc',
                'category_slug' => 'windows',
                'title' => 'How to Set Up a Fresh Windows PC with ProLampX',
                'cover_image' => '/images/blog/software-page.png',
                'og_image' => '/images/blog/software-page.png',
                'meta_title' => 'Set Up a Fresh Windows PC — ProLampX Guide',
                'meta_description' => 'Install Chrome, VS Code, 7-Zip, and more on a new Windows PC using one ProLampX installer script and winget.',
                'body' => self::windowsGuide(),
            ],
            [
                'slug' => 'install-software-on-macos-with-prolampx',
                'category_slug' => 'macos',
                'title' => 'Install Multiple Mac Apps at Once with ProLampX',
                'cover_image' => '/images/blog/bundles-page.png',
                'og_image' => '/images/blog/bundles-page.png',
                'meta_title' => 'Install Mac Software with ProLampX — macOS Guide',
                'meta_description' => 'Pick Mac apps from the ProLampX catalog, download a .command installer, and install via Homebrew in one go.',
                'body' => self::macosGuide(),
            ],
            [
                'slug' => 'install-software-on-ubuntu-with-prolampx',
                'category_slug' => 'ubuntu',
                'title' => 'Install Ubuntu Software in One Command with ProLampX',
                'cover_image' => '/images/blog/installer-page.png',
                'og_image' => '/images/blog/installer-page.png',
                'meta_title' => 'Install Ubuntu Software with ProLampX — Linux Guide',
                'meta_description' => 'Select Linux apps on ProLampX, download prolampx-setup.sh, and install packages through apt with a single script.',
                'body' => self::ubuntuGuide(),
            ],
        ];
    }

    private static function masterGuide(): string
    {
        $home = self::figure(
            '/images/blog/home-page.png',
            'ProLampX homepage with links to the installer, software catalog, and bundles',
            'Start from the ProLampX homepage — use Installer to build a download, or browse Software and Bundles first.',
        );
        $software = self::figure(
            '/images/blog/software-page.png',
            'ProLampX software catalog filtered by operating system',
            'The Software page lists every app available for your OS, grouped by category (browsers, dev tools, utilities, and more).',
        );
        $bundles = self::figure(
            '/images/blog/bundles-page.png',
            'ProLampX bundles page with pre-selected app groups',
            'Bundles are curated app lists (like a Ninite-style pack). Pick one to pre-fill the installer.',
        );
        $installer = self::figure(
            '/images/blog/installer-page.png',
            'ProLampX installer page with OS selector and app checkboxes',
            'On the Installer page, confirm your OS, select apps (or load a bundle), then click Download installer.',
        );

        return <<<HTML
<p>ProLampX helps you install multiple free applications on <strong>Windows</strong>, <strong>macOS</strong>, or <strong>Ubuntu</strong> without visiting dozens of download pages. You pick the apps once, download a single installer file, and run it — the script uses official package managers (<code>winget</code>, <code>brew</code>, or <code>apt</code>) behind the scenes.</p>

<p>This guide walks through the full flow: finding software, building your installer, downloading it, and running it on your computer.</p>

<h2>What you need</h2>
<ul>
<li>A Windows, Mac, or Ubuntu machine with an internet connection</li>
<li>A few minutes to choose your apps</li>
<li>Permission to install software (administrator on Windows, password for apt on Ubuntu)</li>
</ul>

<h2>Step 1 — Open ProLampX</h2>
<p>Visit the <a href="/">ProLampX homepage</a>. From here you can jump straight to the <a href="/installer">Installer</a>, browse the <a href="/software">Software catalog</a>, or explore <a href="/bundles">Bundles</a>.</p>
{$home}

<h2>Step 2 — Browse available software</h2>
<p>Go to <a href="/software">Software</a> to see everything available for your system. ProLampX detects your OS automatically, but you can switch between Windows, macOS, and Ubuntu with the dropdown if you are preparing an installer for another machine.</p>
<p>Each card shows the app name, license type, and a short description. Click any app for more detail and supported package managers.</p>
{$software}

<h2>Step 3 — Start from a bundle (optional)</h2>
<p>New to ProLampX? <a href="/bundles">Bundles</a> are the fastest way to get started. Each bundle is a pre-selected group of popular apps — click <strong>Use bundle</strong> and you will land on the installer with those apps already checked.</p>
{$bundles}

<h2>Step 4 — Build your installer</h2>
<ol>
<li>Open the <a href="/installer">Installer</a> page.</li>
<li>Confirm the correct <strong>OS</strong> is selected at the top (Windows, macOS, or Ubuntu).</li>
<li>Check every app you want installed, or load a bundle first.</li>
<li>Click <strong>Download installer</strong>.</li>
</ol>
<p>ProLampX generates one file for your platform:</p>
<ul>
<li><strong>Windows:</strong> <code>prolampx-setup.bat</code></li>
<li><strong>macOS:</strong> <code>prolampx-setup.command</code></li>
<li><strong>Ubuntu:</strong> <code>prolampx-setup.sh</code></li>
</ul>
{$installer}

<p>After the download finishes, the page shows OS-specific steps and a copy-paste command to run the installer.</p>

<h2>Step 5 — Run the installer on your computer</h2>
<p>The file you download is a script — you can open it in a text editor to review exactly what will run. Installation steps differ by OS:</p>
<ul>
<li><a href="/blog/setup-fresh-windows-pc">Windows setup guide</a> — run the <code>.bat</code> file as administrator</li>
<li><a href="/blog/install-software-on-macos-with-prolampx">macOS setup guide</a> — double-click the <code>.command</code> file or use Terminal</li>
<li><a href="/blog/install-software-on-ubuntu-with-prolampx">Ubuntu setup guide</a> — run the <code>.sh</code> script in Terminal</li>
</ul>

<h2>Tips &amp; troubleshooting</h2>
<ul>
<li><strong>Wrong OS file?</strong> If you downloaded a <code>.bat</code> on Ubuntu (or vice versa), go back to the installer, switch the OS dropdown, and download again.</li>
<li><strong>Internet required:</strong> The script downloads packages from official sources during installation.</li>
<li><strong>Need help?</strong> Use our <a href="/contact">contact form</a> or read the <a href="/page/privacy-policy">Privacy Policy</a> if you have data-related questions.</li>
</ul>

<p>Ready to try it? <a href="/installer">Open the installer →</a></p>
HTML;
    }

    private static function windowsGuide(): string
    {
        $installer = self::figure(
            '/images/blog/installer-page.png',
            'ProLampX installer with Windows selected and multiple apps checked',
            'Select Windows as your OS, tick the apps you need, then download prolampx-setup.bat.',
        );

        return <<<HTML
<p>Setting up a new Windows laptop or desktop usually means reinstalling Chrome, a code editor, archive tools, and more — one site at a time. ProLampX lets you select everything in one place and install it with a single <code>prolampx-setup.bat</code> file powered by <strong>winget</strong> (the Windows Package Manager).</p>

<h2>Before you start</h2>
<ul>
<li>Windows 10 or Windows 11 with an internet connection</li>
<li><strong>App Installer</strong> from the Microsoft Store (provides <code>winget</code>) — install it if winget is not recognized</li>
<li>Administrator access on the PC you are setting up</li>
</ul>

<h2>1. Pick your Windows apps</h2>
<p>On a Windows PC (or with Windows selected in the OS dropdown), open the <a href="/installer">Installer</a> and check the apps you want — browsers, dev tools, media players, utilities, and more. You can also start from a <a href="/bundles">bundle</a> for a curated pack.</p>
{$installer}

<h2>2. Download prolampx-setup.bat</h2>
<p>Click <strong>Download installer</strong>. Save <code>prolampx-setup.bat</code> to your <strong>Downloads</strong> folder. The installer page will show step-by-step instructions after the download completes.</p>

<h2>3. Run the installer</h2>
<ol>
<li>Open your <strong>Downloads</strong> folder.</li>
<li>Right-click <code>prolampx-setup.bat</code> and choose <strong>Run as administrator</strong> (recommended).</li>
<li>If Windows SmartScreen appears, click <strong>More info</strong>, then <strong>Run anyway</strong>.</li>
<li>Wait while winget downloads and installs each selected app.</li>
</ol>

<h3>Alternative: Command Prompt</h3>
<p>If double-clicking does nothing, open <strong>Command Prompt as Administrator</strong> and run:</p>
<pre><code>cd %USERPROFILE%\\Downloads && prolampx-setup.bat</code></pre>

<h2>Common issues on Windows</h2>
<ul>
<li><strong>winget is not recognized</strong> — Install <em>App Installer</em> from the Microsoft Store, then run the script again.</li>
<li><strong>SmartScreen blocked the file</strong> — Choose More info → Run anyway, or run from an elevated Command Prompt.</li>
<li><strong>Some apps skipped</strong> — An app may not be available in winget for your region or Windows build; try installing that app manually.</li>
</ul>

<p>For the full cross-platform walkthrough, see <a href="/blog/how-to-download-and-install-software-with-prolampx">How to Download and Install Software with ProLampX</a>.</p>
HTML;
    }

    private static function macosGuide(): string
    {
        $bundles = self::figure(
            '/images/blog/bundles-page.png',
            'ProLampX bundles with app icons and Use bundle buttons',
            'Bundles are a quick way to load a set of Mac apps into the installer.',
        );
        $installer = self::figure(
            '/images/blog/installer-page.png',
            'ProLampX installer with macOS selected',
            'Switch the OS selector to macOS before downloading — you will get a .command file, not a Windows .bat file.',
        );

        return <<<HTML
<p>On macOS, ProLampX generates a <code>prolampx-setup.command</code> file that installs your selected apps through <strong>Homebrew</strong> (<code>brew</code>). One download, one double-click (or one Terminal command), and your apps install in sequence.</p>

<h2>Before you start</h2>
<ul>
<li>macOS with an internet connection</li>
<li><a href="https://brew.sh" rel="noopener noreferrer" target="_blank">Homebrew</a> installed (<code>brew</code> in Terminal) — required for most apps in the catalog</li>
<li>Permission to install software on your Mac</li>
</ul>

<h2>1. Choose Mac-compatible apps</h2>
<p>Open <a href="/software?os=macos">Software</a> with macOS selected, or pick a <a href="/bundles">bundle</a> and click <strong>Use bundle</strong>.</p>
{$bundles}

<h2>2. Download on the Installer page</h2>
<p>Go to <a href="/installer">Installer</a>, set <strong>OS</strong> to <strong>macOS</strong>, confirm your selection, and click <strong>Download installer</strong>. You will get <code>prolampx-setup.command</code> in Downloads.</p>
{$installer}

<h2>3. Run the installer</h2>
<ol>
<li>Open <strong>Finder → Downloads</strong> and locate <code>prolampx-setup.command</code>.</li>
<li>Double-click the file — Terminal opens and installation begins.</li>
<li>If macOS blocks the file (“unidentified developer”), use Terminal instead (see below).</li>
</ol>

<h3>Terminal command</h3>
<pre><code>chmod +x ~/Downloads/prolampx-setup.command && ~/Downloads/prolampx-setup.command</code></pre>
<p>The <code>chmod</code> step makes the script executable. You can review the file in TextEdit before running it.</p>

<h2>Common issues on macOS</h2>
<ul>
<li><strong>brew: command not found</strong> — Install Homebrew from <a href="https://brew.sh" rel="noopener noreferrer" target="_blank">brew.sh</a>, then run the script again.</li>
<li><strong>Gatekeeper warning</strong> — Run the Terminal command above, or allow the app once under <strong>System Settings → Privacy &amp; Security</strong>.</li>
<li><strong>Downloaded a .bat file by mistake</strong> — You had Windows selected. Return to the installer, choose macOS, and download again.</li>
</ul>

<p>See also: <a href="/blog/how-to-download-and-install-software-with-prolampx">Complete ProLampX guide</a></p>
HTML;
    }

    private static function ubuntuGuide(): string
    {
        $software = self::figure(
            '/images/blog/software-page.png',
            'ProLampX software catalog with Ubuntu OS filter',
            'Filter the catalog to Ubuntu to see only packages available through apt.',
        );
        $installer = self::figure(
            '/images/blog/installer-page.png',
            'ProLampX installer ready to download for Ubuntu',
            'After download, ProLampX shows a chmod command and run instructions for Linux.',
        );

        return <<<HTML
<p>On Ubuntu (and similar Debian-based desktops), ProLampX gives you a shell script — <code>prolampx-setup.sh</code> — that installs your chosen apps with <strong>apt</strong>. No hunting for .deb links or adding PPAs one by one for supported catalog apps.</p>

<h2>Before you start</h2>
<ul>
<li>Ubuntu with an internet connection</li>
<li>Your user password (sudo is used for apt installs)</li>
<li>Terminal access (Ctrl+Alt+T)</li>
</ul>

<h2>1. Browse Ubuntu software</h2>
<p>Visit <a href="/software?os=ubuntu">Software</a> with Ubuntu selected to see what is available. Categories include browsers, development tools, and everyday utilities.</p>
{$software}

<h2>2. Build and download the script</h2>
<ol>
<li>Open <a href="/installer">Installer</a> and set <strong>OS</strong> to <strong>Ubuntu</strong>.</li>
<li>Select the apps you want (or load a <a href="/bundles">bundle</a>).</li>
<li>Click <strong>Download installer</strong> — save <code>prolampx-setup.sh</code> to <code>~/Downloads</code>.</li>
</ol>
{$installer}

<h2>3. Run in Terminal</h2>
<p>Linux cannot run Windows <code>.bat</code> files. You must use the <code>.sh</code> script. Open Terminal and run the full command (copy it from the installer page after download):</p>
<pre><code>chmod +x ~/Downloads/prolampx-setup.sh && ~/Downloads/prolampx-setup.sh</code></pre>
<ol>
<li><code>chmod +x</code> makes the script executable.</li>
<li>The second part runs the installer, which calls apt for each app.</li>
<li>Enter your password when sudo prompts you — this is normal.</li>
</ol>

<h2>Common issues on Ubuntu</h2>
<ul>
<li><strong>prolampx-setup.bat: command not found</strong> — You downloaded the Windows file. Switch OS to Ubuntu on the installer page and download again.</li>
<li><strong>Permission denied</strong> — Run the full command including <code>chmod +x</code>, not just the script path.</li>
<li><strong>File not found</strong> — Confirm the download finished: <code>ls ~/Downloads/prolampx-setup*</code></li>
</ul>

<p>Read the full walkthrough: <a href="/blog/how-to-download-and-install-software-with-prolampx">How to Download and Install Software with ProLampX</a> · Questions? <a href="/contact">Contact us</a></p>
HTML;
    }
}
