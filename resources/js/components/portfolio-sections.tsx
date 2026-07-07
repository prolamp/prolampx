import { Link } from '@inertiajs/react';
import { ArrowRight, Layers, Monitor, Zap } from 'lucide-react';
import type { ReactNode } from 'react';
import SoftwareIcon from '@/components/software-icon';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type PortfolioSection = {
    id: number;
    type: string;
    title: string | null;
    subtitle: string | null;
    body: string | null;
    image: string | null;
    settings: Record<string, unknown>;
};

type BlogPost = {
    id: number;
    title: string;
    slug: string;
    cover_image: string | null;
    published_at: string | null;
    meta_description: string | null;
    category: { name: string; slug: string } | null;
};

type SoftwareItem = {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
};

const iconMap: Record<string, typeof Zap> = {
    zap: Zap,
    monitor: Monitor,
    layers: Layers,
};

function SectionShell({ children, className }: { children: ReactNode; className?: string }) {
    return <section className={cn('mt-12', className)}>{children}</section>;
}

export function renderPortfolioSection(
    section: PortfolioSection,
    extras?: { latestPosts?: BlogPost[]; featuredSoftware?: SoftwareItem[]; selectedOs?: string },
): ReactNode {
    const settings = section.settings ?? {};

    switch (section.type) {
        case 'hero':
            return (
                <section key={section.id} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-8 text-white shadow-2xl shadow-indigo-600/30 md:p-12">
                    <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/10 blur-3xl" />
                    <div className="relative max-w-2xl">
                        {section.title && <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{section.title}</h1>}
                        {section.subtitle && <p className="mt-4 text-lg text-indigo-100/90">{section.subtitle}</p>}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {Boolean(settings.cta_text && settings.cta_url) && (
                                <Button asChild size="lg" className="bg-white text-indigo-700 shadow-lg hover:bg-indigo-50">
                                    <Link href={String(settings.cta_url)}>
                                        {String(settings.cta_text)}
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                            )}
                            {Boolean(settings.secondary_cta_text && settings.secondary_cta_url) && (
                                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                                    <Link href={String(settings.secondary_cta_url)}>{String(settings.secondary_cta_text)}</Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </section>
            );

        case 'about':
            return (
                <SectionShell key={section.id}>
                    {section.title && <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>}
                    {section.body && (
                        <div
                            className="prose prose-indigo mt-4 max-w-3xl text-muted-foreground dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: section.body }}
                        />
                    )}
                </SectionShell>
            );

        case 'features': {
            const items = (settings.items as { title: string; description: string; icon?: string }[]) ?? [];
            return (
                <SectionShell key={section.id}>
                    {section.title && <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((item) => {
                            const Icon = iconMap[item.icon ?? ''] ?? Zap;
                            return (
                                <PublicCard key={item.title} className="p-5">
                                    <Icon className="public-accent-text size-5" />
                                    <h3 className="mt-3 font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                </PublicCard>
                            );
                        })}
                    </div>
                </SectionShell>
            );
        }

        case 'projects': {
            const items = (settings.items as { title: string; description: string; image?: string | null; url?: string }[]) ?? [];
            return (
                <SectionShell key={section.id}>
                    {section.title && <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>}
                    {section.subtitle && <p className="mt-1 text-sm text-muted-foreground">{section.subtitle}</p>}
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {items.map((item) => (
                            <PublicCard key={item.title} className="overflow-hidden p-0">
                                {item.image && <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />}
                                <div className="p-5">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                    {item.url && (
                                        <Link href={item.url} className="public-accent-link mt-3 inline-flex text-sm">
                                            Learn more <ArrowRight className="ml-1 inline size-3.5" />
                                        </Link>
                                    )}
                                </div>
                            </PublicCard>
                        ))}
                    </div>
                </SectionShell>
            );
        }

        case 'text':
            return (
                <SectionShell key={section.id}>
                    {section.title && <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>}
                    {section.body && (
                        <div className="public-prose mt-4 max-w-3xl" dangerouslySetInnerHTML={{ __html: section.body }} />
                    )}
                </SectionShell>
            );

        case 'cta':
            return (
                <SectionShell key={section.id}>
                    <PublicCard className="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white">
                        {section.title && <h2 className="text-2xl font-bold">{section.title}</h2>}
                        {section.subtitle && <p className="mt-2 text-indigo-100">{section.subtitle}</p>}
                        {Boolean(settings.cta_text && settings.cta_url) && (
                            <Button asChild size="lg" className="mt-6 bg-white text-indigo-700 hover:bg-indigo-50">
                                <Link href={String(settings.cta_url)}>{String(settings.cta_text)}</Link>
                            </Button>
                        )}
                    </PublicCard>
                </SectionShell>
            );

        case 'contact':
            return (
                <SectionShell key={section.id}>
                    {section.title && <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>}
                    {section.body && (
                        <div className="public-prose mt-4 max-w-xl" dangerouslySetInnerHTML={{ __html: section.body }} />
                    )}
                </SectionShell>
            );

        default:
            return null;
    }
}

export function BlogPreviewSection({ posts }: { posts: BlogPost[] }) {
    if (posts.length === 0) {
        return null;
    }

    return (
        <SectionShell>
            <div className="mb-4 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight">Latest from the blog</h2>
                <Link href="/blog" className="public-accent-link text-sm">View all</Link>
            </div>
            <div className="space-y-3">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                        <PublicCard className="block p-5">
                            {post.category && (
                                <span className="public-accent-text text-xs font-semibold uppercase tracking-wide">{post.category.name}</span>
                            )}
                            <h3 className="font-semibold">{post.title}</h3>
                            {post.meta_description && (
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.meta_description}</p>
                            )}
                        </PublicCard>
                    </Link>
                ))}
            </div>
        </SectionShell>
    );
}

export function SoftwarePreviewSection({ items }: { items: SoftwareItem[] }) {
    if (items.length === 0) {
        return null;
    }

    return (
        <SectionShell>
            <div className="mb-4 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight">Featured software</h2>
                <Link href="/software" className="public-accent-link text-sm">View all</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                    <Link key={item.id} href={`/software/${item.slug}`}>
                        <PublicCard className="flex items-center gap-3 p-4">
                            <SoftwareIcon name={item.name} icon={item.icon} slug={item.slug} />
                            <span className="font-semibold">{item.name}</span>
                        </PublicCard>
                    </Link>
                ))}
            </div>
        </SectionShell>
    );
}
