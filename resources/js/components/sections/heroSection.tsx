import { Link } from '@inertiajs/react';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <header className="relative overflow-hidden pb-20 pt-12 md:pb-stack-xl md:pt-20">
            <div className="software-grid-pattern absolute inset-0 -z-10 opacity-50 dark:opacity-30" />
            <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-gutter px-margin-mobile lg:grid-cols-2">
                <div className="z-10 flex flex-col gap-stack-md text-center lg:text-left">
                    <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-secondary-fixed px-4 py-1 text-on-secondary-fixed dark:border dark:border-primary/20 dark:bg-primary-container/40 dark:text-primary lg:mx-0">
                        <Sparkles className="size-[18px]" />
                        <span className="text-label-sm font-bold uppercase tracking-wider">Digital Product Excellence</span>
                    </div>
                    <h1 className="text-headline-xl-mobile font-extrabold leading-tight tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                        Architecting the digital future of global industry.
                    </h1>
                    <p className="mx-auto max-w-xl text-body-lg text-on-surface-variant lg:mx-0">
                        ProLampX is a premium software agency specializing in high-performance ecosystem engineering. We
                        partner with innovators to build scalable, secure, and mission-critical digital products.
                    </p>
                    <div className="mt-stack-md flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-primary px-8 py-4 text-center text-label-md font-semibold text-primary-foreground shadow-lg transition-all hover:bg-secondary hover:text-on-secondary active:scale-95"
                        >
                            Build with Us
                        </Link>
                        <a
                            href="#services"
                            className="rounded-xl border border-border-subtle bg-surface-container-lowest px-8 py-4 text-center text-label-md font-semibold text-primary transition-all hover:bg-surface-container-low active:scale-95 dark:bg-surface-container-high dark:text-on-surface dark:hover:bg-surface-container"
                        >
                            Our Expertise
                        </a>
                    </div>
                </div>

                <div className="group relative z-0">
                    <div className="absolute -inset-4 rounded-[40px] bg-primary-container/5 blur-3xl transition-colors duration-700 group-hover:bg-primary-container/10" />
                    <div className="animate-float relative flex aspect-video flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface-container-lowest shadow-2xl">
                        <div className="flex h-10 items-center gap-1.5 border-b border-border-subtle bg-surface-container px-4">
                            <div className="size-2.5 rounded-full bg-destructive/40" />
                            <div className="size-2.5 rounded-full bg-secondary-fixed-dim" />
                            <div className="size-2.5 rounded-full bg-surface-dim" />
                            <div className="flex flex-grow justify-center">
                                <div className="rounded-md bg-surface-container-lowest/50 px-3 py-0.5 text-[10px] font-medium text-on-surface-variant">
                                    agency-cloud-console.io
                                </div>
                            </div>
                        </div>
                        <div className="grid h-full grid-cols-12 gap-4 bg-surface-container-lowest p-gutter">
                            <div className="col-span-3 flex flex-col gap-4 border-r border-border-subtle pr-4">
                                <div className="h-4 w-full rounded bg-surface-container" />
                                <div className="h-4 w-3/4 rounded bg-surface-container-low" />
                                <div className="h-4 w-5/6 rounded bg-surface-container-low" />
                                <div className="mt-auto h-8 w-full rounded bg-primary/10" />
                            </div>
                            <div className="col-span-9 flex flex-col gap-4">
                                <div className="flex h-12 w-full items-center rounded-lg bg-secondary-container/10 px-4">
                                    <div className="h-4 w-1/3 rounded bg-secondary/20" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-32 rounded-xl border border-border-subtle bg-surface-container" />
                                    <div className="h-32 rounded-xl border border-border-subtle bg-surface-container" />
                                </div>
                                <div className="mt-auto flex justify-end">
                                    <div className="h-8 w-24 rounded bg-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
