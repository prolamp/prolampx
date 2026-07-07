import PageFormFields from './form-fields';

export default function AdminPagesCreate() {
    return <PageFormFields />;
}

AdminPagesCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Pages', href: '/admin/pages' },
        { title: 'Create', href: '/admin/pages/create' },
    ],
};
