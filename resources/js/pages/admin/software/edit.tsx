import { Head, Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import { Button } from '@/components/ui/button';
import SoftwareFormFields, { type SoftwareFormData } from './form';

type Category = { id: number; name: string; slug: string };

type Software = SoftwareFormData['software'] & {
    id: number;
    install_commands: { os: string; package_manager: string; command: string }[];
};

type Props = {
    software: Software;
    categories: Category[];
};

const defaultOsCommands = ['windows', 'macos', 'ubuntu'] as const;

function mergeCommands(existing: Software['install_commands']) {
    return defaultOsCommands.map((os) => {
        const found = existing.find((c) => c.os === os);
        return found ?? { os, package_manager: os === 'windows' ? 'winget' : os === 'macos' ? 'brew' : 'apt', command: '' };
    });
}

export default function AdminSoftwareEdit({ software, categories }: Props) {
    const { data, setData, put, processing, errors } = useForm<SoftwareFormData>({
        software: {
            name: software.name,
            slug: software.slug,
            category_id: software.category_id,
            license_type: software.license_type,
            access_tier: software.access_tier ?? 'public',
            latest_version: software.latest_version ?? '',
            icon: software.icon ?? '',
            description: software.description ?? '',
            meta_title: software.meta_title ?? '',
            meta_description: software.meta_description ?? '',
            meta_keywords: software.meta_keywords ?? '',
            is_featured: software.is_featured,
            is_active: software.is_active ?? true,
        },
        install_commands: mergeCommands(software.install_commands),
    });

    return (
        <>
            <Head title={`Edit ${software.name}`} />
            <AdminPageHeader title={`Edit ${software.name}`} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    put(`/admin/software/${software.id}`);
                }}
            >
                <AdminFormCard
                    title="Software details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>Save changes</Button>
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

AdminSoftwareEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Software', href: '/admin/software' },
        { title: 'Edit', href: '#' },
    ],
};
