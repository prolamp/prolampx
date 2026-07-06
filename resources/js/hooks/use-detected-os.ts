import { usePage } from '@inertiajs/react';
import { useCallback, useMemo, useState } from 'react';
import {
    detectFromNavigator,
    readStoredOsOverride,
    resolveCatalogOs,
    storeOsOverride,
    type CatalogOs,
    type OsType,
} from '@/lib/detect-os';

export type { CatalogOs, OsType } from '@/lib/detect-os';
export { OS_OPTIONS, osLabel } from '@/lib/detect-os';

export function useDetectedOS() {
    const { detectedOs: serverDetected } = usePage().props as { detectedOs?: string };

    const clientDetected = useMemo(() => detectFromNavigator(), []);

    const baseDetected: OsType = useMemo(() => {
        if (clientDetected !== 'unknown') {
            return clientDetected;
        }

        return (serverDetected as OsType) ?? 'unknown';
    }, [clientDetected, serverDetected]);

    const [overrideOs, setOverrideOs] = useState<CatalogOs | null>(() => readStoredOsOverride());
    const [, setTick] = useState(0);

    const activeOs: CatalogOs = overrideOs ?? resolveCatalogOs(baseDetected);
    const isOverridden = overrideOs !== null;

    const setOs = useCallback((os: CatalogOs) => {
        storeOsOverride(os);
        setOverrideOs(os);
    }, []);

    const resetDetection = useCallback(() => {
        setOverrideOs(null);
        setTick((n) => n + 1);
    }, []);

    return {
        detectedOs: baseDetected,
        activeOs,
        isOverridden,
        setOs,
        resetDetection,
    };
}
