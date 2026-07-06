import { Head, Link } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Bundle = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    is_active: boolean;
    software: { id: number; name: string; slug: string }[];
};

type Props = { bundle: Bundle };

export default function AdminBundlesShow({ bundle }: Props) {
    return (
        <>
            <Head title={bundle.name} />
            <AdminPageHeader
                title={bundle.name}
                action={<Button asChild><Link href={`/admin/bundles/${bundle.id}/edit`}>Edit</Link></Button>}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        Bundle
                        <AdminStatusBadge active={bundle.is_active} />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <p><span className="text-muted-foreground">Slug:</span> {bundle.slug}</p>
                    {bundle.description && <p>{bundle.description}</p>}
                    <div className="border-t pt-3">
                        <p className="mb-2 font-medium">Included software ({bundle.software.length})</p>
                        <ul className="list-inside list-disc text-muted-foreground">
                            {bundle.software.map((s) => <li key={s.id}>{s.name}</li>)}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

AdminBundlesShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Bundles', href: '/admin/bundles' },
        { title: 'View', href: '#' },
    ],
};
