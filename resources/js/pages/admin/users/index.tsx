import { Head } from '@inertiajs/react';
import AdminDataTable from '@/components/admin/admin-data-table';
import AdminListingPage from '@/components/admin/admin-listing-page';
import AdminRowActions from '@/components/admin/admin-row-actions';
import type { AdminFilters, PaginatedData } from '@/types/admin';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

type Props = {
    users: PaginatedData<User>;
    filters: AdminFilters;
};

export default function AdminUsersIndex({ users, filters }: Props) {
    return (
        <>
            <Head title="Users" />
            <AdminListingPage
                title="Admin Users"
                description="Manage admin and super admin accounts."
                createHref="/admin/users/create"
                createLabel="Add User"
                initialSearch={filters.search}
                paginated={users}
            >
                <AdminDataTable
                    rows={users.data}
                    emptyMessage="No users found."
                    columns={[
                        { key: 'name', label: 'Name', render: (row) => <span className="font-medium">{row.name}</span> },
                        { key: 'email', label: 'Email' },
                        { key: 'role', label: 'Role' },
                    ]}
                    actions={(row) => (
                        <AdminRowActions
                            name={row.name}
                            viewHref={`/admin/users/${row.id}`}
                            editHref={`/admin/users/${row.id}`}
                            deleteHref={`/admin/users/${row.id}`}
                            showEdit={false}
                            showToggle={false}
                        />
                    )}
                />
            </AdminListingPage>
        </>
    );
}

AdminUsersIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Users', href: '/admin/users' },
    ],
};
