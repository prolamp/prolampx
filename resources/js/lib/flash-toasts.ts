import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import type { FlashToast } from '@/types/ui';

type SharedFlash = {
    toast?: FlashToast | null;
    success?: string | null;
    error?: string | null;
};

function showFlash(flash: SharedFlash | undefined): void {
    if (!flash) {
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
