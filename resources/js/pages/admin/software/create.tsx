import { Head, Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SoftwareFormFields, { type SoftwareFormData } from './form';

type Category = { id: number; name: string; slug: string };

type Props = {
    categories: Category[];
};

const emptyCommands = [
    { os: 'windows', package_manager: 'winget', command: '' },
    { os: 'macos', package_manager: 'brew', command: '' },
    { os: 'ubuntu', package_manager: 'apt', command: '' },
];

export default function AdminSoftwareCreate({ categories }: Props) {
    const { data, setData, post, processing, errors } = useForm<SoftwareFormData>({
        software: {
            name: '',
            slug: '',
            category_id: categories[0]?.id ?? 0,
            license_type: 'free',
            access_tier: 'public',
            latest_version: '',
            icon: '',
            description: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
            is_featured: false,
            is_active: true,
        },
        install_commands: emptyCommands,
    });

    return (
        <>
            <Head title="Add Software" />
            <AdminPageHeader title="Add Software" description="Create a new catalog entry with install commands per OS." />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    post('/admin/software');
                }}
            >
                <AdminFormCard
                    title="Software details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>Create</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/software">Cancel</Link>
                            </Button>
                        </>
                    )}
                >
                    <SoftwareFormFields
                        data={data}
                        setData={setData}
                        errors={errors}
                        categories={categories}
                    />
                </AdminFormCard>
            </form>
        </>
    );
}

AdminSoftwareCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Software', href: '/admin/software' },
        { title: 'Create', href: '/admin/software/create' },
    ],
};
