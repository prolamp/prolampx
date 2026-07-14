import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';
import CookieConsentBanner from '@/components/cookie-consent-banner';
import PublicHeader from '@/components/public-header';
import SiteFooter from '@/components/site-footer';
import { useAdsense } from '@/hooks/use-adsense';
import { cn } from '@/lib/utils';

export default function PublicLayout({ children, fullBleed = false }: { children: ReactNode; fullBleed?: boolean }) {
    const adsense = useAdsense();

    return (
        <div className="public-mesh-bg min-h-screen text-foreground">
            {adsense.enabled && adsense.clientId && (
                <Head>
                    <script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense.clientId}`}
                        crossOrigin="anonymous"
                    />
                </Head>
            )}
            <PublicHeader />
            {fullBleed ? <main>{children}</main> : <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">{children}</main>}
            <SiteFooter />
            <CookieConsentBanner />
        </div>
    );
}

export function PublicCard({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'glass-panel rounded-2xl transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-black/20',
                className,
            )}
            {...props}
        />
    );
}
