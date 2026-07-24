import { Link, usePage } from '@inertiajs/react';
import { Briefcase, Home, Info, LayoutGrid, Mail, Menu, Newspaper, Package } from 'lucide-react';
import { useState } from 'react';
import { ProLampLogo } from '@/components/prolamp-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/', label: 'Home', icon: Home, match: (path: string) => path === '/' },
    { href: '/about', label: 'About', icon: Info, match: (path: string) => path.startsWith('/about') },
    { href: '/services', label: 'Services', icon: Briefcase, match: (path: string) => path.startsWith('/services') },
    { href: '/products', label: 'Products', icon: Package, match: (path: string) => path.startsWith('/products') },
    { href: '/blog', label: 'Blog', icon: Newspaper, match: (path: string) => path.startsWith('/blog') },
    { href: '/contact', label: 'Contact', icon: Mail, match: (path: string) => path.startsWith('/contact') },
];

export default function PublicHeader() {
    const { url, props } = usePage();
    const auth = (props as { auth?: { user?: { role?: string } | null } }).auth;
    const [open, setOpen] = useState(false);
    const path = url.split('?')[0].split('#')[0];
    const isAdmin = auth?.user?.role === 'super_admin' || auth?.user?.role === 'admin';

    return (
        <header className="sticky top-0 z-50 px-margin-mobile pt-4">
            <div className="glass-pill mx-auto flex h-16 max-w-container-max items-center justify-between gap-4 rounded-full border border-border-subtle bg-surface-container-lowest/80 px-gutter shadow-[0px_4px_20px_rgba(27,54,93,0.08)] dark:bg-surface-container/60 dark:shadow-[0px_4px_20px_rgba(0,0,0,0.4)]">
                <Link href="/" className="group flex shrink-0 items-center gap-2.5">
                    <ProLampLogo variant="full" imageClassName="h-8 w-auto transition group-hover:opacity-90 sm:h-9" />
                </Link>

                <nav className="hidden flex-1 items-center justify-center gap-stack-lg md:flex">
                    {navLinks.map(({ href, label, match }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                'text-body-md transition-colors',
                                match(path)
                                    ? 'font-bold text-secondary dark:text-primary'
                                    : 'text-on-surface-variant hover:text-secondary dark:hover:text-primary',
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <Button
                        asChild
                        size="sm"
                        className="hidden rounded-full bg-primary text-primary-foreground hover:bg-secondary hover:text-on-secondary sm:inline-flex"
                    >
                        <Link href="/contact">Start Project</Link>
                    </Button>

                    {isAdmin && (
                        <Button asChild variant="outline" size="sm" className="hidden rounded-full sm:inline-flex">
                            <Link href="/admin/dashboard">
                                <LayoutGrid className="size-4" />
                                Admin
                            </Link>
                        </Button>
                    )}

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-full md:hidden">
                                <Menu className="size-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2 text-left">
                                    <ProLampLogo variant="mark" imageClassName="h-6 w-auto" />
                                    ProLampX
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="mt-6 flex flex-col gap-1">
                                {navLinks.map(({ href, label, icon: Icon, match }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition',
                                            match(path)
                                                ? 'bg-secondary-fixed text-on-secondary-fixed dark:bg-primary-container/50 dark:text-primary'
                                                : 'text-foreground hover:bg-muted',
                                        )}
                                    >
                                        <Icon className="public-accent-text size-4" />
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-6 space-y-2 border-t border-border-subtle pt-6">
                                <Button asChild className="w-full rounded-full bg-primary hover:bg-secondary">
                                    <Link href="/contact" onClick={() => setOpen(false)}>
                                        Start Project
                                    </Link>
                                </Button>
                                {isAdmin && (
                                    <Button asChild variant="outline" className="w-full rounded-full">
                                        <Link href="/admin/dashboard" onClick={() => setOpen(false)}>
                                            Admin Dashboard
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
