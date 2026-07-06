import { Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type BlogCategoryFormData = {
    name: string;
    slug: string;
    description: string;
    sort_order: number;
    is_active: boolean;
};

type Props = {
    category?: BlogCategoryFormData & { id: number; posts_count?: number };
};

export default function BlogCategoryFormFields({ category }: Props) {
    const isEdit = !!category?.id;
    const { data, setData, post, put, processing, errors } = useForm<BlogCategoryFormData>({
        name: category?.name ?? '',
        slug: category?.slug ?? '',
        description: category?.description ?? '',
        sort_order: category?.sort_order ?? 0,
        is_active: category?.is_active ?? true,
    });

    return (
        <>
            <AdminPageHeader title={isEdit ? `Edit ${data.name}` : 'Create Blog Category'} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isEdit) {
                        put(`/admin/blog-categories/${category!.id}`);
                    } else {
                        post('/admin/blog-categories');
                    }
                }}
            >
                <AdminFormCard
                    title="Category details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>{isEdit ? 'Save changes' : 'Create'}</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/blog-categories">Cancel</Link>
                            </Button>
                        </>
                    )}
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                            <Label>Name</Label>
                            <Input value={data.name} onChange={(e) => setData('name', e.target.value)} />
                            <InputError message={errors.name} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Slug</Label>
                            <Input value={data.slug} onChange={(e) => setData('slug', e.target.value)} />
                            <InputError message={errors.slug} />
                        </div>
                        <div className="grid gap-2 md:col-span-2">
                            <Label>Description</Label>
                            <textarea
                                className="min-h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label>Sort order</Label>
                            <Input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', Number(e.target.value))} />
                        </div>
                        <label className="flex items-center gap-2 self-end text-sm">
                            <Checkbox checked={data.is_active} onCheckedChange={(v) => setData('is_active', !!v)} />
                            Active
                        </label>
                    </div>
                </AdminFormCard>
            </form>
        </>
    );
}
