import { Head, Link } from '@inertiajs/react';
import AdminDataTable from '@/components/admin/admin-data-table';
import AdminListingPage from '@/components/admin/admin-listing-page';
import AdminRowActions from '@/components/admin/admin-row-actions';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import type { AdminFilters, PaginatedData } from '@/types/admin';

type Post = {
    id: number;
    title: string;
    slug: string;
    published_at: string | null;
    category?: { id: number; name: string } | null;
};

type Props = {
    posts: PaginatedData<Post>;
    filters: AdminFilters;
};

export default function AdminBlogIndex({ posts, filters }: Props) {
    return (
        <>
            <Head title="Blog" />
            <AdminListingPage
                title="Blog"
                description="Manage blog posts and articles."
                createHref="/admin/blog/create"
                createLabel="New Post"
                initialSearch={filters.search}
                paginated={posts}
            >
                <AdminDataTable
                    rows={posts.data}
                    emptyMessage="No posts found."
                    columns={[
                        { key: 'title', label: 'Title', render: (row) => <span className="font-medium">{row.title}</span> },
                        { key: 'slug', label: 'Slug' },
                        {
                            key: 'category',
                            label: 'Category',
                            render: (row) => row.category?.name ?? '—',
                        },
                        {
                            key: 'status',
                            label: 'Status',
                            render: (row) => <AdminStatusBadge active={!!row.published_at} />,
                        },
                        {
                            key: 'published_at',
                            label: 'Published',
                            render: (row) => row.published_at ? new Date(row.published_at).toLocaleDateString() : '—',
                        },
                    ]}
                    actions={(row) => (
                        <AdminRowActions
                            name={row.title}
                            viewHref={`/admin/blog/${row.id}`}
                            editHref={`/admin/blog/${row.id}/edit`}
                            deleteHref={`/admin/blog/${row.id}`}
                            toggleHref={`/admin/blog/${row.id}/toggle-active`}
                            isActive={!!row.published_at}
                        />
                    )}
                />
            </AdminListingPage>
        </>
    );
}

AdminBlogIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog', href: '/admin/blog' },
    ],
};
