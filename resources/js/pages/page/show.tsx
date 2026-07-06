import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    page: { title: string; body: string };
    seo: { title: string; description?: string };
};

export default function PageShow({ page, seo }: Props) {
    return (
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} />
            <article className="rounded-xl border border-zinc-200 bg-white p-8">
                <h1 className="text-3xl font-bold">{page.title}</h1>
                <div className="prose mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: page.body }} />
            </article>
        </PublicLayout>
    );
}
