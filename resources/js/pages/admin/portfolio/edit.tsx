import { Head } from '@inertiajs/react';
import PortfolioFormFields, { type PortfolioFormData } from './form-fields';

type Props = {
    section: PortfolioFormData & { id: number };
    sectionTypes: string[];
};

export default function AdminPortfolioEdit({ section, sectionTypes }: Props) {
    return (
        <>
            <Head title={`Edit ${section.title ?? section.type}`} />
            <PortfolioFormFields section={section} sectionTypes={sectionTypes} />
        </>
    );
}

AdminPortfolioEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Website Sections', href: '/admin/portfolio' },
        { title: 'Edit', href: '#' },
    ],
};
