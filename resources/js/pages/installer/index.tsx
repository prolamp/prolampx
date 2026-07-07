import { Link, router, usePage } from '@inertiajs/react';
import { Check, Download, Loader2, Package } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import OsBanner from '@/components/os-banner';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import { OS_OPTIONS, useDetectedOS } from '@/hooks/use-detected-os';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';
import type { CatalogOs } from '@/lib/detect-os';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    seo: { title: string; description: string };
};

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

    const grouped = useMemo(() => categories, [categories]);
    const preselectedKey = preselectedSoftwareIds.join(',');

    useCatalogSync({
        version: catalogVersion,
        os,
        reloadProps: ['categories', 'bundles', 'preselectedSoftwareIds', 'selectedBundle'],
        onSync: (activeIds) => {
            setSelected((prev) => prev.filter((id) => activeIds.includes(id)));
        },
    });

    // Sync selection when server sends new preselection (bundle change, OS change, etc.)
    useEffect(() => {
        setSelected(preselectedSoftwareIds);
        setDownloadUrl(null);
    }, [preselectedKey, preselectedSoftwareIds]);

    // Align catalog OS with client detection while preserving bundle query param
    useEffect(() => {
        if (selectedOs !== os && !isOverridden) {
            const params: Record<string, string> = { os };
            if (activeBundleSlug) {
                params.bundle = activeBundleSlug;
            }
            router.get('/installer', params, { preserveState: false, replace: true });
        }
    }, [os, selectedOs, isOverridden, activeBundleSlug]);

    const toggle = (id: number) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
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
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} />
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">App Installer</h1>
                <p className="mt-2 text-muted-foreground">
                    Select apps or start from a bundle — download one file that installs everything automatically.
                </p>
                {selectedBundle && (
                    <p className="mt-2 text-sm font-medium text-indigo-700">
                        Using bundle: {selectedBundle.name}
                        {selected.length === 0 && (
                            <span className="font-normal text-muted-foreground">
                                {' '}— no apps in this bundle are available for {os}. Try another OS or pick apps manually.
                            </span>
                        )}
                    </p>
                )}
            </div>

            <OsBanner
                detectedOs={effectiveDetected}
                activeOs={os}
                isOverridden={isOverridden}
                onResetDetection={() => {
                    resetDetection();
                    router.get('/installer', activeBundleSlug ? { bundle: activeBundleSlug } : {}, { preserveState: false });
                }}
                className="mb-6"
            />

            {bundles.length > 0 && (
                <section className="mb-8">
                    <div className="mb-4 flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-lg font-semibold">Start from a bundle</h2>
                            <p className="text-sm text-muted-foreground">Pre-selected app groups — or browse all bundles.</p>
                        </div>
                        <Link href="/bundles" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                            View all bundles
                        </Link>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {bundles.map((bundle) => {
                            const isActive = activeBundleSlug === bundle.slug;
                            const availableCount = bundle.software_ids.filter((id) => catalogIds.has(id)).length;

                            return (
                                <button
                                    key={bundle.id}
                                    type="button"
                                    onClick={() => applyBundle(bundle)}
                                    className={cn(
                                        'rounded-2xl border p-4 text-left transition',
                                        isActive
                                            ? 'border-indigo-400 bg-indigo-50/80 shadow-md ring-2 ring-indigo-200'
                                            : 'border-transparent bg-white/80 shadow-sm hover:border-indigo-200 hover:shadow-md',
                                    )}
                                >
                                    <div className="flex items-center gap-2 font-semibold">
                                        <Package className="size-4 text-indigo-600" />
                                        {bundle.name}
                                    </div>
                                    {bundle.description && (
                                        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{bundle.description}</p>
                                    )}
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {bundle.software.slice(0, 6).map((app) => (
                                            <SoftwareIcon key={app.id} name={app.name} icon={app.icon} slug={app.slug} size="sm" />
                                        ))}
                                    </div>
                                    <p className="mt-3 text-xs text-muted-foreground">
                                        {availableCount} app{availableCount !== 1 ? 's' : ''} available for {os}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </section>
            )}

            <div className="mb-6 flex flex-wrap items-center gap-3">
                <label className="text-sm font-medium text-muted-foreground">Switch OS:</label>
                <select
                    value={os}
                    onChange={(e) => changeOs(e.target.value as CatalogOs)}
                    className="rounded-xl border border-input bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/30 focus:outline-none"
                >
                    {OS_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <span className="text-sm text-muted-foreground">{selected.length} selected</span>
                {activeBundleSlug && (
                    <Link
                        href={`/installer?os=${os}`}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                        Clear bundle
                    </Link>
                )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(grouped).map(([category, items]) => (
                    <PublicCard key={category} className="p-5">
                        <h2 className="mb-4 text-lg font-semibold text-indigo-950">{category}</h2>
                        <div className="space-y-2">
                            {items.map((item) => {
                                const checked = selected.includes(item.id);
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => toggle(item.id)}
                                        className={cn(
                                            'flex w-full items-center gap-3 rounded-xl border p-3 text-left transition',
                                            checked
                                                ? 'border-indigo-300 bg-indigo-50/80 shadow-sm'
                                                : 'border-transparent bg-muted/40 hover:bg-muted/70',
                                        )}
                                    >
                                        <SoftwareIcon name={item.name} icon={item.icon} slug={item.slug} size="sm" />
                                        <span className="flex-1 font-medium">{item.name}</span>
                                        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{item.license_type}</span>
                                        <span className={cn(
                                            'flex size-5 items-center justify-center rounded-full border',
                                            checked ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-muted-foreground/30',
                                        )}>
                                            {checked && <Check className="size-3" />}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </PublicCard>
                ))}
            </div>

            <PublicCard className="mt-8 flex flex-wrap items-center gap-4 p-6">
                <Button
                    size="lg"
                    disabled={loading || selected.length === 0}
                    onClick={generate}
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-600/25"
                >
                    {loading ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
                    {loading ? 'Generating…' : 'Download Installer'}
                </Button>
                {downloadUrl && (
                    <Button asChild size="lg" variant="outline">
                        <a href={downloadUrl}>Download {filename}</a>
                    </Button>
                )}
                <p className="w-full text-sm text-muted-foreground">
                    Double-click on Windows/macOS, or run in terminal on Ubuntu. Internet required.
                </p>
            </PublicCard>
        </PublicLayout>
    );
}
