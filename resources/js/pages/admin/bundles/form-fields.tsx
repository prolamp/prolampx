import { Head, Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SoftwareOption = { id: number; name: string };

export type BundleFormData = {
    name: string;
    slug: string;
    description: string;
    is_featured: boolean;
    is_active: boolean;
    software_ids: number[];
};

type Props = {
    bundle?: BundleFormData & { id: number; software?: { id: number }[] };
    allSoftware: SoftwareOption[];
};

export default function BundleFormFields({ bundle, allSoftware }: Props) {
    const isEdit = !!bundle?.id;
    const { data, setData, post, put, processing, errors } = useForm<BundleFormData>({
        name: bundle?.name ?? '',
        slug: bundle?.slug ?? '',
        description: bundle?.description ?? '',
        is_featured: bundle?.is_featured ?? false,
        is_active: bundle?.is_active ?? true,
        software_ids: bundle?.software?.map((s) => s.id) ?? [],
    });

    const toggleSoftware = (id: number) => {
        setData(
            'software_ids',
            data.software_ids.includes(id)
                ? data.software_ids.filter((sid) => sid !== id)
                : [...data.software_ids, id],
        );
    };

    return (
        <>
            <AdminPageHeader
                title={isEdit ? `Edit ${data.name}` : 'Create Bundle'}
                description="Bundles are preset groups of software users can pick on the setup page (like Ninite bundles)."
            />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isEdit) {
                        put(`/admin/bundles/${bundle!.id}`);
                    } else {
                        post('/admin/bundles');
                    }
                }}
            >
                <AdminFormCard
                    title="Bundle details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>{isEdit ? 'Save changes' : 'Create'}</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/bundles">Cancel</Link>
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
                    </div>
                    <div className="grid gap-2">
                        <Label>Description</Label>
                        <textarea
                            className="min-h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <label className="flex items-center gap-2 text-sm">
                            <Checkbox checked={data.is_featured} onCheckedChange={(v) => setData('is_featured', !!v)} />
                            Featured
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <Checkbox checked={data.is_active} onCheckedChange={(v) => setData('is_active', !!v)} />
                            Active
                        </label>
                    </div>
                    <div className="grid gap-2 border-t pt-4">
                        <Label>Included software</Label>
                        <div className="grid max-h-64 gap-2 overflow-y-auto rounded-md border p-3 md:grid-cols-2">
                            {allSoftware.map((s) => (
                                <label key={s.id} className="flex items-center gap-2 text-sm">
                                    <Checkbox
                                        checked={data.software_ids.includes(s.id)}
                                        onCheckedChange={() => toggleSoftware(s.id)}
                                    />
                                    {s.name}
                                </label>
                            ))}
                        </div>
                    </div>
                </AdminFormCard>
            </form>
        </>
    );
}
