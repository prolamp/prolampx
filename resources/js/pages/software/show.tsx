import { Link } from '@inertiajs/react';
import { Apple, ArrowLeft, Download, Monitor, Terminal } from 'lucide-react';
import { ContentWithSidebarAd } from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    software: {
        name: string;
        slug: string;
        icon: string | null;
        category: string;
        license_type: string;
        description: string | null;
        latest_version: string | null;
        install_commands: { os: string; package_manager: string; command: string }[];
    };
    seo: {
        title: string;
        description?: string;
        keywords?: string;
        image?: string | null;
        type?: 'software';
    };
};

function OsTile({ os, packageManager }: { os: string; packageManager: string }) {
    const lower = os.toLowerCase();
    const Icon = lower.includes('mac') ? Apple : lower.includes('ubuntu') || lower.includes('linux') ? Terminal : Monitor;
    const accent =
        lower.includes('mac')
            ? 'hover:border-os-macos/30'
            : lower.includes('ubuntu') || lower.includes('linux')
              ? 'hover:border-os-ubuntu/30'
              : 'hover:border-os-windows/30';

    return (
        <div className={`rounded-xl border border-border-subtle bg-surface-container-low p-4 transition ${accent}`}>
            <div className="mb-2 flex items-center gap-2 font-semibold capitalize text-primary dark:text-on-surface">
                <Icon className="size-4" />
                {os}
            </div>
            <p className="text-sm text-on-surface-variant">{packageManager}</p>
        </div>
    );
}

export default function SoftwareShow({ software, seo }: Props) {
    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} type="software" />
            <div className="mx-auto max-w-container-max px-margin-mobile py-10">
                <Link
                    href="/software"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline dark:text-primary"
                >
                    <ArrowLeft className="size-4" /> Back to catalog
                </Link>

                <ContentWithSidebarAd>
                    <div className="space-y-6">
                        <div className="rounded-xl border border-border-subtle bg-surface-container-lowest p-6 sm:p-8 dark:bg-surface-container">
                            <div className="flex flex-wrap items-start gap-4">
                                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-surface-container-low dark:bg-surface-container-high">
                                    <SoftwareIcon name={software.name} icon={software.icon} slug={software.slug} size="lg" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary dark:text-primary">
                                        {software.category.replace('-', ' ')}
                                    </p>
                                    <h1 className="mt-1 text-headline-xl-mobile font-extrabold tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                                        {software.name}
                                    </h1>
                                    <div className="mt-3 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-secondary/10 px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-secondary dark:text-primary">
                                            {software.license_type}
                                        </span>
                                        {software.latest_version && (
                                            <span className="rounded-full bg-surface-container-high px-3 py-1 text-label-sm font-bold text-on-surface-variant">
                                                v{software.latest_version}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {software.description && (
                                <p className="mt-6 leading-relaxed text-on-surface-variant">{software.description}</p>
                            )}

                            <Link
                                href="/installer"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-label-md font-semibold text-primary-foreground transition hover:bg-secondary hover:text-on-secondary dark:text-inverse-surface"
                            >
                                <Download className="size-4" />
                                Add to installer
                            </Link>
                        </div>

                        <div>
                            <h2 className="mb-4 text-headline-md font-bold text-primary dark:text-on-surface">Available on</h2>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {software.install_commands.map((cmd) => (
                                    <OsTile key={cmd.os} os={cmd.os} packageManager={cmd.package_manager} />
                                ))}
                            </div>
                        </div>
                    </div>
                </ContentWithSidebarAd>
            </div>
        </PublicLayout>
    );
}
