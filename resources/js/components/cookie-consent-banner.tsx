import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

const OPEN_EVENT = 'cookie-consent:open';

export function openCookieConsentBanner(): void {
    if (typeof window === 'undefined') {
        return;
    }

    window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function CookieConsentBanner() {
    const { hasChoice, accept, reject } = useCookieConsent();
    const [isForcedOpen, setIsForcedOpen] = useState(false);

    useEffect(() => {
        const open = () => setIsForcedOpen(true);
        window.addEventListener(OPEN_EVENT, open);

        return () => {
            window.removeEventListener(OPEN_EVENT, open);
        };
    }, []);

    if (hasChoice && !isForcedOpen) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-4 shadow-lg backdrop-blur">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
                <p className="text-muted-foreground">
                    We use cookies for essential site features and, with your consent, for Google AdSense personalization.
                    Read our <Link className="public-accent-link" href="/page/privacy-policy">Privacy Policy</Link> and{' '}
                    <Link className="public-accent-link" href="/page/cookie-policy">Cookie Policy</Link>.
                </p>
                <div className="flex items-center gap-2">
                    <Button type="button" variant="outline" onClick={() => {
                        reject();
                        setIsForcedOpen(false);
                        toast.success('Cookie preferences updated. Non-essential cookies disabled.');
                    }}
                    >
                        Reject non-essential
                    </Button>
                    <Button type="button" onClick={() => {
                        accept();
                        setIsForcedOpen(false);
                        toast.success('Cookie preferences updated. Non-essential cookies enabled.');
                    }}
                    >
                        Accept all
                    </Button>
                </div>
            </div>
        </div>
    );
}
