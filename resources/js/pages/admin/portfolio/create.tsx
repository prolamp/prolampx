import { Head } from '@inertiajs/react';
import PortfolioFormFields from './form-fields';

type Props = { sectionTypes: string[] };

export default function AdminPortfolioCreate({ sectionTypes }: Props) {
    return (
        <>
            <Head title="Create Section" />
            <PortfolioFormFields sectionTypes={sectionTypes} />
        </>
    );
}

AdminPortfolioCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Website Sections', href: '/admin/portfolio' },
        { title: 'Create', href: '/admin/portfolio/create' },
    ],
};
