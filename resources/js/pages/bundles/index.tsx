import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Package } from 'lucide-react';
import AdSection from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import PublicLayout from '@/layouts/public-layout';

type Bundle = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    is_featured: boolean;
    software_count: number;
    software: { id: number; name: string; slug: string; icon: string | null }[];
};

type Props = {
    bundles: Bundle[];
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

export default function BundlesIndex({ bundles, seo }: Props) {
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;

    useCatalogSync({
        version: catalogVersion,
        reloadProps: ['bundles'],
    });

    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} />
            <div className="mx-auto max-w-container-max px-margin-mobile py-10">
                <div className="mb-10 lg:grid lg:grid-cols-12 lg:gap-gutter">
                    <div className="lg:col-span-9">
                        <div className="mb-8">
                            <h1 className="text-headline-xl-mobile font-extrabold tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                                Curated App Bundles
                            </h1>
                            <p className="mt-2 max-w-2xl text-body-lg text-on-surface-variant">
                                Pre-selected groups of apps — pick one and jump straight to the installer with everything
                                ready.
                            </p>
                        </div>

                        {bundles.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-border-subtle bg-surface-container-low p-10 text-center text-on-surface-variant">
                                No bundles available yet. Check back soon or build your own on the installer page.
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2">
                                {bundles.map((bundle) => (
                                    <div
                                        key={bundle.id}
                                        className="flex flex-col rounded-xl border border-border-subtle bg-surface-container-lowest p-6 transition hover:shadow-lg dark:bg-surface-container"
                                    >
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary dark:bg-primary/10 dark:text-primary">
                                                <Package className="size-5" />
                                            </span>
                                            <div>
                                                <h2 className="font-bold text-primary dark:text-on-surface">{bundle.name}</h2>
                                                <p className="text-xs text-on-surface-variant">
                                                    {bundle.software_count} apps
                                                    {bundle.is_featured ? ' · Featured' : ''}
                                                </p>
                                            </div>
                                        </div>
                                        {bundle.description && (
                                            <p className="mb-4 line-clamp-3 text-sm text-on-surface-variant">
                                                {bundle.description}
                                            </p>
                                        )}
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {bundle.software.slice(0, 8).map((app) => (
                                                <div
                                                    key={app.id}
                                                    className="flex size-10 items-center justify-center rounded-lg bg-surface-container-low dark:bg-surface-container-high"
                                                >
                                                    <SoftwareIcon
                                                        name={app.name}
                                                        icon={app.icon}
                                                        slug={app.slug}
                                                        size="sm"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-auto flex gap-2">
                                            <Link
                                                href={`/bundles/${bundle.slug}`}
                                                className="flex-1 rounded-xl bg-surface-container px-4 py-2.5 text-center text-label-md font-semibold text-primary transition hover:bg-surface-container-high dark:text-on-surface"
                                            >
                                                View apps
                                            </Link>
                                            <Link
                                                href={`/installer?bundle=${bundle.slug}`}
                                                preserveScroll={false}
                                                className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-primary px-4 py-2.5 text-label-md font-semibold text-primary-foreground transition hover:bg-secondary hover:text-on-secondary dark:text-inverse-surface"
                                            >
                                                Use bundle
                                                <ArrowRight className="size-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                                <Link
                                    href="/installer"
                                    className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle bg-surface-container-low/50 p-6 text-center transition hover:border-secondary hover:bg-secondary/5 dark:hover:border-primary/50"
                                >
                                    <Package className="mb-3 size-8 text-on-surface-variant" />
                                    <h3 className="font-bold text-primary dark:text-on-surface">Build your own</h3>
                                    <p className="mt-1 text-sm text-on-surface-variant">
                                        Open the installer and pick apps manually.
                                    </p>
                                </Link>
                            </div>
                        )}
                    </div>
                    <aside className="mt-10 hidden lg:col-span-3 lg:mt-0 lg:block">
                        <div className="sticky top-28">
                            <AdSection slot="sidebar" variant="sidebar" />
                        </div>
                    </aside>
                </div>
            </div>
        </PublicLayout>
    );
}
