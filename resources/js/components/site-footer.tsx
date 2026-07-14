import { Link } from '@inertiajs/react';
import { openCookieConsentBanner } from '@/components/cookie-consent-banner';
import { ProLampLogo } from '@/components/prolamp-logo';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Installer', href: '/installer' },
    { label: 'Bundles', href: '/bundles' },
    { label: 'Software', href: '/software' },
    { label: 'Blog', href: '/blog' },
];

const companyLinks = [
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/page/privacy-policy' },
    { label: 'Terms of Service', href: '/page/terms-of-service' },
    { label: 'Cookie Policy', href: '/page/cookie-policy' },
];

export default function SiteFooter() {
    return (
        <footer className="relative mt-12 overflow-hidden border-t border-indigo-100/80 bg-gradient-to-b from-indigo-50/70 to-white/50 backdrop-blur-sm dark:border-border/60 dark:from-[#1c2d4a] dark:to-[#171f33]">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-3">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <ProLampLogo variant="full" imageClassName="h-8 w-auto" />
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                            Pick your apps, download one installer, and set up a fresh Windows, macOS, or Ubuntu machine in minutes.
                        </p>
                    </div>

                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                            Quick links
                        </p>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="public-accent-link text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                            Company
                        </p>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="public-accent-link text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    type="button"
                                    onClick={openCookieConsentBanner}
                                    className="public-accent-link text-sm"
                                >
                                    Cookie Settings
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 border-t border-border/50 pt-5 text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} ProLampX. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
