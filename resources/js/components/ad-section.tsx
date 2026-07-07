import type { ReactNode } from 'react';
import AdSlot from '@/components/ad-slot';
import { useAdsense, type AdSenseSlot } from '@/hooks/use-adsense';
import { cn } from '@/lib/utils';

type AdSectionProps = {
    slot: AdSenseSlot;
    variant?: 'banner' | 'sidebar' | 'inline';
    className?: string;
    label?: boolean;
    children?: ReactNode;
};

const variantStyles = {
    banner: 'min-h-[90px]',
    sidebar: 'min-h-[280px]',
    inline: 'min-h-[120px]',
};

export default function AdSection({
    slot,
    variant = 'banner',
    className,
    label = true,
}: AdSectionProps) {
    const adsense = useAdsense();

    if (!adsense.enabled) {
        return null;
    }

    return (
        <aside
            className={cn(
                'overflow-hidden rounded-2xl border border-indigo-100/80 bg-gradient-to-b from-white to-indigo-50/30 p-4 shadow-sm dark:border-border/60 dark:from-card dark:to-indigo-950/30',
                className,
            )}
            aria-label="Advertisement"
        >
            {label && (
                <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                    Sponsored
                </p>
            )}
            <AdSlot slot={slot} className={variantStyles[variant]} />
        </aside>
    );
}

/**
 * Two-column layout helper: main content + optional sticky sidebar ad.
 */
export function ContentWithSidebarAd({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    const adsense = useAdsense();

    return (
        <div className={cn('grid gap-8', adsense.enabled && 'lg:grid-cols-[1fr_300px]', className)}>
            <div className="min-w-0">{children}</div>
            {adsense.enabled && (
                <AdSection slot="sidebar" variant="sidebar" className="h-fit lg:sticky lg:top-24" />
            )}
        </div>
    );
}
