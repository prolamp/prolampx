import { Monitor, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { clearOsOverride, osLabel, type CatalogOs, type OsType } from '@/lib/detect-os';

type OsBannerProps = {
    detectedOs: OsType;
    activeOs: CatalogOs;
    isOverridden: boolean;
    onResetDetection: () => void;
    className?: string;
};

export default function OsBanner({ detectedOs, activeOs, isOverridden, onResetDetection, className }: OsBannerProps) {
    const showLinuxHint = detectedOs === 'linux' && !isOverridden;

    return (
        <div
            className={cn(
                'flex flex-wrap items-center gap-3 rounded-2xl border border-indigo-200/60 bg-gradient-to-r from-indigo-50 to-violet-50 px-4 py-3 dark:border-indigo-500/20 dark:from-indigo-950/40 dark:to-violet-950/40',
                className,
            )}
        >
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
                <Monitor className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-indigo-950 dark:text-indigo-100">
                    Showing apps for {osLabel(activeOs)}
                </p>
                <p className="text-xs text-indigo-700/80 dark:text-indigo-300/80">
                    {isOverridden
                        ? 'You manually selected this OS.'
                        : `Auto-detected from your browser${detectedOs !== activeOs && detectedOs === 'linux' ? ' (Linux → Ubuntu packages)' : ''}.`}
                </p>
                {showLinuxHint && (
                    <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
                        Linux detected — defaulting to Ubuntu. Use the OS switcher if you need Windows or macOS apps.
                    </p>
                )}
            </div>
            {isOverridden && (
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-indigo-200 bg-white/80"
                    onClick={() => {
                        clearOsOverride();
                        onResetDetection();
                    }}
                >
                    <RefreshCw className="mr-1.5 size-3.5" />
                    Re-detect
                </Button>
            )}
        </div>
    );
}
