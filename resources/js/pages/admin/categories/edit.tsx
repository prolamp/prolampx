import { Head } from '@inertiajs/react';
import CategoryFormFields, { type CategoryFormData } from './form-fields';

type Props = { category: CategoryFormData & { id: number } };

export default function AdminCategoriesEdit({ category }: Props) {
    return (
        <>
            <Head title={`Edit ${category.name}`} />
            <CategoryFormFields category={category} />
        </>
    );
}

AdminCategoriesEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Categories', href: '/admin/categories' },
        { title: 'Edit', href: '#' },
    ],
};
