import { Head } from '@inertiajs/react';
import BlogFormFields, { type BlogFormData } from './form-fields';

type Category = { id: number; name: string };

type Props = {
    post: BlogFormData & { id: number; blog_category_id?: number | null };
    categories: Category[];
};

export default function AdminBlogEdit({ post, categories }: Props) {
    return (
        <>
            <Head title={`Edit ${post.title}`} />
            <BlogFormFields post={post} categories={categories} />
        </>
    );
}

AdminBlogEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Blog', href: '/admin/blog' },
        { title: 'Edit', href: '#' },
    ],
};
