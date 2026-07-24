import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    page: { title: string; body: string };
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

export default function PageShow({ page, seo }: Props) {
    return (
        <PublicLayout>
            <SeoHead {...seo} />
            <article className="glass-panel rounded-xl p-8">
                <h1 className="text-3xl font-bold">{page.title}</h1>
                <div className="public-prose mt-6" dangerouslySetInnerHTML={{ __html: page.body }} />
            </article>
        </PublicLayout>
    );
}
