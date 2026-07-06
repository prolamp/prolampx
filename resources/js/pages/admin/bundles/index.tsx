import { Head } from '@inertiajs/react';
import AdminDataTable from '@/components/admin/admin-data-table';
import AdminListingPage from '@/components/admin/admin-listing-page';
import AdminRowActions from '@/components/admin/admin-row-actions';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import type { AdminFilters, PaginatedData } from '@/types/admin';

type Bundle = {
    id: number;
    name: string;
    slug: string;
    is_active: boolean;
    software: { id: number; name: string }[];
};

type Props = {
    bundles: PaginatedData<Bundle>;
    filters: AdminFilters;
};

export default function AdminBundlesIndex({ bundles, filters }: Props) {
    return (
        <>
            <Head title="Bundles" />
            <AdminListingPage
                title="Bundles"
                description="Preset software groups for quick setup (e.g. Fresh Dev Setup)."
                createHref="/admin/bundles/create"
                createLabel="Add Bundle"
                initialSearch={filters.search}
                paginated={bundles}
            >
                <AdminDataTable
                    rows={bundles.data}
                    emptyMessage="No bundles found."
                    columns={[
                        { key: 'name', label: 'Name', render: (row) => <span className="font-medium">{row.name}</span> },
                        { key: 'slug', label: 'Slug' },
                        {
                            key: 'software',
                            label: 'Apps',
                            render: (row) => (
                                <span className="text-muted-foreground">
                                    {row.software.map((s) => s.name).join(', ') || '—'}
                                </span>
                            ),
                        },
                        {
                            key: 'status',
                            label: 'Status',
                            render: (row) => <AdminStatusBadge active={row.is_active} />,
                        },
                    ]}
                    actions={(row) => (
                        <AdminRowActions
                            name={row.name}
                            viewHref={`/admin/bundles/${row.id}`}
                            editHref={`/admin/bundles/${row.id}/edit`}
                            deleteHref={`/admin/bundles/${row.id}`}
                            toggleHref={`/admin/bundles/${row.id}/toggle-active`}
                            isActive={row.is_active}
                        />
                    )}
                />
            </AdminListingPage>
        </>
    );
}

AdminBundlesIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Bundles', href: '/admin/bundles' },
    ],
};
