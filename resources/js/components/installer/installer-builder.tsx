import { Link } from '@inertiajs/react';
import {
    Apple,
    Check,
    Download,
    FolderOpen,
    Globe,
    Loader2,
    Monitor,
    Package,
    Plus,
    Terminal,
    Trash2,
} from 'lucide-react';
import type { ReactNode } from 'react';
import AdSection from '@/components/ad-section';
import InstallerRunGuide from '@/components/installer-run-guide';
import OsBanner from '@/components/os-banner';
import SoftwareIcon from '@/components/software-icon';
import { Button } from '@/components/ui/button';
import type { CatalogOs, OsType } from '@/lib/detect-os';
import { OS_OPTIONS } from '@/hooks/use-detected-os';
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
    os: CatalogOs;
    effectiveDetected: OsType;
    isOverridden: boolean;
    activeBundleSlug: string | null;
    selectedBundle: BundlePreview | null;
    categories: Record<string, SoftwareItem[]>;
    bundles: BundlePreview[];
    catalogIds: Set<number>;
    selected: number[];
    loading: boolean;
    downloadUrl: string | null;
    filename: string | null;
    onToggle: (id: number) => void;
    onChangeOs: (os: CatalogOs) => void;
    onApplyBundle: (bundle: BundlePreview) => void;
    onClearBundle: () => void;
    onClearSelection: () => void;
    onGenerate: () => void;
    onResetDetection: () => void;
};

function categoryIcon(name: string): ReactNode {
    const lower = name.toLowerCase();
    if (lower.includes('browser')) {
        return <Globe className="size-5" />;
    }
    if (lower.includes('develop') || lower.includes('dev')) {
        return <Terminal className="size-5" />;
    }
    if (lower.includes('util') || lower.includes('tool')) {
        return <FolderOpen className="size-5" />;
    }
    return <Package className="size-5" />;
}

function OsIcon({ os }: { os: CatalogOs }) {
    if (os === 'macos') {
        return <Apple className="size-5 text-os-macos dark:text-on-surface" />;
    }
    if (os === 'ubuntu') {
        return <Terminal className="size-5 text-os-ubuntu" />;
    }
    return <Monitor className="size-5 text-os-windows" />;
}

