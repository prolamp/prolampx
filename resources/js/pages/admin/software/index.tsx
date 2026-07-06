import { Head } from '@inertiajs/react';
import AdminDataTable from '@/components/admin/admin-data-table';
import AdminListingPage from '@/components/admin/admin-listing-page';
import AdminRowActions from '@/components/admin/admin-row-actions';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import SoftwareIcon from '@/components/software-icon';
import { Badge } from '@/components/ui/badge';
import type { AdminFilters, PaginatedData } from '@/types/admin';

type Software = {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
    category: string;
    category_relation?: { name: string } | null;
    license_type: string;
    is_featured: boolean;
    is_active: boolean;
};

type Props = {
    software: PaginatedData<Software>;
    filters: AdminFilters;
};

export default function AdminSoftwareIndex({ software, filters }: Props) {
    return (
        <>
            <Head title="Software" />
            <AdminListingPage
                title="Software"
                description="Manage installable applications in the catalog."
                createHref="/admin/software/create"
                createLabel="Add Software"
                initialSearch={filters.search}
                paginated={software}
            >
                <AdminDataTable
                    rows={software.data}
                    emptyMessage="No software found. Try a different search or add a new entry."
                    columns={[
                        {
                            key: 'icon',
                            label: '',
                            render: (row) => <SoftwareIcon name={row.name} icon={row.icon} slug={row.slug} size="sm" />,
                        },
                        { key: 'name', label: 'Name', render: (row) => <span className="font-medium">{row.name}</span> },
                        { key: 'slug', label: 'Slug' },
                        {
                            key: 'category',
                            label: 'Category',
                            render: (row) => row.category_relation?.name ?? row.category,
                        },
                        { key: 'license_type', label: 'License' },
                        {
                            key: 'status',
                            label: 'Status',
                            render: (row) => <AdminStatusBadge active={row.is_active} />,
                        },
                        {
                            key: 'is_featured',
                            label: 'Featured',
                            render: (row) => row.is_featured ? <Badge variant="outline">Featured</Badge> : '—',
                        },
                    ]}
                    actions={(row) => (
                        <AdminRowActions
                            name={row.name}
                            viewHref={`/admin/software/${row.id}`}
                            editHref={`/admin/software/${row.id}/edit`}
                            deleteHref={`/admin/software/${row.id}`}
                            toggleHref={`/admin/software/${row.id}/toggle-active`}
                            isActive={row.is_active}
                        />
                    )}
                />
            </AdminListingPage>
        </>
    );
}

AdminSoftwareIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Software', href: '/admin/software' },
    ],
};
