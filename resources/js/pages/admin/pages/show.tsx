import { Head, Link } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Page = {
    id: number;
    title: string;
    slug: string;
    body: string;
    meta_title: string | null;
    meta_description: string | null;
    og_image: string | null;
    is_published: boolean;
};

type Props = { page: Page };

export default function AdminPagesShow({ page }: Props) {
    return (
        <>
            <Head title={page.title} />
            <AdminPageHeader
                title={page.title}
                action={<Button asChild><Link href={`/admin/pages/${page.id}/edit`}>Edit</Link></Button>}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        Page details
                        <AdminStatusBadge active={page.is_published} activeLabel="Published" inactiveLabel="Draft" />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Slug:</span> {page.slug}</p>
                    <p><span className="text-muted-foreground">Meta title:</span> {page.meta_title ?? '—'}</p>
                    <p><span className="text-muted-foreground">Meta description:</span> {page.meta_description ?? '—'}</p>
                    <p><span className="text-muted-foreground">OpenGraph image:</span> {page.og_image ?? '—'}</p>
                </CardContent>
            </Card>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                    <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: page.body }} />
                </CardContent>
            </Card>
        </>
    );
}

AdminPagesShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Pages', href: '/admin/pages' },
        { title: 'View', href: '#' },
    ],
};