export default function InstallerBuilder({
    os,
    effectiveDetected,
    isOverridden,
    activeBundleSlug,
    selectedBundle,
    categories,
    bundles,
    catalogIds,
    selected,
    loading,
    downloadUrl,
    filename,
    onToggle,
    onChangeOs,
    onApplyBundle,
    onClearBundle,
    onClearSelection,
    onGenerate,
    onResetDetection,
}: Props) {
    return (
        <section id="builder" className="scroll-mt-28 bg-background pb-28 pt-8">
            <div className="mx-auto max-w-container-max px-margin-mobile lg:flex lg:gap-gutter">
                <div className="flex-1">
                    <div className="mb-stack-lg">
                        <h2 className="mb-2 text-headline-xl-mobile font-extrabold text-primary md:text-headline-xl dark:text-on-surface">
                            Build your installer
                        </h2>
                        <p className="text-body-lg text-on-surface-variant">
                            Pick apps for your OS, download one setup file.
                        </p>
                        {selectedBundle && (
                            <p className="mt-2 text-sm font-medium text-secondary dark:text-primary">
                                Using bundle: {selectedBundle.name}
                                {selected.length === 0 && (
                                    <span className="font-normal text-on-surface-variant">
                                        {' '}
                                        — no apps in this bundle are available for {os}. Try another OS or pick apps
                                        manually.
                                    </span>
                                )}
                            </p>
                        )}
                    </div>

                    <OsBanner
                        detectedOs={effectiveDetected}
                        activeOs={os}
                        isOverridden={isOverridden}
                        onResetDetection={onResetDetection}
                        className="mb-stack-lg"
                    />

                    <div className="mb-stack-lg flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border-subtle bg-surface-container-low p-stack-md">
                        <div className="flex items-center gap-3">
                            <OsIcon os={os} />
                            <span className="text-label-md text-on-surface">
                                Active OS: <span className="font-bold capitalize">{os === 'macos' ? 'macOS' : os}</span>
                            </span>
                        </div>
                        <label className="flex items-center gap-2 text-label-md text-on-surface-variant">
                            Override OS
                            <select
                                value={os}
                                onChange={(e) => onChangeOs(e.target.value as CatalogOs)}
                                className="rounded-lg border border-border-subtle bg-surface-container-lowest px-4 py-2 text-label-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
                            >
                                {OS_OPTIONS.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {bundles.length > 0 && (
                        <section className="mb-stack-xl">
                            <div className="mb-stack-md flex items-center justify-between gap-4">
                                <h3 className="text-headline-md font-bold text-primary dark:text-on-surface">
                                    Start from a bundle
                                </h3>
                                <Link
                                    href="/bundles"
                                    className="text-label-md font-semibold text-secondary hover:underline dark:text-primary"
                                >
                                    View all bundles
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
                                {bundles.slice(0, 4).map((bundle) => {
                                    const isActive = activeBundleSlug === bundle.slug;
                                    const availableCount = bundle.software_ids.filter((id) => catalogIds.has(id)).length;

                                    return (
                                        <button
                                            key={bundle.id}
                                            type="button"
                                            onClick={() => onApplyBundle(bundle)}
                                            className={cn(
                                                'group rounded-xl border p-stack-md text-left transition-all',
                                                isActive
                                                    ? 'border-secondary bg-secondary/5 shadow-md ring-2 ring-secondary/20 dark:border-primary dark:bg-primary/10 dark:ring-primary/20'
                                                    : 'border-border-subtle bg-surface-container-lowest hover:shadow-lg dark:bg-surface-container',
                                            )}
                                        >
                                            <div className="mb-4 flex items-start justify-between gap-3">
                                                <div>
                                                    <h4 className="text-lg font-bold text-primary dark:text-on-surface">
                                                        {bundle.name}
                                                    </h4>
                                                    {bundle.description && (
                                                        <p className="text-sm text-on-surface-variant">
                                                            {bundle.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <span className="rounded-full bg-secondary-container p-2 text-on-secondary-container opacity-0 transition-opacity group-hover:opacity-100">
                                                    <Plus className="size-4" />
                                                </span>
                                            </div>
                                            <div className="mb-3 flex flex-wrap gap-2">
                                                {bundle.software.slice(0, 4).map((app) => (
                                                    <SoftwareIcon
                                                        key={app.id}
                                                        name={app.name}
                                                        icon={app.icon}
                                                        slug={app.slug}
                                                        size="sm"
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-xs text-on-surface-variant">
                                                {availableCount} app{availableCount !== 1 ? 's' : ''} available for {os}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                            {activeBundleSlug && (
                                <button
                                    type="button"
                                    onClick={onClearBundle}
                                    className="mt-3 text-label-md font-semibold text-secondary hover:underline dark:text-primary"
                                >
                                    Clear bundle
                                </button>
                            )}
                        </section>
                    )}

                    <section className="space-y-stack-xl">
                        {Object.entries(categories).map(([category, items]) => (
                            <div key={category}>
                                <div className="mb-stack-md flex items-center gap-3 border-b border-border-subtle pb-2">
                                    <span className="text-secondary dark:text-primary">{categoryIcon(category)}</span>
                                    <h3 className="text-headline-md font-bold text-primary dark:text-on-surface">
                                        {category}
                                    </h3>
                                </div>
                                <div className="space-y-2">
                                    {items.map((item) => {
                                        const checked = selected.includes(item.id);
                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => onToggle(item.id)}
                                                className={cn(
                                                    'group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all',
                                                    checked
                                                        ? 'border-secondary bg-surface-container-low dark:border-primary dark:bg-primary/10'
                                                        : 'border-border-subtle bg-surface-container-lowest hover:border-secondary dark:bg-surface-container dark:hover:border-primary/50',
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        'flex size-6 shrink-0 items-center justify-center rounded border transition-colors',
                                                        checked
                                                            ? 'border-secondary bg-secondary text-white'
                                                            : 'border-outline',
                                                    )}
                                                >
                                                    {checked && <Check className="size-3.5" />}
                                                </span>
                                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-low transition-transform group-hover:scale-105 dark:bg-surface-container-high">
                                                    <SoftwareIcon
                                                        name={item.name}
                                                        icon={item.icon}
                                                        slug={item.slug}
                                                        size="sm"
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <span className="font-bold text-primary dark:text-on-surface">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <span className="mt-1 inline-block rounded bg-secondary/10 px-2 py-0.5 text-label-sm font-bold uppercase tracking-wider text-secondary dark:text-primary">
                                                        {item.license_type}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </section>

                    <div className="mt-stack-xl mb-stack-xl">
                        <InstallerRunGuide os={os} filename={filename} ready={!!downloadUrl} />
                    </div>
                </div>

                <aside className="mt-10 hidden w-[300px] shrink-0 lg:mt-0 lg:block">
                    <div className="sticky top-28 space-y-stack-md">
                        <AdSection slot="sidebar" variant="sidebar" className="min-h-[280px]" />
                        <div className="rounded-xl bg-primary p-gutter text-primary-foreground dark:text-inverse-on-surface">
                            <h3 className="mb-2 font-bold">Need more apps?</h3>
                            <p className="mb-4 text-sm opacity-80">
                                Browse the full catalog and jump back here to build your custom installer.
                            </p>
                            <Link
                                href="/software"
                                className="block w-full rounded-lg bg-surface-container-lowest py-2 text-center font-bold text-primary transition-colors hover:bg-secondary-fixed dark:text-inverse-surface"
                            >
                                Browse Software
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="fixed bottom-0 z-50 w-full bg-primary shadow-[0px_-4px_20px_rgba(27,54,93,0.12)] dark:border-t dark:border-border-subtle dark:bg-surface-container-high dark:shadow-[0px_-4px_20px_rgba(0,0,0,0.4)]">
                <div className="mx-auto flex max-w-container-max items-center justify-between gap-4 px-gutter py-4">
                    <div className="flex min-w-0 flex-col">
                        <span className="text-label-md font-semibold text-on-primary-container dark:text-on-surface-variant">
                            {selected.length} App{selected.length !== 1 ? 's' : ''} Selected
                        </span>
                        {downloadUrl && filename ? (
                            <a
                                href={downloadUrl}
                                className="truncate text-[10px] font-bold uppercase tracking-widest text-white/80 underline dark:text-primary"
                            >
                                Ready: {filename}
                            </a>
                        ) : (
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 dark:text-on-surface-variant/60">
                                One setup file for {os}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                        {selected.length > 0 && (
                            <button
                                type="button"
                                onClick={onClearSelection}
                                className="hidden items-center gap-2 text-label-md text-on-primary-container transition-colors hover:text-white sm:flex dark:text-on-surface-variant dark:hover:text-on-surface"
                            >
                                <Trash2 className="size-4" />
                                Clear All
                            </button>
                        )}
                        {downloadUrl && (
                            <Button asChild variant="outline" className="hidden border-white/30 bg-transparent text-white hover:bg-white/10 sm:inline-flex dark:border-border-subtle dark:text-on-surface">
                                <a href={downloadUrl}>
                                    <Download className="size-4" />
                                    Download file
                                </a>
                            </Button>
                        )}
                        <button
                            type="button"
                            disabled={loading || selected.length === 0}
                            onClick={onGenerate}
                            className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-bold text-on-secondary shadow-lg transition-all hover:bg-secondary-container active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 dark:bg-primary dark:text-inverse-surface dark:hover:bg-secondary dark:hover:text-white"
                        >
                            {loading ? <Loader2 className="size-5 animate-spin" /> : <Download className="size-5" />}
                            {loading ? 'Generating…' : 'Download Installer'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
