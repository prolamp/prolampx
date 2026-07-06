import { Head } from '@inertiajs/react';
import BlogFormFields from './form-fields';

type Category = { id: number; name: string };

type Props = { categories: Category[] };

export default function AdminBlogCreate({ categories }: Props) {
    return (
        <>
            <Head title="Create Blog Post" />
            <BlogFormFields categories={categories} />
        </>
    );
}

AdminBlogCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog', href: '/admin/blog' },
        { title: 'Create', href: '/admin/blog/create' },
    ],
};
