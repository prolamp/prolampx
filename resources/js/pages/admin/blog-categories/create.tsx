import { Head } from '@inertiajs/react';
import BlogCategoryFormFields from './form-fields';

export default function AdminBlogCategoriesCreate() {
    return (
        <>
            <Head title="Create Blog Category" />
            <BlogCategoryFormFields />
        </>
    );
}

AdminBlogCategoriesCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog Categories', href: '/admin/blog-categories' },
        { title: 'Create', href: '/admin/blog-categories/create' },
    ],
};
