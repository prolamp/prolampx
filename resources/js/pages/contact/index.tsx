import { Mail, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    contactEmail: string | null;
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

export default function ContactIndex({ contactEmail, seo }: Props) {
    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} type="website" />
            <div className="mx-auto max-w-container-max px-margin-mobile py-12">
                <div className="mb-10 max-w-3xl">
                    <h1 className="text-headline-xl-mobile font-extrabold tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                        Let&apos;s build something great together.
                    </h1>
                    <p className="mt-3 text-body-lg text-on-surface-variant">
                        Questions, feedback, or privacy requests? Send us a message and we&apos;ll respond as soon as we
                        can.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-12">
                    <div className="rounded-xl border border-border-subtle bg-surface-container-lowest p-6 sm:p-8 lg:col-span-7 dark:bg-surface-container">
                        <ContactForm />
                    </div>

                    <aside className="space-y-4 lg:col-span-5">
                        <div className="rounded-xl border border-border-subtle bg-primary p-6 text-primary-foreground dark:bg-surface-container-high dark:text-on-surface">
                            <h2 className="text-lg font-bold">How we can help</h2>
                            <ul className="mt-4 space-y-3 text-sm opacity-90">
                                <li className="flex gap-3">
                                    <MessageSquare className="mt-0.5 size-4 shrink-0" />
                                    General support and product questions
                                </li>
                                <li className="flex gap-3">
                                    <Mail className="mt-0.5 size-4 shrink-0" />
                                    Privacy, legal, and data requests
                                </li>
                            </ul>
                            {contactEmail && (
                                <p className="mt-6 text-sm opacity-90">
                                    Email us at{' '}
                                    <a href={`mailto:${contactEmail}`} className="font-semibold underline">
                                        {contactEmail}
                                    </a>
                                    .
                                </p>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </PublicLayout>
    );
}
