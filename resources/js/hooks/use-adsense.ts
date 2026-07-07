import { usePage } from '@inertiajs/react';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

export type AdSenseSlot = 'content' | 'sidebar' | 'in-feed';

export type AdSenseConfig = {
    enabled: boolean;
    clientId: string | null;
    slots: Partial<Record<AdSenseSlot, string>>;
    consent: 'accepted' | 'rejected' | 'unset';
};

export function useAdsense(): AdSenseConfig {
    const cookieConsent = useCookieConsent();
    const { adsense } = usePage().props as { adsense?: AdSenseConfig };

    const serverAdsense = adsense ?? { enabled: false, clientId: null, slots: {}, consent: 'unset' as const };

    return {
        ...serverAdsense,
        enabled: serverAdsense.enabled && cookieConsent.canLoadAds,
        consent: cookieConsent.consent,
    };
}
