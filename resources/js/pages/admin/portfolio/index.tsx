import { Head } from '@inertiajs/react';
import AdminDataTable from '@/components/admin/admin-data-table';
import AdminListingPage from '@/components/admin/admin-listing-page';
import AdminRowActions from '@/components/admin/admin-row-actions';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import type { AdminFilters, PaginatedData } from '@/types/admin';

type Section = {
    id: number;
    type: string;
    title: string | null;
    sort_order: number;
    is_active: boolean;
};

type Props = {
    sections: PaginatedData<Section>;
    sectionTypes: string[];
    filters: AdminFilters;
};

export default function AdminPortfolioIndex({ sections, filters }: Props) {
    return (
        <>
            <Head title="Website Sections" />
            <AdminListingPage
                title="Website Sections"
                description="Build your portfolio homepage with dynamic sections — hero, about, features, projects, and more."
                createHref="/admin/portfolio/create"
                createLabel="Add Section"
                initialSearch={filters.search}
                paginated={sections}
            >
                <AdminDataTable
                    rows={sections.data}
                    emptyMessage="No sections found."
                    columns={[
                        { key: 'title', label: 'Title', render: (row) => <span className="font-medium">{row.title ?? '—'}</span> },
                        { key: 'type', label: 'Type', render: (row) => <span className="capitalize">{row.type}</span> },
                        { key: 'sort_order', label: 'Order' },
                        {
                            key: 'status',
                            label: 'Status',
                            render: (row) => <AdminStatusBadge active={row.is_active} />,
                        },
                    ]}
                    actions={(row) => (
                        <AdminRowActions
                            name={row.title ?? row.type}
                            viewHref={`/admin/portfolio/${row.id}`}
                            editHref={`/admin/portfolio/${row.id}/edit`}
                            deleteHref={`/admin/portfolio/${row.id}`}
                            toggleHref={`/admin/portfolio/${row.id}/toggle-active`}
                            isActive={row.is_active}
                        />
                    )}
                />
            </AdminListingPage>
        </>
    );
}

AdminPortfolioIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Website Sections', href: '/admin/portfolio' },
    ],
};
