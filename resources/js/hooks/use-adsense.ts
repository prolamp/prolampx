import { usePage } from '@inertiajs/react';

export type AdSenseSlot = 'content' | 'sidebar' | 'in-feed';

export type AdSenseConfig = {
    enabled: boolean;
    clientId: string | null;
    slots: Partial<Record<AdSenseSlot, string>>;
};

export function useAdsense(): AdSenseConfig {
    const { adsense } = usePage().props as { adsense?: AdSenseConfig };

    return adsense ?? { enabled: false, clientId: null, slots: {} };
}
