import { Link } from '@inertiajs/react';
import { ProLampLogo } from '@/components/prolamp-logo';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({ children, title, description }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background p-6 md:p-10">
            <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-primary-container/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative w-full max-w-[440px]">
                <div className="mb-8 flex flex-col items-center gap-4 text-center">
                    <Link href={home()} className="flex flex-col items-center gap-2">
                        <ProLampLogo variant="full" imageClassName="h-10 w-auto" />
                        <span className="sr-only">{title}</span>
                    </Link>
                    <div className="space-y-2">
                        <h1 className="text-headline-md font-bold text-primary dark:text-on-surface">{title}</h1>
                        {description && <p className="text-sm text-on-surface-variant">{description}</p>}
                    </div>
                </div>

                <div className="rounded-xl border border-border-subtle bg-surface-container-lowest p-6 shadow-[0px_4px_20px_rgba(27,54,93,0.08)] sm:p-8 dark:bg-surface-container dark:shadow-[0px_4px_20px_rgba(0,0,0,0.35)]">
                    {children}
                </div>
            </div>
        </div>
    );
}
