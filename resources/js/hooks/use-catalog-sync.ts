import { usePage } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { registerCatalogListener, setKnownCatalogVersion } from '@/lib/catalog-realtime';

export const CATALOG_UPDATED_EVENT = 'catalog:updated';

type Options = {
    version: number;
    reloadProps: string[];
    os?: string;
    onSync?: (softwareIds: number[]) => void;
};

export function useCatalogSync({ version, reloadProps, os, onSync }: Options): void {
    const sharedVersion = usePage<{ catalogVersion?: number }>().props.catalogVersion ?? version;
    const reloadPropsKey = reloadProps.join(',');
    const onSyncRef = useRef(onSync);

    useEffect(() => {
        onSyncRef.current = onSync;
    }, [onSync]);

    useEffect(() => {
        setKnownCatalogVersion(sharedVersion);
    }, [sharedVersion]);

    useEffect(() => {
        return registerCatalogListener({
            reloadProps,
            os,
            onSync: (ids) => onSyncRef.current?.(ids),
        });
    }, [os, reloadPropsKey]);
}
