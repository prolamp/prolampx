import { Link } from '@inertiajs/react';
import { Activity, Download, Shield } from 'lucide-react';

const products = [
    {
        icon: Download,
        title: 'ProLampX Installer',
        body: 'A universal software setup tool for Windows, macOS, and Ubuntu. Automate complex environment provisioning.',
        cta: 'View Product',
        href: '/installer',
        iconWrap:
            'bg-secondary-fixed text-secondary dark:border dark:border-primary/20 dark:bg-primary/10 dark:text-primary',
        buttonClass:
            'bg-primary text-primary-foreground hover:bg-secondary hover:text-on-secondary dark:text-inverse-surface dark:hover:text-white',
    },
    {
        icon: Activity,
        title: 'InsightEngine',
        body: 'AI-powered analytics platform for tracking software performance and user behavior in real-time.',
        cta: 'Coming Soon',
        href: null,
        iconWrap:
            'bg-primary-container text-on-primary-container dark:border dark:border-border-subtle dark:bg-surface-container-highest dark:text-on-surface-variant',
        buttonClass:
            'bg-surface-container-high text-primary hover:bg-surface-dim dark:text-on-surface-variant dark:hover:bg-surface-container',
    },
    {
        icon: Shield,
        title: 'SecureAuth Pro',
        body: 'Enterprise-grade authentication middleware designed for high-security fintech and healthcare apps.',
        cta: 'Request Demo',
        href: '/contact',
        iconWrap:
            'bg-secondary text-on-secondary dark:border dark:border-secondary/30 dark:bg-secondary/20 dark:text-secondary',
        buttonClass:
            'bg-surface-container-high text-primary hover:bg-surface-dim dark:text-on-surface-variant dark:hover:bg-surface-container',
    },
];

export default function ProductsSection() {
    return (
        <section className="bg-surface-container-lowest py-stack-xl dark:bg-background" id="products">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <div className="mx-auto mb-stack-xl max-w-2xl text-center">
                    <h2 className="mb-4 text-headline-lg font-bold text-primary dark:text-on-surface">Internal Products</h2>
                    <p className="text-body-md text-on-surface-variant">
                        Our technical prowess isn&apos;t just for clients. We build industry-leading tools to demonstrate
                        our standard of work.
                    </p>
                    <Link
                        href="/products"
                        className="mt-4 inline-flex text-label-md font-semibold text-secondary hover:underline dark:text-primary"
                    >
                        View all products
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
                    {products.map(({ icon: Icon, title, body, cta, href, iconWrap, buttonClass }) => (
                        <div
                            key={title}
                            className="card-hover-up flex flex-col rounded-3xl border border-border-subtle bg-surface-container-lowest p-gutter transition-all hover:shadow-xl dark:bg-surface-container-low dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className={`mb-stack-md flex size-14 items-center justify-center rounded-2xl ${iconWrap}`}>
                                <Icon className="size-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-2 text-headline-md font-bold text-primary dark:text-on-surface">{title}</h3>
                            <p className="mb-gutter flex-grow text-body-md text-on-surface-variant">{body}</p>
                            {href ? (
                                <Link
                                    href={href}
                                    className={`self-start rounded-xl px-6 py-3 text-label-md font-semibold transition-colors ${buttonClass}`}
                                >
                                    {cta}
                                </Link>
                            ) : (
                                <span
                                    className={`self-start rounded-xl px-6 py-3 text-label-md font-semibold ${buttonClass}`}
                                >
                                    {cta}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
