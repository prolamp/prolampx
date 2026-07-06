import { Head } from '@inertiajs/react';
import AdminDataTable from '@/components/admin/admin-data-table';
import AdminListingPage from '@/components/admin/admin-listing-page';
import AdminRowActions from '@/components/admin/admin-row-actions';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import type { AdminFilters, PaginatedData } from '@/types/admin';

type Category = {
    id: number;
    name: string;
    slug: string;
    sort_order: number;
    is_active: boolean;
    posts_count: number;
};

type Props = {
    categories: PaginatedData<Category>;
    filters: AdminFilters;
};

export default function AdminBlogCategoriesIndex({ categories, filters }: Props) {
    return (
        <>
            <Head title="Blog Categories" />
            <AdminListingPage
                title="Blog Categories"
                description="Organize blog posts into categories."
                createHref="/admin/blog-categories/create"
                createLabel="Add Category"
                initialSearch={filters.search}
                paginated={categories}
            >
                <AdminDataTable
                    rows={categories.data}
                    emptyMessage="No categories found."
                    columns={[
                        { key: 'name', label: 'Name', render: (row) => <span className="font-medium">{row.name}</span> },
                        { key: 'slug', label: 'Slug' },
                        { key: 'posts_count', label: 'Posts' },
                        { key: 'sort_order', label: 'Order' },
                        {
                            key: 'status',
                            label: 'Status',
                            render: (row) => <AdminStatusBadge active={row.is_active} />,
                        },
                    ]}
                    actions={(row) => (
                        <AdminRowActions
                            name={row.name}
                            viewHref={`/admin/blog-categories/${row.id}`}
                            editHref={`/admin/blog-categories/${row.id}/edit`}
                            deleteHref={`/admin/blog-categories/${row.id}`}
                            toggleHref={`/admin/blog-categories/${row.id}/toggle-active`}
                            isActive={row.is_active}
                        />
                    )}
                />
            </AdminListingPage>
        </>
    );
}

AdminBlogCategoriesIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog Categories', href: '/admin/blog-categories' },
    ],
};
