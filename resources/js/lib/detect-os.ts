export type OsType = 'windows' | 'macos' | 'ubuntu' | 'linux' | 'unknown';

export type CatalogOs = 'windows' | 'macos' | 'ubuntu';

const STORAGE_KEY = 'prolampx_preferred_os';
const OVERRIDE_KEY = 'prolampx_os_override';

export function detectFromNavigator(): OsType {
    if (typeof navigator === 'undefined') {
        return 'unknown';
    }

    const ua = navigator.userAgent.toLowerCase();
    const platform = (navigator.platform || '').toLowerCase();
    const uaData = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase();

    if (/windows|win32|win64|wow64/i.test(ua) || platform.includes('win') || uaData === 'windows') {
        return 'windows';
    }

    if (/macintosh|mac os x|mac_powerpc/i.test(ua) || platform.includes('mac') || uaData === 'macos') {
        return 'macos';
    }

    if (/ubuntu/i.test(ua)) {
        return 'ubuntu';
    }

    if (/linux|cros|x11|fedora|debian|arch/i.test(ua) || platform.includes('linux') || uaData === 'linux') {
        return 'linux';
    }

    return 'unknown';
}

export function resolveCatalogOs(detected: OsType, assumeUbuntuForLinux = true): CatalogOs {
    if (detected === 'windows' || detected === 'macos' || detected === 'ubuntu') {
        return detected;
    }

    if (detected === 'linux' && assumeUbuntuForLinux) {
        return 'ubuntu';
    }

    return 'windows';
}

export function readStoredOsOverride(): CatalogOs | null {
    if (typeof localStorage === 'undefined') {
        return null;
    }

    if (localStorage.getItem(OVERRIDE_KEY) !== '1') {
        return null;
    }

    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'windows' || stored === 'macos' || stored === 'ubuntu') {
        return stored;
    }

    return null;
}

export function storeOsOverride(os: CatalogOs): void {
    localStorage.setItem(STORAGE_KEY, os);
    localStorage.setItem(OVERRIDE_KEY, '1');
}

export function clearOsOverride(): void {
    localStorage.removeItem(OVERRIDE_KEY);
}

export function osLabel(os: CatalogOs | OsType): string {
    switch (os) {
        case 'windows':
            return 'Windows';
        case 'macos':
            return 'macOS';
        case 'ubuntu':
            return 'Ubuntu';
        case 'linux':
            return 'Linux';
        default:
            return 'Unknown';
    }
}

export const OS_OPTIONS: { value: CatalogOs; label: string }[] = [
    { value: 'windows', label: 'Windows' },
    { value: 'macos', label: 'macOS' },
    { value: 'ubuntu', label: 'Ubuntu' },
];
