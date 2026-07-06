import { Link } from '@inertiajs/react';
import type { LucideIcon } from 'lucide-react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type AdminActionButtonProps = {
    icon: LucideIcon;
    label: string;
    onClick?: () => void;
    href?: string;
    variant?: 'default' | 'ghost' | 'destructive';
    className?: string;
};

export default function AdminActionButton({
    icon: Icon,
    label,
    onClick,
    href,
    variant = 'ghost',
    className,
}: AdminActionButtonProps) {
    if (href) {
        return (
            <Button variant={variant} size="icon" className={cn('size-8', className)} asChild title={label}>
                <Link href={href} preserveScroll>
                    <Icon className="size-4" />
                    <span className="sr-only">{label}</span>
                </Link>
            </Button>
        );
    }

    return (
        <Button
            variant={variant}
            size="icon"
            className={cn('size-8', className)}
            onClick={onClick}
            title={label}
            type="button"
        >
            <Icon className="size-4" />
            <span className="sr-only">{label}</span>
        </Button>
    );
}

export function adminPatch(url: string): void {
    router.patch(url, {}, { preserveScroll: true });
}

export function adminDelete(url: string, confirmMessage: string): void {
    if (confirm(confirmMessage)) {
        router.delete(url, { preserveScroll: true });
    }
}
