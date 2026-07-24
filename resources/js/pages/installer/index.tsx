import { router, usePage } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import InstallerBuilder from '@/components/installer/installer-builder';
import InstallerBundlesTeaser from '@/components/installer/installer-bundles-teaser';
import InstallerCategoriesTeaser from '@/components/installer/installer-categories-teaser';
import InstallerHero from '@/components/installer/installer-hero';
import InstallerHowItWorks from '@/components/installer/installer-how-it-works';
import InstallerShellCta from '@/components/installer/installer-shell-cta';
import SeoHead from '@/components/seo-head';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import { useDetectedOS } from '@/hooks/use-detected-os';
import PublicLayout from '@/layouts/public-layout';
import type { CatalogOs } from '@/lib/detect-os';

type SoftwareItem = {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
    category: string;
    is_featured: boolean;
    license_type: string;
};

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
    selectedOs: string;
    detectedOs: string;
    activeBundleSlug: string | null;
    categories: Record<string, SoftwareItem[]>;
    bundles: BundlePreview[];
    selectedBundle: BundlePreview | null;
    preselectedSoftwareIds: number[];
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

function scrollToBuilder() {
    document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function InstallerIndex({
    selectedOs,
    detectedOs,
    activeBundleSlug,
    categories,
    bundles,
    selectedBundle,
    preselectedSoftwareIds,
    seo,
}: Props) {
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;
    const { activeOs, detectedOs: clientDetected, isOverridden, setOs, resetDetection } = useDetectedOS();
    const os = activeOs;
    const [selected, setSelected] = useState<number[]>(preselectedSoftwareIds);
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [filename, setFilename] = useState<string | null>(null);

    const catalogIds = useMemo(
        () => new Set(Object.values(categories).flat().map((s) => s.id)),
        [categories],
    );

    const preselectedKey = preselectedSoftwareIds.join(',');

    useCatalogSync({
        version: catalogVersion,
        os,
        reloadProps: ['categories', 'bundles', 'preselectedSoftwareIds', 'selectedBundle'],
        onSync: (activeIds) => {
            setSelected((prev) => prev.filter((id) => activeIds.includes(id)));
        },
    });

    useEffect(() => {
        setSelected(preselectedSoftwareIds);
        setDownloadUrl(null);
    }, [preselectedKey, preselectedSoftwareIds]);

    useEffect(() => {
        if (selectedOs !== os && !isOverridden) {
            const params: Record<string, string> = { os };
            if (activeBundleSlug) {
                params.bundle = activeBundleSlug;
            }
            router.get('/installer', params, { preserveState: false, replace: true });
        }
    }, [os, selectedOs, isOverridden, activeBundleSlug]);

    useEffect(() => {
        if (activeBundleSlug) {
            scrollToBuilder();
        }
    }, [activeBundleSlug]);

    const toggle = (id: number) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
        setDownloadUrl(null);
    };

    const changeOs = (next: CatalogOs) => {
        setOs(next);
        const params: Record<string, string> = { os: next };
        if (activeBundleSlug) {
            params.bundle = activeBundleSlug;
        }
        router.get('/installer', params, { preserveState: false });
    };

    const applyBundle = (bundle: BundlePreview) => {
        router.get('/installer', { os, bundle: bundle.slug }, { preserveState: false });
    };

    const clearBundle = () => {
        router.get('/installer', { os }, { preserveState: false });
    };

    const clearSelection = () => {
        setSelected([]);
        setDownloadUrl(null);
        if (activeBundleSlug) {
            clearBundle();
        }
    };

    const generate = async () => {
        setLoading(true);
        setDownloadUrl(null);
        try {
            const response = await fetch('/installer/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content || '',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ os, software_ids: selected }),
            });
            const data = await response.json();
            if (response.ok) {
                setDownloadUrl(data.download_url);
                setFilename(data.filename);
            }
        } finally {
            setLoading(false);
        }
    };

    const effectiveDetected = clientDetected !== 'unknown' ? clientDetected : (detectedOs as typeof clientDetected);

    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} />
            <div className="bg-background pb-4 text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed">
                <InstallerHero onGetInstaller={scrollToBuilder} />
                <InstallerHowItWorks />
                <InstallerBundlesTeaser bundles={bundles} onSelectBundle={applyBundle} />
                <InstallerCategoriesTeaser />
                <InstallerShellCta onGetInstaller={scrollToBuilder} />
                <InstallerBuilder
                    os={os}
                    effectiveDetected={effectiveDetected}
                    isOverridden={isOverridden}
                    activeBundleSlug={activeBundleSlug}
                    selectedBundle={selectedBundle}
                    categories={categories}
                    bundles={bundles}
                    catalogIds={catalogIds}
                    selected={selected}
                    loading={loading}
                    downloadUrl={downloadUrl}
                    filename={filename}
                    onToggle={toggle}
                    onChangeOs={changeOs}
                    onApplyBundle={applyBundle}
                    onClearBundle={clearBundle}
                    onClearSelection={clearSelection}
                    onGenerate={generate}
                    onResetDetection={() => {
                        resetDetection();
                        router.get(
                            '/installer',
                            activeBundleSlug ? { bundle: activeBundleSlug } : {},
                            { preserveState: false },
                        );
                    }}
                />
            </div>
        </PublicLayout>
    );
}
