import { Link, router, usePage } from '@inertiajs/react';
import AdSection from '@/components/ad-section';
import OsBanner from '@/components/os-banner';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import { OS_OPTIONS, useDetectedOS } from '@/hooks/use-detected-os';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';
import type { CatalogOs } from '@/lib/detect-os';

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
    seo: { title: string; description: string };
};

export default function SoftwareIndex({ selectedOs, detectedOs, software, seo }: Props) {
    const { activeOs, detectedOs: clientDetected, isOverridden, setOs, resetDetection } = useDetectedOS();
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;

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
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} />
            <h1 className="text-3xl font-bold tracking-tight">Software catalog</h1>
            <p className="mt-2 text-muted-foreground">Browse free and freeware apps available for your system.</p>

            <OsBanner
                detectedOs={effectiveDetected}
                activeOs={activeOs}
                isOverridden={isOverridden}
                onResetDetection={() => {
                    resetDetection();
                    router.get('/software', {}, { preserveState: false });
                }}
                className="mt-6"
            />

            <div className="mt-4 flex flex-wrap items-center gap-3">
                <label className="text-sm font-medium text-muted-foreground">OS:</label>
                <select
                    value={activeOs}
                    onChange={(e) => changeOs(e.target.value as CatalogOs)}
                    className="public-surface rounded-xl px-4 py-2 text-sm shadow-sm"
                >
                    {OS_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div className="mt-8 space-y-10">
                {Object.entries(software).map(([category, items]) => (
                    <section key={category}>
                        <h2 className="text-xl font-semibold">{category}</h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {items.map((item) => (
                                <Link key={item.id} href={`/software/${item.slug}`}>
                                    <PublicCard className="flex items-start gap-3 p-4">
                                        <SoftwareIcon name={item.name} icon={item.icon} slug={item.slug} />
                                        <div className="min-w-0">
                                            <div className="font-semibold">{item.name}</div>
                                            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.license_type}</div>
                                            {item.description && (
                                                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                                            )}
                                        </div>
                                    </PublicCard>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
            <AdSection slot="content" variant="banner" className="mt-10" />
        </PublicLayout>
    );
}
