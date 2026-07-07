import { Check, ChevronDown, Copy } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useClipboard } from '@/hooks/use-clipboard';
import type { CatalogOs } from '@/lib/detect-os';
import { cn } from '@/lib/utils';

type GuideContent = {
    label: string;
    steps: string[];
    command: string;
    troubleshooting: { title: string; body: string }[];
};

function guideFor(os: CatalogOs, filename: string): GuideContent {
    const file = filename || `prolampx-setup.${os === 'windows' ? 'bat' : os === 'macos' ? 'command' : 'sh'}`;

    if (os === 'windows') {
        return {
            label: 'Windows',
            steps: [
                `Open your Downloads folder and find ${file}.`,
                'Right-click the file and choose Run as administrator (recommended).',
                'If SmartScreen appears, choose More info, then Run anyway.',
            ],
            command: `cd %USERPROFILE%\\Downloads && ${file}`,
            troubleshooting: [
                {
                    title: 'Nothing happens when I double-click',
                    body: 'Open Command Prompt as Administrator, paste the command below, and press Enter.',
                },
                {
                    title: 'winget is not recognized',
                    body: 'Install App Installer from the Microsoft Store, then run the script again.',
                },
            ],
        };
    }

    if (os === 'macos') {
        return {
            label: 'macOS',
            steps: [
                `Open Downloads in Finder and locate ${file}.`,
                'Double-click the file to open Terminal and start installation.',
                'If macOS blocks the file, use the terminal command below instead.',
            ],
            command: `chmod +x ~/Downloads/${file} && ~/Downloads/${file}`,
            troubleshooting: [
                {
                    title: '“cannot be opened because it is from an unidentified developer”',
                    body: 'Run the copy command in Terminal. You can also allow it once in System Settings → Privacy & Security.',
                },
                {
                    title: 'brew: command not found',
                    body: 'Install Homebrew from brew.sh, then run the installer script again.',
                },
            ],
        };
    }

    return {
        label: 'Ubuntu',
        steps: [
            'Open Terminal (Ctrl+Alt+T).',
            `Make sure ${file} is in your Downloads folder.`,
            'Copy and run the command below to start installation.',
        ],
        command: `chmod +x ~/Downloads/${file} && ~/Downloads/${file}`,
        troubleshooting: [
            {
                title: 'Permission denied',
                body: 'The chmod step in the command fixes this. Run the full command, not just the script path.',
            },
            {
                title: 'sudo password prompt',
                body: 'This is normal for apt installs. Enter your user password when asked.',
            },
            {
                title: 'File not found',
                body: 'Confirm the download finished and the file name matches. List files with: ls ~/Downloads',
            },
        ],
    };
}

type InstallerRunGuideProps = {
    os: CatalogOs;
    filename: string | null;
    ready: boolean;
    className?: string;
};

export default function InstallerRunGuide({ os, filename, ready, className }: InstallerRunGuideProps) {
    const [copiedText, copy] = useClipboard();
    const guide = useMemo(() => guideFor(os, filename ?? ''), [os, filename]);

    if (!ready) {
        return (
            <p className={cn('text-sm text-muted-foreground', className)}>
                After you download, you&apos;ll get simple {guide.label}-specific steps to run the installer. Internet required.
            </p>
        );
    }

    const command = guide.command;
    const copied = copiedText === command;

    return (
        <div className={cn('w-full space-y-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 dark:border-border/60 dark:bg-indigo-950/30', className)}>
            <div>
                <h3 className="public-heading-accent font-semibold">Downloaded — how to run on {guide.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                    This file installs your selected apps using official package managers. You can inspect it in a text editor before running.
                </p>
            </div>

            <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground">
                {guide.steps.map((step) => (
                    <li key={step}>{step}</li>
                ))}
            </ol>

            <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quick run command</p>
                <div className="public-surface flex overflow-hidden rounded-lg border">
                    <code className="flex-1 overflow-x-auto p-3 font-mono text-xs text-foreground sm:text-sm">{command}</code>
                    <Button
                        type="button"
                        variant="ghost"
                        className="shrink-0 rounded-none border-l px-3"
                        onClick={() => copy(command)}
                    >
                        {copied ? <Check className="size-4 text-green-600" /> : <Copy className="size-4" />}
                        <span className="sr-only">Copy command</span>
                    </Button>
                </div>
                {copied && <p className="text-xs text-green-700 dark:text-green-400">Command copied to clipboard.</p>}
            </div>

            <Collapsible>
                <CollapsibleTrigger className="public-accent-link flex w-full items-center justify-between rounded-lg border border-transparent px-1 py-2 text-sm font-medium">
                    Troubleshooting
                    <ChevronDown className="size-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 pt-2 text-sm text-muted-foreground">
                    {guide.troubleshooting.map((item) => (
                        <div key={item.title}>
                            <p className="font-medium text-foreground">{item.title}</p>
                            <p className="mt-0.5">{item.body}</p>
                        </div>
                    ))}
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}
