import { Link } from '@inertiajs/react';
import { openCookieConsentBanner } from '@/components/cookie-consent-banner';
import { ProLampLogo } from '@/components/prolamp-logo';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

const companyLinks = [
    { label: 'Installer', href: '/installer' },
    { label: 'Privacy Policy', href: '/page/privacy-policy' },
    { label: 'Terms of Service', href: '/page/terms-of-service' },
    { label: 'Cookie Policy', href: '/page/cookie-policy' },
];

export default function SiteFooter() {
    return (
        <footer className="relative mt-0 overflow-hidden border-t border-border-subtle bg-surface-container-lowest py-stack-xl">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <div className="grid grid-cols-1 gap-gutter md:grid-cols-4">
                    <div className="flex flex-col gap-4 md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <ProLampLogo variant="full" imageClassName="h-8 w-auto" />
                        </Link>
                        <p className="max-w-xs text-body-md text-on-surface-variant">
                            Premium software development and IT consultancy. We turn vision into high-performance code.
                        </p>
                    </div>

                    <div className="flex flex-col gap-stack-sm">
                        <h5 className="mb-2 text-label-md font-semibold uppercase tracking-widest text-primary dark:text-on-surface">
                            Navigation
                        </h5>
                        {quickLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-body-md text-on-surface-variant opacity-80 transition-all hover:text-secondary hover:opacity-100 dark:hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-stack-sm">
                        <h5 className="mb-2 text-label-md font-semibold uppercase tracking-widest text-primary dark:text-on-surface">
                            Company
                        </h5>
                        {companyLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-body-md text-on-surface-variant opacity-80 transition-all hover:text-secondary hover:opacity-100 dark:hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            type="button"
                            onClick={openCookieConsentBanner}
                            className="text-left text-body-md text-on-surface-variant opacity-80 transition-all hover:text-secondary hover:opacity-100 dark:hover:text-primary"
                        >
                            Cookie Settings
                        </button>
                    </div>

                    <div className="flex flex-col gap-stack-sm">
                        <h5 className="mb-2 text-label-md font-semibold uppercase tracking-widest text-primary dark:text-on-surface">
                            Products
                        </h5>
                        <Link
                            href="/installer"
                            className="text-body-md text-on-surface-variant opacity-80 transition-all hover:text-secondary hover:opacity-100 dark:hover:text-primary"
                        >
                            ProLampX Installer
                        </Link>
                        <Link
                            href="/bundles"
                            className="text-body-md text-on-surface-variant opacity-80 transition-all hover:text-secondary hover:opacity-100 dark:hover:text-primary"
                        >
                            App Bundles
                        </Link>
                        <a
                            href="/#about"
                            className="text-body-md text-on-surface-variant opacity-80 transition-all hover:text-secondary hover:opacity-100 dark:hover:text-primary"
                        >
                            About
                        </a>
                        <a
                            href="/#services"
                            className="text-body-md text-on-surface-variant opacity-80 transition-all hover:text-secondary hover:opacity-100 dark:hover:text-primary"
                        >
                            Services
                        </a>
                    </div>
                </div>

                <div className="mt-stack-xl border-t border-border-subtle pt-gutter text-body-md text-on-surface-variant">
                    &copy; {new Date().getFullYear()} ProLampX. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
