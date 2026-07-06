import type { ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

type AdminPageHeaderProps = {
    title: string;
    description?: string;
    createHref?: string;
    createLabel?: string;
    action?: ReactNode;
};

export default function AdminPageHeader({
    title,
    description,
    createHref,
    createLabel = 'Create',
    action,
}: AdminPageHeaderProps) {
    return (
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
            </div>
            {action ?? (createHref && (
                <Button asChild>
                    <Link href={createHref}>{createLabel}</Link>
                </Button>
            ))}
        </div>
    );
}
