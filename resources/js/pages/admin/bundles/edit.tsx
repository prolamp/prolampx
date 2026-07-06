import { Head } from '@inertiajs/react';
import BundleFormFields, { type BundleFormData } from './form-fields';

type Software = { id: number; name: string };

type Props = {
    bundle: BundleFormData & { id: number; software: { id: number }[] };
    allSoftware: Software[];
};

export default function AdminBundlesEdit({ bundle, allSoftware }: Props) {
    return (
        <>
            <Head title={`Edit ${bundle.name}`} />
            <BundleFormFields bundle={bundle} allSoftware={allSoftware} />
        </>
    );
}

AdminBundlesEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Bundles', href: '/admin/bundles' },
        { title: 'Edit', href: '#' },
    ],
};
