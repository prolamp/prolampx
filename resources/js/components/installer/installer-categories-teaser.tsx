import { Link } from '@inertiajs/react';
import { Globe, MessageSquare, PlayCircle, Shield, Terminal, Briefcase } from 'lucide-react';

const categories = [
    { label: 'Browsers', icon: Globe, href: '/software' },
    { label: 'Messaging', icon: MessageSquare, href: '/software' },
    { label: 'Media', icon: PlayCircle, href: '/software' },
    { label: 'Security', icon: Shield, href: '/software' },
    { label: 'Dev Tools', icon: Terminal, href: '/software' },
    { label: 'Productivity', icon: Briefcase, href: '/software' },
];

export default function InstallerCategoriesTeaser() {
    return (
        <section className="py-stack-xl">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <h2 className="mb-stack-xl text-center text-headline-lg font-bold text-primary dark:text-on-surface">
                    Everything You Need
                </h2>
                <div className="grid grid-cols-2 gap-stack-md sm:grid-cols-3 md:grid-cols-6">
                    {categories.map(({ label, icon: Icon, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="group flex flex-col items-center gap-3 rounded-2xl border border-border-subtle bg-surface-container-lowest p-gutter transition-all hover:border-secondary hover:bg-secondary/5 dark:bg-surface-container dark:hover:border-primary/50"
                        >
                            <Icon className="size-6 text-on-surface-variant transition-colors group-hover:text-secondary dark:group-hover:text-primary" />
                            <span className="text-label-md font-semibold text-primary dark:text-on-surface">{label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
