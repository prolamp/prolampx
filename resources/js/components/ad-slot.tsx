import { usePage } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import type { AdSenseSlot } from '@/hooks/use-adsense';

type AdSlotProps = {
    slot: AdSenseSlot;
    className?: string;
};

export default function AdSlot({ slot, className }: AdSlotProps) {
    const { adsense } = usePage().props as {
        adsense?: { enabled: boolean; clientId: string | null; slots: Partial<Record<AdSenseSlot, string>> };
    };
    const pushed = useRef(false);

    useEffect(() => {
        if (!adsense?.enabled || typeof window === 'undefined' || pushed.current) {
            return;
        }

        try {
            ((window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle =
                (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || []).push({});
            pushed.current = true;
        } catch {
            // script not ready
        }
    }, [adsense?.enabled, slot]);

    if (!adsense?.enabled || !adsense.clientId) {
        return null;
    }

    const slotId = adsense.slots?.[slot];

    return (
        <ins
            className={cn('adsbygoogle block w-full', className)}
            style={{ display: 'block' }}
            data-ad-client={adsense.clientId}
            {...(slotId ? { 'data-ad-slot': slotId } : {})}
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
}
