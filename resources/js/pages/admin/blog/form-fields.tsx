import { Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import InputError from '@/components/input-error';
import MediaUploadField from '@/components/media-upload-field';
import RichTextEditor from '@/components/rich-text-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type BlogFormData = {
    title: string;
    slug: string;
    blog_category_id: string;
    body: string;
    cover_image: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    published_at: string;
};

type Category = { id: number; name: string };

type Props = {
    post?: BlogFormData & { id: number };
    categories: Category[];
};

export default function BlogFormFields({ post, categories }: Props) {
    const isEdit = !!post?.id;
    const { data, setData, post: submitPost, put, processing, errors, transform } = useForm<BlogFormData>({
        title: post?.title ?? '',
        slug: post?.slug ?? '',
        blog_category_id: post?.blog_category_id ? String(post.blog_category_id) : '',
        body: post?.body ?? '',
        cover_image: post?.cover_image ?? '',
        meta_title: post?.meta_title ?? '',
        meta_description: post?.meta_description ?? '',
        meta_keywords: post?.meta_keywords ?? '',
        published_at: post?.published_at ? String(post.published_at).slice(0, 10) : '',
    });

    transform((formData) => ({
        ...formData,
        blog_category_id: formData.blog_category_id ? Number(formData.blog_category_id) : null,
    }));

    return (
        <>
            <AdminPageHeader title={isEdit ? `Edit ${data.title}` : 'Create Blog Post'} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isEdit) {
                        put(`/admin/blog/${post!.id}`);
                    } else {
                        submitPost('/admin/blog');
                    }
                }}
            >
                <AdminFormCard
                    title="Post details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>{isEdit ? 'Save changes' : 'Create'}</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/blog">Cancel</Link>
                            </Button>
                        </>
                    )}
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                            <Label>Title</Label>
                            <Input value={data.title} onChange={(e) => setData('title', e.target.value)} />
                            <InputError message={errors.title} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Slug</Label>
                            <Input value={data.slug} onChange={(e) => setData('slug', e.target.value)} />
                            <InputError message={errors.slug} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Category</Label>
                            <select
                                value={data.blog_category_id}
                                onChange={(e) => setData('blog_category_id', e.target.value)}
                                className="rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                            >
                                <option value="">No category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Publish date</Label>
                            <Input type="date" value={data.published_at} onChange={(e) => setData('published_at', e.target.value)} />
                            <p className="text-xs text-muted-foreground">Leave empty to save as draft (inactive).</p>
                        </div>
                        <div className="md:col-span-2">
                            <MediaUploadField label="Cover image" value={data.cover_image} onChange={(url) => setData('cover_image', url)} />
                        </div>
                    </div>
                    <div className="mt-4 grid gap-2">
                        <Label>Body</Label>
                        <RichTextEditor value={data.body} onChange={(html) => setData('body', html)} error={errors.body} />
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                            <Label>Meta title</Label>
                            <Input value={data.meta_title} onChange={(e) => setData('meta_title', e.target.value)} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Meta keywords</Label>
                            <Input value={data.meta_keywords} onChange={(e) => setData('meta_keywords', e.target.value)} />
                        </div>
                        <div className="grid gap-2 md:col-span-2">
                            <Label>Meta description</Label>
                            <textarea
                                className="min-h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                                value={data.meta_description}
                                onChange={(e) => setData('meta_description', e.target.value)}
                            />
                        </div>
                    </div>
                </AdminFormCard>
            </form>
        </>
    );
}
