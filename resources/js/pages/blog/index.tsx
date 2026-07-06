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
                <div className="mb-6 flex flex-wrap gap-2">
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
                <div className="space-y-4">
                    {posts.data.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <PublicCard className="block p-6">
                                {post.category && (
                                    <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{post.category.name}</span>
                                )}
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                            </PublicCard>
                        </Link>
                    ))}
                </div>
            </ContentWithSidebarAd>
        </PublicLayout>
    );
}
