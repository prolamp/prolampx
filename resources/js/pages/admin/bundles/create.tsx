import { Head } from '@inertiajs/react';
import BundleFormFields from './form-fields';

type Software = { id: number; name: string };

type Props = { allSoftware: Software[] };

export default function AdminBundlesCreate({ allSoftware }: Props) {
    return (
        <>
            <Head title="Create Bundle" />
            <BundleFormFields allSoftware={allSoftware} />
        </>
    );
}

AdminBundlesCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Bundles', href: '/admin/bundles' },
        { title: 'Create', href: '/admin/bundles/create' },
    ],
};
