import { Apple, Check, Monitor, Sparkles, Terminal } from 'lucide-react';

type InstallerHeroProps = {
    onGetInstaller: () => void;
};

export default function InstallerHero({ onGetInstaller }: InstallerHeroProps) {
    return (
        <header className="relative overflow-hidden pb-16 pt-8 md:pb-stack-xl md:pt-16">
            <div className="software-grid-pattern absolute inset-0 -z-10 opacity-50 dark:opacity-30" />
            <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile lg:grid-cols-2">
                <div className="z-10 flex flex-col gap-stack-md text-center lg:text-left">
                    <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-secondary-fixed px-4 py-1 text-on-secondary-fixed dark:border dark:border-primary/20 dark:bg-primary-container/40 dark:text-primary lg:mx-0">
                        <Sparkles className="size-[18px]" />
                        <span className="text-label-sm font-bold uppercase tracking-wider">
                            Now supporting Ubuntu 24.04
                        </span>
                    </div>
                    <h1 className="text-headline-xl-mobile font-extrabold leading-tight tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                        Install Software for Windows, macOS &amp; Ubuntu
                    </h1>
                    <p className="mx-auto max-w-xl text-body-lg text-on-surface-variant lg:mx-0">
                        Skip the tedious individual downloads. Pick your essential apps, get one universal installer, and
                        set up your entire environment in minutes.
                    </p>
                    <div className="mt-stack-md flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <button
                            type="button"
                            onClick={onGetInstaller}
                            className="rounded-xl bg-primary px-8 py-4 text-center text-label-md font-semibold text-primary-foreground shadow-lg transition-all hover:bg-secondary hover:text-on-secondary active:scale-95 dark:text-inverse-surface"
                        >
                            Get Installer
                        </button>
                        <a
                            href="/software"
                            className="rounded-xl border border-border-subtle bg-surface-container-lowest px-8 py-4 text-center text-label-md font-semibold text-primary transition-all hover:bg-surface-container-low active:scale-95 dark:bg-surface-container-high dark:text-on-surface dark:hover:bg-surface-container"
                        >
                            Browse Software
                        </a>
                    </div>
                    <div className="mt-stack-lg flex flex-wrap items-center justify-center gap-3 opacity-80 transition-all duration-500 hover:opacity-100 lg:justify-start">
                        <div className="flex items-center gap-2 rounded-lg border border-os-windows/20 bg-os-windows/10 px-3 py-1.5 text-os-windows">
                            <Monitor className="size-5" />
                            <span className="text-label-md font-semibold">Windows</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-black/20 bg-black/10 px-3 py-1.5 text-os-macos dark:border-white/20 dark:bg-white/10 dark:text-on-surface">
                            <Apple className="size-5" />
                            <span className="text-label-md font-semibold">macOS</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-os-ubuntu/20 bg-os-ubuntu/10 px-3 py-1.5 text-os-ubuntu">
                            <Terminal className="size-5" />
                            <span className="text-label-md font-semibold">Ubuntu</span>
                        </div>
                    </div>
                </div>

                <div className="group relative z-0">
                    <div className="absolute -inset-4 rounded-[40px] bg-primary-container/5 blur-3xl transition-colors duration-700 group-hover:bg-primary-container/10" />
                    <div className="animate-float relative flex aspect-[4/3] flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-container-lowest shadow-2xl dark:bg-surface-container-high">
                        <div className="flex h-10 items-center gap-1.5 border-b border-border-subtle bg-surface-container px-4 dark:bg-surface-container-highest">
                            <div className="size-2.5 rounded-full bg-destructive/40" />
                            <div className="size-2.5 rounded-full bg-secondary-fixed-dim" />
                            <div className="size-2.5 rounded-full bg-surface-dim" />
                            <div className="flex flex-grow justify-center">
                                <div className="rounded-md bg-surface-container-lowest/50 px-3 py-0.5 text-[10px] font-medium text-on-surface-variant">
                                    prolampx-setup
                                </div>
                            </div>
                        </div>
                        <div className="flex h-full flex-col gap-stack-md bg-surface-container-lowest p-gutter dark:bg-surface-container">
                            <div className="flex items-center justify-between">
                                <div className="h-6 w-32 rounded bg-surface-container" />
                                <div className="h-4 w-16 rounded bg-surface-container-low" />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="flex aspect-square items-center justify-center rounded-xl border border-border-subtle bg-surface-container-low">
                                    <div className="size-8 rounded-lg border border-secondary/30 bg-secondary/20" />
                                </div>
                                <div className="relative flex aspect-square items-center justify-center rounded-xl border border-secondary bg-surface-container">
                                    <div className="size-8 rounded-lg bg-secondary" />
                                    <div className="absolute -top-2 -right-2 rounded-full bg-secondary p-0.5 text-white">
                                        <Check className="size-3.5" />
                                    </div>
                                </div>
                                <div className="flex aspect-square items-center justify-center rounded-xl border border-border-subtle bg-surface-container-low">
                                    <div className="size-8 rounded-lg bg-primary/20" />
                                </div>
                                <div className="relative flex aspect-square items-center justify-center rounded-xl border border-secondary bg-surface-container">
                                    <div className="size-8 rounded-lg bg-os-ubuntu/80" />
                                    <div className="absolute -top-2 -right-2 rounded-full bg-secondary p-0.5 text-white">
                                        <Check className="size-3.5" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto flex items-center justify-between border-t border-border-subtle pt-gutter">
                                <div className="flex flex-col gap-1">
                                    <div className="h-3 w-24 rounded bg-surface-container" />
                                    <div className="h-4 w-40 rounded bg-surface-container-high" />
                                </div>
                                <div className="h-10 w-32 rounded-lg bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
