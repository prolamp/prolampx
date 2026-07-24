import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Package } from 'lucide-react';
import { ContentWithSidebarAd } from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import PublicLayout from '@/layouts/public-layout';

type Software = {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
    description: string | null;
    license_type: string | null;
    category: string | null;
};

type Bundle = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    software_count: number;
    software: Software[];
};

type Props = {
    bundle: Bundle;
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

export default function BundlesShow({ bundle, seo }: Props) {
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;

    useCatalogSync({
        version: catalogVersion,
        reloadProps: ['bundle'],
    });

    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} />
            <div className="mx-auto max-w-container-max px-margin-mobile py-10">
                <Link
                    href="/bundles"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline dark:text-primary"
                >
                    <ArrowLeft className="size-4" /> All bundles
                </Link>

                <ContentWithSidebarAd>
                    <div className="space-y-8">
                        <div className="rounded-xl border border-border-subtle bg-surface-container-lowest p-6 sm:p-8 dark:bg-surface-container">
                            <div className="flex flex-wrap items-start justify-between gap-6">
                                <div className="flex items-start gap-4">
                                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-on-secondary shadow-md">
                                        <Package className="size-6" />
                                    </span>
                                    <div>
                                        <h1 className="text-headline-xl-mobile font-extrabold tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                                            {bundle.name}
                                        </h1>
                                        {bundle.description && (
                                            <p className="mt-2 max-w-2xl text-on-surface-variant">{bundle.description}</p>
                                        )}
                                        <p className="mt-2 text-sm text-on-surface-variant">
                                            {bundle.software_count} app{bundle.software_count !== 1 ? 's' : ''} included
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href={`/installer?bundle=${bundle.slug}`}
                                    preserveScroll={false}
                                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-label-md font-semibold text-on-secondary shadow-lg transition hover:bg-secondary-container"
                                >
                                    Use this bundle
                                    <ArrowRight className="size-4" />
                                </Link>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {bundle.software.slice(0, 12).map((app) => (
                                    <div
                                        key={app.id}
                                        className="flex size-11 items-center justify-center rounded-xl bg-surface-container-low dark:bg-surface-container-high"
                                    >
                                        <SoftwareIcon name={app.name} icon={app.icon} slug={app.slug} size="sm" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-4 text-headline-md font-bold text-primary dark:text-on-surface">
                                Included software
                            </h2>
                            <ul className="space-y-2">
                                {bundle.software.map((app) => (
                                    <li key={app.id}>
                                        <Link
                                            href={`/software/${app.slug}`}
                                            className="flex items-center gap-4 rounded-xl border border-border-subtle bg-surface-container-lowest p-4 transition hover:border-secondary/30 dark:bg-surface-container dark:hover:border-primary/40"
                                        >
                                            <SoftwareIcon name={app.name} icon={app.icon} slug={app.slug} />
                                            <div className="min-w-0 flex-1">
                                                <div className="font-semibold text-primary dark:text-on-surface">
                                                    {app.name}
                                                </div>
                                                {app.description && (
                                                    <p className="mt-1 line-clamp-2 text-sm text-on-surface-variant">
                                                        {app.description}
                                                    </p>
                                                )}
                                                {app.license_type && (
                                                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-on-surface-variant">
                                                        {app.license_type}
                                                    </p>
                                                )}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ContentWithSidebarAd>
            </div>
        </PublicLayout>
    );
}
