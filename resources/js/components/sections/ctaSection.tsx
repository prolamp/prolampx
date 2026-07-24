import { Link } from '@inertiajs/react';
import { Mail, Send } from 'lucide-react';

export default function CtaSection() {
    return (
        <>
            <section className="px-margin-mobile py-stack-xl" id="contact">
                <div className="relative mx-auto max-w-container-max overflow-hidden rounded-[40px] bg-primary p-stack-lg text-center shadow-2xl md:p-stack-xl dark:border dark:border-border-subtle dark:bg-surface-container">
                    <div className="absolute top-0 right-0 -mt-32 -mr-32 size-64 rounded-full bg-secondary-fixed opacity-10 blur-3xl dark:bg-primary dark:opacity-5" />
                    <div className="absolute bottom-0 left-0 -mb-32 -ml-32 size-64 rounded-full bg-secondary-fixed opacity-10 blur-3xl dark:bg-primary dark:opacity-5" />
                    <h2 className="mx-auto mb-gutter max-w-2xl text-headline-xl-mobile font-extrabold text-primary-foreground md:text-headline-xl dark:text-on-surface">
                        Ready to build the future?
                    </h2>
                    <p className="mx-auto mb-stack-lg max-w-xl text-body-lg text-on-primary-container dark:text-on-surface-variant">
                        Let&apos;s discuss how our engineering expertise can accelerate your product roadmap and business
                        growth.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-secondary px-10 py-5 text-label-md font-semibold text-on-secondary shadow-xl transition-all hover:bg-secondary-container active:scale-95 dark:bg-primary dark:text-inverse-surface dark:hover:bg-secondary dark:hover:text-white"
                        >
                            <Mail className="size-5" />
                            Contact Sales Team
                        </Link>
                    </div>
                </div>
            </section>

            <div className="fixed bottom-0 z-50 w-full md:hidden">
                <div className="bg-primary shadow-[0px_-4px_20px_rgba(27,54,93,0.12)] dark:border-t dark:border-border-subtle dark:bg-surface-container-high dark:shadow-[0px_-4px_20px_rgba(0,0,0,0.4)]">
                    <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter py-4">
                        <Link
                            href="/contact"
                            className="flex flex-grow items-center justify-center gap-3 rounded-lg bg-secondary px-6 py-3 font-bold text-on-secondary transition-all active:scale-[0.98] dark:bg-primary dark:text-inverse-surface"
                        >
                            <Send className="size-5" />
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
