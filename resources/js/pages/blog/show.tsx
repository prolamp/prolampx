import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { ContentWithSidebarAd } from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    post: {
        title: string;
        slug: string;
        body: string;
        cover_image: string | null;
        published_at: string | null;
        meta_description?: string | null;
        category: { name: string; slug: string } | null;
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
    const excerpt = post.meta_description || seo.description;

    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} type="article" />

            <div className="mx-auto max-w-container-max px-margin-mobile pb-stack-xl pt-8 md:pt-12">
                <div className="mb-stack-md">
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-2 text-label-md font-semibold text-secondary transition-colors hover:text-secondary-container dark:text-primary dark:hover:text-primary-fixed"
                    >
                        <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" strokeWidth={1.75} />
                        Back to Blog
                    </Link>
                </div>

                <ContentWithSidebarAd>
                    <article className="min-w-0">
                        <header className="mb-stack-lg">
                            <div className="mb-4 flex flex-wrap items-center gap-3">
                                {post.category && (
                                    <span className="rounded-full bg-secondary-fixed px-3 py-1 text-label-sm font-bold uppercase tracking-wider text-on-secondary-fixed-variant dark:bg-primary/15 dark:text-primary">
                                        {post.category.name}
                                    </span>
                                )}
                                {post.published_at && (
                                    <time
                                        dateTime={post.published_at}
                                        className="text-label-md text-on-surface-variant"
                                    >
                                        {new Date(post.published_at).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                )}
                            </div>

                            <h1 className="mb-stack-md text-headline-xl-mobile font-extrabold leading-tight tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                                {post.title}
                            </h1>

                            {excerpt && (
                                <p className="mb-stack-lg text-body-lg leading-relaxed text-on-surface-variant">
                                    {excerpt}
                                </p>
                            )}

                            {post.cover_image && (
                                <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border-subtle shadow-sm">
                                    <img
                                        src={post.cover_image}
                                        alt=""
                                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            )}
                        </header>

                        <div className="article-content public-prose text-body-md leading-relaxed text-on-surface lg:pr-stack-lg">
                            <div dangerouslySetInnerHTML={{ __html: post.body }} />
                        </div>
                    </article>
                </ContentWithSidebarAd>
            </div>
        </PublicLayout>
    );
}
