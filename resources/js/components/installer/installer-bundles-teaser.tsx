import { Link } from '@inertiajs/react';
import { ArrowRight, Download } from 'lucide-react';
import SoftwareIcon from '@/components/software-icon';

type BundlePreview = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    is_featured: boolean;
    software: { id: number; name: string; slug: string; icon: string | null }[];
    software_ids: number[];
};

type Props = {
    bundles: BundlePreview[];
    onSelectBundle: (bundle: BundlePreview) => void;
};

export default function InstallerBundlesTeaser({ bundles, onSelectBundle }: Props) {
    if (bundles.length === 0) {
        return null;
    }

    const featured = bundles.find((b) => b.is_featured) ?? bundles[0];
    const side = bundles.filter((b) => b.id !== featured.id).slice(0, 3);

    return (
        <section className="overflow-hidden bg-surface-container-low py-stack-xl dark:bg-background">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <div className="mb-stack-lg flex flex-col items-end justify-between gap-4 md:flex-row">
                    <div className="max-w-xl">
                        <h2 className="mb-2 text-headline-lg font-bold text-primary dark:text-on-surface">
                            Curated Toolkits
                        </h2>
                        <p className="text-body-md text-on-surface-variant">
                            Pre-selected sets of software for specific workflows. Start with a foundation.
                        </p>
                    </div>
                    <Link
                        href="/bundles"
                        className="flex items-center gap-2 text-label-md font-semibold text-secondary hover:underline dark:text-primary"
                    >
                        View All Bundles <ArrowRight className="size-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
                    <div className="group flex flex-col rounded-3xl border border-border-subtle bg-surface-container-lowest p-stack-lg text-left transition-shadow hover:shadow-xl md:col-span-7 dark:bg-surface-container">
                        <div className="mb-stack-lg flex items-start justify-between gap-4">
                            <div>
                                {featured.is_featured && (
                                    <span className="mb-2 inline-block rounded-full bg-primary-container px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-on-primary-container">
                                        Recommended
                                    </span>
                                )}
                                <h3 className="text-headline-lg font-bold text-primary dark:text-on-surface">
                                    {featured.name}
                                </h3>
                            </div>
                            <div className="flex flex-wrap justify-end gap-2">
                                {featured.software.slice(0, 3).map((app) => (
                                    <SoftwareIcon key={app.id} name={app.name} icon={app.icon} slug={app.slug} size="sm" />
                                ))}
                            </div>
                        </div>
                        {featured.description && (
                            <p className="mb-gutter text-body-md text-on-surface-variant">{featured.description}</p>
                        )}
                        <div className="mt-auto flex items-center justify-between gap-4">
                            <span className="text-label-md text-on-surface-variant">
                                {featured.software_ids.length} Essential Apps
                            </span>
                            <Link
                                href="/bundles"
                                className="rounded-xl bg-primary px-6 py-3 text-label-md font-semibold text-primary-foreground transition-colors hover:bg-secondary hover:text-on-secondary dark:text-inverse-surface"
                            >
                                Select Bundle
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-gutter md:col-span-5">
                        {side.map((bundle) => (
                            <button
                                type="button"
                                key={bundle.id}
                                onClick={() => onSelectBundle(bundle)}
                                className="rounded-3xl border border-border-subtle bg-surface-container-lowest p-gutter text-left transition-shadow hover:shadow-lg dark:bg-surface-container"
                            >
                                <div className="flex gap-stack-md">
                                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary dark:bg-primary/10 dark:text-primary">
                                        <Download className="size-7" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-headline-md font-bold text-primary dark:text-on-surface">
                                            {bundle.name}
                                        </h4>
                                        <p className="text-label-md text-on-surface-variant">
                                            {bundle.description || `${bundle.software_ids.length} apps included`}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
