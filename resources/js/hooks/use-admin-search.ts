import { useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';

export function useAdminSearch(initialSearch: string) {
    const [search, setSearch] = useState(initialSearch);
    const isFirstRender = useRef(true);

    useEffect(() => {
        setSearch(initialSearch);
    }, [initialSearch]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const timeout = window.setTimeout(() => {
            router.get(
                window.location.pathname,
                { search: search || undefined },
                { preserveState: true, replace: true, preserveScroll: true },
            );
        }, 350);

        return () => window.clearTimeout(timeout);
    }, [search]);

    return { search, setSearch };
}
