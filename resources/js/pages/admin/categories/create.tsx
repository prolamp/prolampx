import { Head } from '@inertiajs/react';
import CategoryFormFields from './form-fields';

export default function AdminCategoriesCreate() {
    return (
        <>
            <Head title="Create Category" />
            <CategoryFormFields />
        </>
    );
}

AdminCategoriesCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Categories', href: '/admin/categories' },
        { title: 'Create', href: '/admin/categories/create' },
    ],
};
