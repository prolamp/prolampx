import { Head, Link } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Post = {
    id: number;
    title: string;
    slug: string;
    body: string;
    cover_image: string | null;
    published_at: string | null;
};

type Props = { post: Post };

export default function AdminBlogShow({ post }: Props) {
    return (
        <>
            <Head title={post.title} />
            <AdminPageHeader
                title={post.title}
                action={<Button asChild><Link href={`/admin/blog/${post.id}/edit`}>Edit</Link></Button>}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        Post
                        <AdminStatusBadge active={!!post.published_at} />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <p><span className="text-muted-foreground">Slug:</span> {post.slug}</p>
                    {post.published_at && (
                        <p><span className="text-muted-foreground">Published:</span> {new Date(post.published_at).toLocaleString()}</p>
                    )}
                    <div className="prose max-w-none border-t pt-4" dangerouslySetInnerHTML={{ __html: post.body }} />
                </CardContent>
            </Card>
        </>
    );
}

AdminBlogShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog', href: '/admin/blog' },
        { title: 'View', href: '#' },
    ],
};
