import { Link } from '@inertiajs/react';
import { ContentWithSidebarAd } from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';
import { PublicCard } from '@/layouts/public-layout';

type Props = {
    post: {
        title: string;
        slug: string;
        body: string;
        cover_image: string | null;
        published_at: string | null;
    };
    seo: {
        title: string;
        description?: string;
        keywords?: string;
        image?: string | null;
        canonical?: string | null;
        type?: 'article';
    };
};

export default function BlogShow({ post, seo }: Props) {
    return (
        <PublicLayout>
            <SeoHead {...seo} type="article" />
            <ContentWithSidebarAd>
                <article>
                    <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        ← Back to blog
                    </Link>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight">{post.title}</h1>
                    {post.published_at && (
                        <p className="mt-2 text-sm text-muted-foreground">
                            {new Date(post.published_at).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    )}
                    <PublicCard className="prose prose-indigo mt-8 max-w-none p-8">
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                    </PublicCard>
                </article>
            </ContentWithSidebarAd>
        </PublicLayout>
    );
}
