import { Head, Link } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Section = {
    id: number;
    type: string;
    title: string | null;
    subtitle: string | null;
    body: string | null;
    image: string | null;
    settings: Record<string, unknown>;
    sort_order: number;
    is_active: boolean;
};

type Props = { section: Section };

export default function AdminPortfolioShow({ section }: Props) {
    return (
        <>
            <Head title={section.title ?? section.type} />
            <AdminPageHeader
                title={section.title ?? section.type}
                action={<Button asChild><Link href={`/admin/portfolio/${section.id}/edit`}>Edit</Link></Button>}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 capitalize">
                        {section.type} section
                        <AdminStatusBadge active={section.is_active} />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <p><span className="text-muted-foreground">Type:</span> {section.type}</p>
                    <p><span className="text-muted-foreground">Order:</span> {section.sort_order}</p>
                    {section.subtitle && <p><span className="text-muted-foreground">Subtitle:</span> {section.subtitle}</p>}
                    {section.body && (
                        <div className="prose border-t pt-3" dangerouslySetInnerHTML={{ __html: section.body }} />
                    )}
                    {section.settings && Object.keys(section.settings).length > 0 && (
                        <pre className="overflow-auto rounded-lg bg-muted p-3 text-xs">{JSON.stringify(section.settings, null, 2)}</pre>
                    )}
                </CardContent>
            </Card>
        </>
    );
}

AdminPortfolioShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Website Sections', href: '/admin/portfolio' },
        { title: 'View', href: '#' },
    ],
};
