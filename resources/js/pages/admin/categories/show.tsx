import { Head, Link } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Category = {
    id: number;
    name: string;
    slug: string;
    sort_order: number;
    is_active: boolean;
    software_count: number;
};

type Props = { category: Category };

export default function AdminCategoriesShow({ category }: Props) {
    return (
        <>
            <Head title={category.name} />
            <AdminPageHeader
                title={category.name}
                action={<Button asChild><Link href={`/admin/categories/${category.id}/edit`}>Edit</Link></Button>}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        Category
                        <AdminStatusBadge active={category.is_active} />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Slug:</span> {category.slug}</p>
                    <p><span className="text-muted-foreground">Sort order:</span> {category.sort_order}</p>
                    <p><span className="text-muted-foreground">Software items:</span> {category.software_count}</p>
                </CardContent>
            </Card>
        </>
    );
}

AdminCategoriesShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Categories', href: '/admin/categories' },
        { title: 'View', href: '#' },
    ],
};
