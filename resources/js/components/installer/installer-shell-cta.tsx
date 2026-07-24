import { Download } from 'lucide-react';

type Props = {
    onGetInstaller: () => void;
};

export default function InstallerShellCta({ onGetInstaller }: Props) {
    return (
        <section className="px-margin-mobile py-stack-xl">
            <div className="relative mx-auto max-w-container-max overflow-hidden rounded-[40px] bg-primary p-stack-lg text-center md:p-stack-xl dark:border dark:border-border-subtle dark:bg-surface-container">
                <div className="absolute top-0 right-0 -mt-32 -mr-32 size-64 rounded-full bg-secondary-fixed opacity-10 blur-3xl dark:bg-primary dark:opacity-5" />
                <div className="absolute bottom-0 left-0 -mb-32 -ml-32 size-64 rounded-full bg-secondary-fixed opacity-10 blur-3xl dark:bg-primary dark:opacity-5" />
                <h2 className="mx-auto mb-gutter max-w-2xl text-headline-xl-mobile font-extrabold text-primary-foreground md:text-headline-xl dark:text-on-surface">
                    Ready to set up your machine?
                </h2>
                <p className="mx-auto mb-stack-lg max-w-xl text-body-lg text-on-primary-container dark:text-on-surface-variant">
                    Pick your apps below, download one installer, and provision Windows, macOS, or Ubuntu in minutes.
                </p>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={onGetInstaller}
                        className="inline-flex items-center justify-center gap-3 rounded-2xl bg-secondary px-10 py-5 text-label-md font-semibold text-on-secondary shadow-xl transition-all hover:bg-secondary-container active:scale-95 dark:bg-primary dark:text-inverse-surface dark:hover:bg-secondary dark:hover:text-white"
                    >
                        <Download className="size-5" />
                        Get Installer Now
                    </button>
                </div>
            </div>
        </section>
    );
}
