import { Head } from '@inertiajs/react';
import BlogCategoryFormFields, { type BlogCategoryFormData } from './form-fields';

type Props = { category: BlogCategoryFormData & { id: number } };

export default function AdminBlogCategoriesEdit({ category }: Props) {
    return (
        <>
            <Head title={`Edit ${category.name}`} />
            <BlogCategoryFormFields category={category} />
        </>
    );
}

AdminBlogCategoriesEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog Categories', href: '/admin/blog-categories' },
        { title: 'Edit', href: '#' },
    ],
};
