import { Link, router, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import AdSection from '@/components/ad-section';
import OsBanner from '@/components/os-banner';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import { OS_OPTIONS, useDetectedOS } from '@/hooks/use-detected-os';
import PublicLayout from '@/layouts/public-layout';
import type { CatalogOs } from '@/lib/detect-os';
import { cn } from '@/lib/utils';

type SoftwareItem = {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
    category: string;
    license_type: string;
    description: string | null;
};

type Props = {
    selectedOs: string;
    detectedOs: string;
    software: Record<string, SoftwareItem[]>;
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

export default function SoftwareIndex({ selectedOs, detectedOs, software, seo }: Props) {
    const { activeOs, detectedOs: clientDetected, isOverridden, setOs, resetDetection } = useDetectedOS();
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;
    const categories = Object.keys(software);

    useCatalogSync({
        version: catalogVersion,
        os: activeOs,
        reloadProps: ['software'],
    });

    const changeOs = (next: CatalogOs) => {
        setOs(next);
        router.get('/software', { os: next }, { preserveState: false });
    };

    const effectiveDetected = clientDetected !== 'unknown' ? clientDetected : (detectedOs as typeof clientDetected);

    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} />
            <div className="mx-auto max-w-container-max px-margin-mobile py-10">
                <div className="mb-8">
                    <h1 className="text-headline-xl-mobile font-extrabold tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                        Software Catalog
                    </h1>
                    <p className="mt-2 max-w-2xl text-body-lg text-on-surface-variant">
                        Browse free and freeware apps available for your system.
                    </p>
                </div>

                <OsBanner
                    detectedOs={effectiveDetected}
                    activeOs={activeOs}
                    isOverridden={isOverridden}
                    onResetDetection={() => {
                        resetDetection();
                        router.get('/software', {}, { preserveState: false });
                    }}
                    className="mb-6"
                />

                <div className="mb-8 flex flex-wrap items-center gap-3 rounded-xl border border-border-subtle bg-surface-container-low p-3">
                    <span className="px-2 text-label-md font-semibold text-on-surface-variant">OS:</span>
                    <div className="flex flex-wrap gap-1 rounded-lg bg-surface-container-highest/60 p-1">
                        {OS_OPTIONS.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => changeOs(option.value)}
                                className={cn(
                                    'rounded-md px-4 py-2 text-label-md font-semibold transition',
                                    activeOs === option.value
                                        ? 'bg-primary text-primary-foreground shadow-sm dark:bg-secondary dark:text-on-secondary'
                                        : 'text-on-surface-variant hover:bg-surface-container-lowest',
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-12 lg:gap-gutter">
                    <div className="lg:col-span-9">
                        <div className="space-y-stack-xl">
                            {Object.entries(software).map(([category, items]) => (
                                <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                                    <h2 className="mb-4 border-b border-border-subtle pb-2 text-headline-md font-bold text-primary dark:text-on-surface">
                                        {category}
                                    </h2>
                                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                        {items.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/software/${item.slug}`}
                                                className="group flex flex-col rounded-xl border border-border-subtle bg-surface-container-lowest p-4 transition hover:border-secondary hover:shadow-lg dark:bg-surface-container dark:hover:border-primary/50"
                                            >
                                                <div className="mb-3 flex items-start gap-3">
                                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-low dark:bg-surface-container-high">
                                                        <SoftwareIcon name={item.name} icon={item.icon} slug={item.slug} />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="font-bold text-primary transition group-hover:text-secondary dark:text-on-surface dark:group-hover:text-primary">
                                                            {item.name}
                                                        </div>
                                                        <span className="mt-1 inline-block rounded-full bg-surface-container-high px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                                                            {item.license_type}
                                                        </span>
                                                    </div>
                                                </div>
                                                {item.description && (
                                                    <p className="mb-4 line-clamp-2 flex-1 text-sm text-on-surface-variant">
                                                        {item.description}
                                                    </p>
                                                )}
                                                <span className="mt-auto inline-flex items-center gap-1 text-label-md font-semibold text-secondary dark:text-primary">
                                                    View details <ArrowRight className="size-3.5" />
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                        <AdSection slot="content" variant="banner" className="mt-10" />
                    </div>

                    <aside className="mt-10 hidden lg:col-span-3 lg:mt-0 lg:block">
                        <div className="sticky top-28 space-y-4">
                            {categories.length > 0 && (
                                <div className="rounded-xl border border-border-subtle bg-surface-container-lowest p-4 dark:bg-surface-container">
                                    <h3 className="mb-3 text-label-md font-bold uppercase tracking-widest text-primary dark:text-on-surface">
                                        Categories
                                    </h3>
                                    <nav className="flex flex-col gap-1">
                                        {categories.map((category) => (
                                            <a
                                                key={category}
                                                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="rounded-lg px-3 py-2 text-sm text-on-surface-variant transition hover:bg-surface-container-low hover:text-secondary dark:hover:text-primary"
                                            >
                                                {category}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}
                            <AdSection slot="sidebar" variant="sidebar" />
                        </div>
                    </aside>
                </div>
            </div>
        </PublicLayout>
    );
}
