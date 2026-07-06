import { Link, usePage } from '@inertiajs/react';
import AdSection from '@/components/ad-section';
import { BlogPreviewSection, renderPortfolioSection, SoftwarePreviewSection } from '@/components/portfolio-sections';
import SeoHead from '@/components/seo-head';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import PublicLayout from '@/layouts/public-layout';

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

type Section = {
    id: number;
    type: string;
    title: string | null;
    subtitle: string | null;
    body: string | null;
    image: string | null;
    settings: Record<string, unknown>;
};

type Props = {
    selectedOs: string;
    catalogVersion?: number;
    sections: Section[];
    featuredSoftware: SoftwareItem[];
    latestPosts: BlogPost[];
    seo: { title: string; description: string };
};

export default function Home({
    selectedOs,
    sections = [],
    featuredSoftware = [],
    latestPosts = [],
    seo,
}: Props) {
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;

    useCatalogSync({
        version: catalogVersion,
        reloadProps: ['featuredSoftware', 'sections'],
    });

    const hasBlogSection = sections.some((s) => s.type === 'blog');
    const hasSoftwareSection = sections.some((s) => s.type === 'software');

    return (
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} />
            {sections.length > 0 ? (
                sections.map((section) => renderPortfolioSection(section, { latestPosts, featuredSoftware, selectedOs }))
            ) : (
                <p className="text-muted-foreground">No homepage sections published yet. Add sections in the admin panel.</p>
            )}

            {!hasSoftwareSection && <SoftwarePreviewSection items={featuredSoftware} />}
            {!hasBlogSection && <BlogPreviewSection posts={latestPosts} />}

            <AdSection slot="content" variant="banner" className="mt-12" />
        </PublicLayout>
    );
}
