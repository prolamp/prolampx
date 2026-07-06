import { Link, usePage } from '@inertiajs/react';
import { Download, Layers, LayoutGrid, LogIn, Menu, Monitor, Newspaper, Package, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/', label: 'Home', match: (path: string) => path === '/' },
    { href: '/installer', label: 'Installer', icon: Download, match: (path: string) => path.startsWith('/installer') },
    { href: '/bundles', label: 'Bundles', icon: Layers, match: (path: string) => path.startsWith('/bundles') },
    { href: '/software', label: 'Software', icon: Monitor, match: (path: string) => path.startsWith('/software') },
    { href: '/blog', label: 'Blog', icon: Newspaper, match: (path: string) => path.startsWith('/blog') },
];

export default function PublicHeader() {
    const { url, props } = usePage();
    const auth = (props as { auth?: { user?: { role?: string } | null } }).auth;
    const [open, setOpen] = useState(false);
    const path = url.split('?')[0];
    const isAdmin = auth?.user?.role === 'super_admin' || auth?.user?.role === 'admin';

    return (
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 shadow-sm shadow-indigo-500/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
                <Link href="/" className="group flex shrink-0 items-center gap-2.5">
                    <span className="relative flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 transition group-hover:scale-105">
                        <Sparkles className="size-4" />
                        <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition group-hover:opacity-100" />
                    </span>
                    <div className="hidden leading-tight sm:block">
                        <span className="block text-base font-bold tracking-tight">
                            Pro<span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Lamp</span>X
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                            Multi-OS installer
                        </span>
                    </div>
                </Link>

                <nav className="hidden flex-1 items-center justify-center md:flex">
                    <div className="flex items-center gap-1 rounded-full border border-indigo-100/80 bg-indigo-50/50 p-1">
                        {navLinks.map(({ href, label, match }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    'rounded-full px-4 py-2 text-sm font-medium transition',
                                    match(path)
                                        ? 'bg-white text-indigo-700 shadow-sm'
                                        : 'text-muted-foreground hover:text-indigo-700',
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <Button
                        asChild
                        size="sm"
                        className="hidden bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-600/25 sm:inline-flex"
                    >
                        <Link href="/installer">
                            <Download className="size-4" />
                            Get Installer
                        </Link>
                    </Button>

                    {isAdmin ? (
                        <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                            <Link href="/admin/dashboard">
                                <LayoutGrid className="size-4" />
                                Admin
                            </Link>
                        </Button>
                    ) : (
                        <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                            <Link href="/login">
                                <LogIn className="size-4" />
                                Login
                            </Link>
                        </Button>
                    )}

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="size-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2 text-left">
                                    <Sparkles className="size-4 text-indigo-600" />
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
                                                ? 'bg-indigo-50 text-indigo-700'
                                                : 'text-foreground hover:bg-muted',
                                        )}
                                    >
                                        {Icon && <Icon className="size-4 text-indigo-600" />}
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-6 space-y-2 border-t pt-6">
                                <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-violet-600">
                                    <Link href="/installer" onClick={() => setOpen(false)}>
                                        <Download className="size-4" />
                                        Get Installer
                                    </Link>
                                </Button>
                                {isAdmin ? (
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="/admin/dashboard" onClick={() => setOpen(false)}>Admin Dashboard</Link>
                                    </Button>
                                ) : (
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
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
