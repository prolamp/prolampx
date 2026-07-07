import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Package } from 'lucide-react';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';
import { Button } from '@/components/ui/button';

type Bundle = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    is_featured: boolean;
    software_count: number;
    software: { id: number; name: string; slug: string; icon: string | null }[];
};

type Props = {
    bundles: Bundle[];
    seo: { title: string; description: string };
};

export default function BundlesIndex({ bundles, seo }: Props) {
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;

    useCatalogSync({
        version: catalogVersion,
        reloadProps: ['bundles'],
    });

    return (
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} />
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Bundles</h1>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                    Curated groups of apps — like Ninite bundles. Pick one and jump straight to the installer with everything pre-selected.
                </p>
            </div>

            {bundles.length === 0 ? (
                <PublicCard className="p-10 text-center text-muted-foreground">
                    No bundles available yet. Check back soon or build your own on the installer page.
                </PublicCard>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {bundles.map((bundle) => (
                        <PublicCard key={bundle.id} className="flex flex-col p-6">
                            <div className="flex items-center gap-2">
                                <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                                    <Package className="size-4" />
                                </span>
                                <div>
                                    <h2 className="font-semibold">{bundle.name}</h2>
                                    <p className="text-xs text-muted-foreground">{bundle.software_count} apps</p>
                                </div>
                            </div>
                            {bundle.description && (
                                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{bundle.description}</p>
                            )}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {bundle.software.map((app) => (
                                    <SoftwareIcon key={app.id} name={app.name} icon={app.icon} slug={app.slug} size="sm" />
                                ))}
                            </div>
                            <div className="mt-auto flex gap-2 pt-6">
                                <Button asChild variant="outline" size="sm" className="flex-1">
                                    <Link href={`/bundles/${bundle.slug}`}>View apps</Link>
                                </Button>
                                <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600">
                                    <Link href={`/installer?bundle=${bundle.slug}`} preserveScroll={false}>
                                        Use bundle
                                        <ArrowRight className="size-3.5" />
                                    </Link>
                                </Button>
                            </div>
                        </PublicCard>
                    ))}
                </div>
            )}
        </PublicLayout>
    );
}
