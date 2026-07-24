import { Link, router } from '@inertiajs/react';
import AdSection from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';
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
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

function formatDate(value: string | null) {
    if (!value) {
        return null;
    }
    return new Date(value).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

export default function BlogIndex({ posts, categories, activeCategory, seo }: Props) {
    const [featured, ...rest] = posts.data;

    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} type="website" />
            <div className="mx-auto max-w-container-max px-margin-mobile py-10">
                <div className="mb-8">
                    <h1 className="text-headline-xl-mobile font-extrabold tracking-tight text-primary md:text-headline-xl dark:text-on-surface">
                        Tips, Guides, and Updates
                    </h1>
                    <p className="mt-2 text-body-lg text-on-surface-variant">From the ProLampX team.</p>
                </div>

                {categories.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => router.get('/blog', {}, { preserveState: true })}
                            className={cn(
                                'rounded-full px-4 py-1.5 text-sm font-medium transition',
                                !activeCategory
                                    ? 'bg-primary text-primary-foreground dark:bg-secondary dark:text-on-secondary'
                                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high',
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
                                    activeCategory === category.slug
                                        ? 'bg-primary text-primary-foreground dark:bg-secondary dark:text-on-secondary'
                                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high',
                                )}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                )}

                <div className="lg:grid lg:grid-cols-12 lg:gap-gutter">
                    <div className="lg:col-span-8">
                        {posts.data.length === 0 ? (
                            <div className="rounded-xl border border-border-subtle bg-surface-container-low p-10 text-center text-on-surface-variant">
                                No posts yet.
                            </div>
                        ) : (
                            <div className="grid gap-5 sm:grid-cols-2">
                                {featured && (
                                    <Link
                                        href={`/blog/${featured.slug}`}
                                        className="group overflow-hidden rounded-xl border border-border-subtle bg-surface-container-lowest transition hover:shadow-lg sm:col-span-2 dark:bg-surface-container"
                                    >
                                        {featured.cover_image && (
                                            <div className="aspect-[21/9] overflow-hidden">
                                                <img
                                                    src={featured.cover_image}
                                                    alt=""
                                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="mb-2 flex flex-wrap gap-3 text-xs">
                                                {featured.category && (
                                                    <span className="font-semibold uppercase tracking-wide text-secondary dark:text-primary">
                                                        {featured.category.name}
                                                    </span>
                                                )}
                                                {featured.published_at && (
                                                    <span className="text-on-surface-variant">
                                                        {formatDate(featured.published_at)}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-headline-md font-bold text-primary transition group-hover:text-secondary dark:text-on-surface dark:group-hover:text-primary">
                                                {featured.title}
                                            </h2>
                                            <p className="mt-2 line-clamp-2 text-on-surface-variant">{featured.excerpt}</p>
                                        </div>
                                    </Link>
                                )}

                                {rest.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="group overflow-hidden rounded-xl border border-border-subtle bg-surface-container-lowest transition hover:shadow-lg dark:bg-surface-container"
                                    >
                                        {post.cover_image && (
                                            <div className="aspect-video overflow-hidden">
                                                <img
                                                    src={post.cover_image}
                                                    alt=""
                                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5">
                                            <div className="mb-2 flex flex-wrap gap-3 text-xs">
                                                {post.category && (
                                                    <span className="font-semibold uppercase tracking-wide text-secondary dark:text-primary">
                                                        {post.category.name}
                                                    </span>
                                                )}
                                                {post.published_at && (
                                                    <span className="text-on-surface-variant">
                                                        {formatDate(post.published_at)}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="font-bold text-primary transition group-hover:text-secondary dark:text-on-surface dark:group-hover:text-primary">
                                                {post.title}
                                            </h2>
                                            <p className="mt-2 line-clamp-2 text-sm text-on-surface-variant">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {posts.links.length > 3 && (
                            <div className="mt-8 flex flex-wrap justify-center gap-2">
                                {posts.links.map((link, index) =>
                                    link.url ? (
                                        <Link
                                            key={`${link.label}-${index}`}
                                            href={link.url}
                                            preserveState
                                            className={cn(
                                                'flex size-10 items-center justify-center rounded-full text-sm font-semibold transition',
                                                link.active
                                                    ? 'bg-primary text-primary-foreground dark:bg-secondary dark:text-on-secondary'
                                                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high',
                                            )}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ) : (
                                        <span
                                            key={`${link.label}-${index}`}
                                            className="flex size-10 items-center justify-center rounded-full bg-surface-container text-sm text-on-surface-variant/50"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ),
                                )}
                            </div>
                        )}
                    </div>

                    <aside className="mt-10 space-y-4 lg:col-span-4 lg:mt-0">
                        <div className="rounded-xl border border-border-subtle bg-surface-container-lowest p-5 dark:bg-surface-container">
                            <h3 className="mb-3 text-label-md font-bold uppercase tracking-widest text-primary dark:text-on-surface">
                                Popular tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        type="button"
                                        onClick={() =>
                                            router.get('/blog', { category: category.slug }, { preserveState: true })
                                        }
                                        className="rounded-full bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant transition hover:bg-secondary/10 hover:text-secondary dark:hover:text-primary"
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <AdSection slot="sidebar" variant="sidebar" />
                    </aside>
                </div>
            </div>
        </PublicLayout>
    );
}
