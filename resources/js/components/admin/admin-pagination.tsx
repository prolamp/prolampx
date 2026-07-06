import { Link } from '@inertiajs/react';
import type { PaginationLink } from '@/types/admin';
import { Button } from '@/components/ui/button';

type AdminPaginationProps = {
    links: PaginationLink[];
    meta?: {
        from: number | null;
        to: number | null;
        total: number;
    };
};

function decodeLabel(label: string): string {
    return label
        .replace('&laquo;', '«')
        .replace('&raquo;', '»')
        .replace(/<[^>]+>/g, '');
}

export default function AdminPagination({ links, meta }: AdminPaginationProps) {
    if (links.length <= 3 && !meta?.total) {
        return null;
    }

    return (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            {meta && (
                <p className="text-sm text-muted-foreground">
                    {meta.total > 0
                        ? `Showing ${meta.from}–${meta.to} of ${meta.total}`
                        : 'No results'}
                </p>
            )}
            <div className="flex flex-wrap gap-1">
                {links.map((link, index) => {
                    const label = decodeLabel(link.label);

                    if (!link.url) {
                        return (
                            <Button key={index} variant="outline" size="sm" disabled>
                                {label}
                            </Button>
                        );
                    }

                    return (
                        <Button
                            key={index}
                            variant={link.active ? 'default' : 'outline'}
                            size="sm"
                            asChild
                        >
                            <Link href={link.url} preserveScroll preserveState>
                                {label}
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}
