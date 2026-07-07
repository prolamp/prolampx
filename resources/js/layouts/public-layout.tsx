import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import CookieConsentBanner, { openCookieConsentBanner } from '@/components/cookie-consent-banner';
import PublicHeader from '@/components/public-header';
import { useAdsense } from '@/hooks/use-adsense';
import { cn } from '@/lib/utils';

export default function PublicLayout({ children }: { children: ReactNode }) {
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
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">{children}</main>
            <footer className="mt-16 border-t border-indigo-100/80 bg-white/60 py-10 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} ProLampX — One-click software setup for Windows, macOS & Ubuntu.
                    </p>
                    <Link href="/page/privacy-policy" className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        Privacy Policy
                    </Link>
                    <Link href="/page/terms-of-service" className="ml-4 mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        Terms of Service
                    </Link>
                    <Link href="/page/cookie-policy" className="ml-4 mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        Cookie Policy
                    </Link>
                    <button
                        type="button"
                        className="ml-4 mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700"
                        onClick={openCookieConsentBanner}
                    >
                        Cookie Settings
                    </button>
                </div>
            </footer>
            <CookieConsentBanner />
        </div>
    );
}

export function PublicCard({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'glass-panel rounded-2xl transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/10',
                className,
            )}
            {...props}
        />
    );
}
