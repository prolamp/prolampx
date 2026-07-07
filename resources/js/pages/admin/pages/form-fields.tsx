import { Head, Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import InputError from '@/components/input-error';
import RichTextEditor from '@/components/rich-text-editor';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type PageFormData = {
    title: string;
    slug: string;
    body: string;
    meta_title: string;
    meta_description: string;
    og_image: string;
    is_published: boolean;
};

type Props = {
    page?: PageFormData & { id: number };
};

export default function PageFormFields({ page }: Props) {
    const isEdit = !!page?.id;
    const { data, setData, post, put, processing, errors } = useForm<PageFormData>({
        title: page?.title ?? '',
        slug: page?.slug ?? '',
        body: page?.body ?? '',
        meta_title: page?.meta_title ?? '',
        meta_description: page?.meta_description ?? '',
        og_image: page?.og_image ?? '',
        is_published: page?.is_published ?? true,
    });

    return (
        <>
            <Head title={isEdit ? `Edit ${data.title}` : 'Create Page'} />
            <AdminPageHeader title={isEdit ? `Edit ${data.title}` : 'Create Page'} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isEdit) {
                        put(`/admin/pages/${page!.id}`);
                    } else {
                        post('/admin/pages');
                    }
                }}
            >
                <AdminFormCard
                    title="Page details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>{isEdit ? 'Save changes' : 'Create'}</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/pages">Cancel</Link>
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
                        <div className="grid gap-2 md:col-span-2">
                            <Label>Body</Label>
                            <RichTextEditor value={data.body} onChange={(html) => setData('body', html)} error={errors.body} />
                            <InputError message={errors.body} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Meta title</Label>
                            <Input value={data.meta_title} onChange={(e) => setData('meta_title', e.target.value)} />
                            <InputError message={errors.meta_title} />
                        </div>
                        <div className="grid gap-2">
                            <Label>OpenGraph image URL</Label>
                            <Input value={data.og_image} onChange={(e) => setData('og_image', e.target.value)} />
                            <InputError message={errors.og_image} />
                        </div>
                        <div className="grid gap-2 md:col-span-2">
                            <Label>Meta description</Label>
                            <textarea
                                value={data.meta_description}
                                onChange={(e) => setData('meta_description', e.target.value)}
                                rows={4}
                                className="min-h-28 rounded-md border border-input bg-transparent px-3 py-2 shadow-xs outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <InputError message={errors.meta_description} />
                        </div>
                        <label className="flex items-center gap-2 text-sm">
                            <Checkbox checked={data.is_published} onCheckedChange={(v) => setData('is_published', !!v)} />
                            Published
                        </label>
                    </div>
                </AdminFormCard>
            </form>
        </>
    );
}
