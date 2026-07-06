import type { ReactNode } from 'react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminPagination from '@/components/admin/admin-pagination';
import AdminSearchField from '@/components/admin/admin-search-field';
import { useAdminSearch } from '@/hooks/use-admin-search';
import type { PaginatedData } from '@/types/admin';

type AdminListingPageProps<T> = {
    title: string;
    description?: string;
    createHref?: string;
    createLabel?: string;
    searchPlaceholder?: string;
    initialSearch?: string;
    paginated?: PaginatedData<T>;
    children: ReactNode;
};

export default function AdminListingPage<T>({
    title,
    description,
    createHref,
    createLabel,
    searchPlaceholder,
    initialSearch = '',
    paginated,
    children,
}: AdminListingPageProps<T>) {
    const { search, setSearch } = useAdminSearch(initialSearch);

    return (
        <>
            <AdminPageHeader
                title={title}
                description={description}
                createHref={createHref}
                createLabel={createLabel}
            />
            <div className="mb-4">
                <AdminSearchField
                    value={search}
                    onChange={setSearch}
                    placeholder={searchPlaceholder ?? `Search ${title.toLowerCase()}…`}
                />
            </div>
            {children}
            {paginated && (
                <AdminPagination links={paginated.links} meta={paginated.meta} />
            )}
        </>
    );
}
