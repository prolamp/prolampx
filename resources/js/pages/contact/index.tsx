import { Mail, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import SeoHead from '@/components/seo-head';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';

type Props = {
    contactEmail: string | null;
    seo: { title: string; description: string };
};

export default function ContactIndex({ contactEmail, seo }: Props) {
    return (
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} type="website" />
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact us</h1>
                    <p className="mt-3 text-muted-foreground">
                        Questions, feedback, or privacy requests? Send us a message and we&apos;ll respond as soon as we can.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                    <PublicCard className="h-fit p-6">
                        <h2 className="public-heading-accent text-lg font-semibold">How we can help</h2>
                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-3">
                                <MessageSquare className="public-accent-text mt-0.5 size-4 shrink-0" />
                                General support and product questions
                            </li>
                            <li className="flex gap-3">
                                <Mail className="public-accent-text mt-0.5 size-4 shrink-0" />
                                Privacy, legal, and data requests
                            </li>
                        </ul>
                        {contactEmail && (
                            <p className="mt-6 text-sm text-muted-foreground">
                                You can also email us at{' '}
                                <a href={`mailto:${contactEmail}`} className="public-accent-link">
                                    {contactEmail}
                                </a>
                                .
                            </p>
                        )}
                    </PublicCard>

                    <PublicCard className="p-6 sm:p-8">
                        <ContactForm />
                    </PublicCard>
                </div>
            </div>
        </PublicLayout>
    );
}
