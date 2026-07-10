import { Link, router } from '@inertiajs/react';
import { ContentWithSidebarAd } from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';
import { cn } from '@/lib/utils';

type Post = {
    id: number;
    title: string;
    slug: string;
    cover_image: string | null;
    published_at: string | null;
    excerpt: string;
    category: { name: string; slug: string } | null;
};

type Category = { id: number; name: string; slug: string };

type Props = {
    posts: {
        data: Post[];
        links: { url: string | null; label: string; active: boolean }[];
    };
    categories: Category[];
    activeCategory: string | null;
    seo: { title: string; description: string };
};

export default function BlogIndex({ posts, categories, activeCategory, seo }: Props) {
    return (
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} type="website" />
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
                <p className="mt-2 text-muted-foreground">Tips, guides, and updates from ProLampX.</p>
            </div>

            {categories.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={() => router.get('/blog', {}, { preserveState: true })}
                        className={cn(
                            'rounded-full px-4 py-1.5 text-sm font-medium transition',
                            !activeCategory ? 'bg-indigo-600 text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80',
                        )}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => router.get('/blog', { category: category.slug }, { preserveState: true })}
                            className={cn(
                                'rounded-full px-4 py-1.5 text-sm font-medium transition',
                                activeCategory === category.slug ? 'bg-indigo-600 text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80',
                            )}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            )}

            <ContentWithSidebarAd>
                <ul className="flex flex-col gap-5">
                    {posts.data.map((post) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.slug}`} className="group block">
                                <PublicCard className="overflow-hidden transition hover:translate-y-0 hover:shadow-lg">
                                    <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-stretch sm:p-5">
                                        {post.cover_image && (
                                            <div className="shrink-0 overflow-hidden rounded-lg border border-border/60 sm:w-44">
                                                <img
                                                    src={post.cover_image}
                                                    alt=""
                                                    className="h-36 w-full object-cover object-top sm:h-full sm:min-h-[7.5rem]"
                                                />
                                            </div>
                                        )}
                                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                                {post.category && (
                                                    <span className="public-accent-text text-xs font-semibold uppercase tracking-wide">
                                                        {post.category.name}
                                                    </span>
                                                )}
                                                {post.published_at && (
                                                    <span className="text-xs text-muted-foreground">
                                                        {new Date(post.published_at).toLocaleDateString(undefined, {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric',
                                                        })}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="mt-1.5 text-lg font-semibold leading-snug group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                                                {post.title}
                                            </h2>
                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </PublicCard>
                            </Link>
                        </li>
                    ))}
                </ul>
            </ContentWithSidebarAd>
        </PublicLayout>
    );
}
