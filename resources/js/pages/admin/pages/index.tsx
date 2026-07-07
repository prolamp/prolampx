import { Head } from '@inertiajs/react';
import AdminDataTable from '@/components/admin/admin-data-table';
import AdminListingPage from '@/components/admin/admin-listing-page';
import AdminRowActions from '@/components/admin/admin-row-actions';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import type { AdminFilters, PaginatedData } from '@/types/admin';

type Page = {
    id: number;
    title: string;
    slug: string;
    meta_title: string | null;
    is_published: boolean;
    updated_at: string;
};

type Props = {
    pages: PaginatedData<Page>;
    filters: AdminFilters;
};

export default function AdminPagesIndex({ pages, filters }: Props) {
    return (
        <>
            <Head title="Pages" />
            <AdminListingPage
                title="Pages"
                description="Manage legal and informational pages such as privacy policy and terms."
                createHref="/admin/pages/create"
                createLabel="Add Page"
                initialSearch={filters.search}
                paginated={pages}
            >
                <AdminDataTable
                    rows={pages.data}
                    emptyMessage="No pages found."
                    columns={[
                        { key: 'title', label: 'Title', render: (row) => <span className="font-medium">{row.title}</span> },
                        { key: 'slug', label: 'Slug' },
                        { key: 'meta_title', label: 'Meta title', render: (row) => row.meta_title ?? '—' },
                        {
                            key: 'status',
                            label: 'Status',
                            render: (row) => <AdminStatusBadge active={row.is_published} activeLabel="Published" inactiveLabel="Draft" />,
                        },
                    ]}
                    actions={(row) => (
                        <AdminRowActions
                            name={row.title}
                            viewHref={`/admin/pages/${row.id}`}
                            editHref={`/admin/pages/${row.id}/edit`}
                            deleteHref={`/admin/pages/${row.id}`}
                            toggleHref={`/admin/pages/${row.id}/toggle-published`}
                            isActive={row.is_published}
                        />
                    )}
                />
            </AdminListingPage>
        </>
    );
}

AdminPagesIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Pages', href: '/admin/pages' },
    ],
};
