import { router } from '@inertiajs/react';
import { CATALOG_UPDATED_EVENT } from '@/hooks/use-catalog-sync';

export type CatalogListener = {
    reloadProps: string[];
    os?: string;
    onSync?: (softwareIds: number[]) => void;
};

let listeners = new Map<number, CatalogListener>();
let nextListenerId = 0;
let knownVersion = 1;
let pollTimer: number | null = null;
let initialized = false;

function dispatchCatalogUpdate(version: number): void {
    window.dispatchEvent(new CustomEvent(CATALOG_UPDATED_EVENT, { detail: { version } }));
}

async function applyCatalogUpdate(nextVersion: number): Promise<void> {
    if (nextVersion <= knownVersion) {
        return;
    }

    knownVersion = nextVersion;

    for (const listener of listeners.values()) {
        const activeOs = listener.os
            ?? new URLSearchParams(window.location.search).get('os')
            ?? 'windows';

        if (listener.onSync) {
            try {
                const response = await fetch(`/api/catalog/${activeOs}`, {
                    headers: { Accept: 'application/json' },
                });

                if (response.ok) {
                    const catalog = await response.json() as { software_ids: number[] };
                    listener.onSync(catalog.software_ids);
                }
            } catch {
                // Ignore transient fetch errors.
            }
        }

        router.reload({
            only: listener.reloadProps,
        });
    }
}

async function checkCatalogVersion(): Promise<void> {
    try {
        const response = await fetch('/api/catalog/version', {
            headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
            return;
        }

        const data = await response.json() as { version: number };
        await applyCatalogUpdate(data.version);
    } catch {
        // Ignore transient network errors.
    }
}

function startFallbackPolling(): void {
    if (pollTimer) {
        return;
    }

    pollTimer = window.setInterval(() => {
        void checkCatalogVersion();
    }, 15000);
}

export function setKnownCatalogVersion(version: number): void {
    knownVersion = version;
}

export function registerCatalogListener(listener: CatalogListener): () => void {
    const id = ++nextListenerId;
    listeners.set(id, listener);

    return () => {
        listeners.delete(id);
    };
}

async function initReverbListener(): Promise<void> {
    const key = import.meta.env.VITE_REVERB_APP_KEY;

    if (!key) {
        startFallbackPolling();
        return;
    }

    try {
        const [{ default: Echo }, { default: Pusher }] = await Promise.all([
            import('laravel-echo'),
            import('pusher-js'),
        ]);

        window.Pusher = Pusher;

        const scheme = String(import.meta.env.VITE_REVERB_SCHEME ?? 'http').replace(/"/g, '');
        const host = String(import.meta.env.VITE_REVERB_HOST ?? 'localhost').replace(/"/g, '');
        const port = Number(String(import.meta.env.VITE_REVERB_PORT ?? 8080).replace(/"/g, ''));

        const echo = new Echo({
            broadcaster: 'reverb',
            key: String(key).replace(/"/g, ''),
            wsHost: host,
            wsPort: port,
            wssPort: port,
            forceTLS: scheme === 'https',
            enabledTransports: ['ws', 'wss'],
        });

        echo.channel('catalog').listen('.CatalogUpdated', (payload: { version: number }) => {
            void applyCatalogUpdate(payload.version);
        });

        const connection = echo.connector?.pusher?.connection;
        connection?.bind('disconnected', () => {
            startFallbackPolling();
        });
    } catch {
        startFallbackPolling();
    }
}

export function initCatalogRealtime(): void {
    if (initialized || typeof window === 'undefined') {
        return;
    }

    initialized = true;

    window.addEventListener(CATALOG_UPDATED_EVENT, (event) => {
        const detail = (event as CustomEvent<{ version: number }>).detail;
        void applyCatalogUpdate(detail.version);
    });

    void initReverbListener();
}

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Pusher: any;
    }
}
