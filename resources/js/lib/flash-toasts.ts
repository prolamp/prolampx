import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import type { FlashToast } from '@/types/ui';

type SharedFlash = {
    toast?: FlashToast | null;
    success?: string | null;
    error?: string | null;
};

let lastShown: { key: string; at: number } | null = null;

function flashKey(flash: SharedFlash): string | null {
    if (flash.toast) {
        return `toast:${flash.toast.type}:${flash.toast.message}`;
    }

    if (flash.success) {
        return `success:${flash.success}`;
    }

    if (flash.error) {
        return `error:${flash.error}`;
    }

    return null;
}

function shouldShow(key: string): boolean {
    const now = Date.now();

    if (lastShown && lastShown.key === key && now - lastShown.at < 750) {
        return false;
    }

    lastShown = { key, at: now };

    return true;
}

function showFlash(flash: SharedFlash | undefined): void {
    if (!flash) {
        return;
    }

    const key = flashKey(flash);

    if (!key || !shouldShow(key)) {
        return;
    }

    if (flash.toast) {
        toast[flash.toast.type](flash.toast.message);
        return;
    }

    if (flash.success) {
        toast.success(flash.success);
    }

    if (flash.error) {
        toast.error(flash.error);
    }
}

let initialized = false;

export function initFlashToasts(): void {
    if (initialized) {
        return;
    }

    initialized = true;

    router.on('flash', (event) => {
        showFlash(event.detail.flash as unknown as SharedFlash);
    });

    router.on('navigate', (event) => {
        showFlash(event.detail.page.props.flash as SharedFlash | undefined);
    });
}
