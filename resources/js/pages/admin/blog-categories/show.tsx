import { Head, Link } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Category = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    posts_count?: number;
    is_active: boolean;
};

type Props = { category: Category };

export default function AdminBlogCategoriesShow({ category }: Props) {
    return (
        <>
            <Head title={category.name} />
            <AdminPageHeader
                title={category.name}
                action={<Button asChild><Link href={`/admin/blog-categories/${category.id}/edit`}>Edit</Link></Button>}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        Blog category
                        <AdminStatusBadge active={category.is_active} />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <p><span className="text-muted-foreground">Slug:</span> {category.slug}</p>
                    <p><span className="text-muted-foreground">Posts:</span> {category.posts_count ?? 0}</p>
                    {category.description && <p className="border-t pt-3">{category.description}</p>}
                </CardContent>
            </Card>
        </>
    );
}

AdminBlogCategoriesShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog Categories', href: '/admin/blog-categories' },
        { title: 'View', href: '#' },
    ],
};
