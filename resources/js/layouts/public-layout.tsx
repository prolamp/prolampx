import type { ReactNode } from 'react';
import CookieConsentBanner from '@/components/cookie-consent-banner';
import PublicHeader from '@/components/public-header';
import SiteFooter from '@/components/site-footer';
import { cn } from '@/lib/utils';

export default function PublicLayout({ children, fullBleed = false }: { children: ReactNode; fullBleed?: boolean }) {
    return (
        <div className="public-mesh-bg min-h-screen text-foreground">
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
