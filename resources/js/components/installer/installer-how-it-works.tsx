import { CheckSquare, Download, Monitor } from 'lucide-react';

const steps = [
    {
        icon: Monitor,
        title: '1. Detect OS',
        body: 'Our system automatically identifies your OS to serve compatible software versions for your machine.',
        wrap: 'bg-secondary-fixed text-secondary dark:bg-primary/10 dark:text-primary',
    },
    {
        icon: CheckSquare,
        title: '2. Pick Apps',
        body: 'Select browsers, dev tools, and utilities from our curated library of safe software packages.',
        wrap: 'bg-primary-container text-on-primary-container',
    },
    {
        icon: Download,
        title: '3. Download & Run',
        body: 'One tiny setup file downloads and installs everything in the background while you focus on work.',
        wrap: 'bg-secondary text-on-secondary',
    },
];

export default function InstallerHowItWorks() {
    return (
        <section className="bg-surface-container-lowest py-stack-xl dark:bg-surface">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <div className="mx-auto mb-stack-xl max-w-2xl text-center">
                    <h2 className="mb-4 text-headline-lg font-bold text-primary dark:text-on-surface">
                        Streamlined Software Setup
                    </h2>
                    <p className="text-body-md text-on-surface-variant">
                        Three simple steps to a fully functional workspace, no matter which operating system you use.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
                    {steps.map(({ icon: Icon, title, body, wrap }, index) => (
                        <div key={title} className="relative flex flex-col items-center p-gutter text-center">
                            {index < steps.length - 1 && (
                                <div className="absolute top-12 left-[calc(100%-12px)] z-0 hidden h-px w-full border-t border-dashed border-border-subtle md:block" />
                            )}
                            <div
                                className={`z-10 mb-stack-md flex size-16 items-center justify-center rounded-2xl ${wrap}`}
                            >
                                <Icon className="size-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-2 text-headline-md font-bold text-primary dark:text-on-surface">{title}</h3>
                            <p className="text-body-md leading-relaxed text-on-surface-variant">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
