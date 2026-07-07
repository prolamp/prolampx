import PageFormFields, { type PageFormData } from './form-fields';

type Props = { page: PageFormData & { id: number } };

export default function AdminPagesEdit({ page }: Props) {
    return <PageFormFields page={page} />;
}

AdminPagesEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Pages', href: '/admin/pages' },
        { title: 'Edit', href: '#' },
    ],
};
