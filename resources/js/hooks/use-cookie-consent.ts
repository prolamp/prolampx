import { useEffect, useState } from 'react';

type CookieConsentState = 'accepted' | 'rejected' | 'unset';

const COOKIE_NAME = 'cookie_consent_v1';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;
const CONSENT_EVENT = 'cookie-consent:changed';

function readConsentCookie(): CookieConsentState {
    if (typeof document === 'undefined') {
        return 'unset';
    }

    const cookie = document.cookie
        .split('; ')
        .find((entry) => entry.startsWith(`${COOKIE_NAME}=`));

    if (!cookie) {
        return 'unset';
    }

    const value = cookie.split('=')[1];

    if (value === 'accepted' || value === 'rejected') {
        return value;
    }

    return 'unset';
}

function writeConsentCookie(value: Exclude<CookieConsentState, 'unset'>): void {
    document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function useCookieConsent() {
    const [consent, setConsentState] = useState<CookieConsentState>(() => readConsentCookie());

    useEffect(() => {
        const syncConsent = () => setConsentState(readConsentCookie());
        window.addEventListener(CONSENT_EVENT, syncConsent);

        return () => {
            window.removeEventListener(CONSENT_EVENT, syncConsent);
        };
    }, []);

    const setConsent = (value: Exclude<CookieConsentState, 'unset'>) => {
        writeConsentCookie(value);
        setConsentState(value);
    };

    return {
        consent,
        hasChoice: consent !== 'unset',
        canLoadAds: consent === 'accepted',
        accept: () => setConsent('accepted'),
        reject: () => setConsent('rejected'),
    };
}
