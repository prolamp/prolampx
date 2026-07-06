import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Package } from 'lucide-react';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import { useCatalogSync } from '@/hooks/use-catalog-sync';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';
import { Button } from '@/components/ui/button';

type Software = {
    id: number;
    name: string;
    slug: string;
    icon: string | null;
    description: string | null;
    license_type: string | null;
    category: string | null;
};

type Bundle = {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    software_count: number;
    software: Software[];
};

type Props = {
    bundle: Bundle;
    seo: { title: string; description: string };
};

export default function BundlesShow({ bundle, seo }: Props) {
    const { catalogVersion = 1 } = usePage<{ catalogVersion: number }>().props;

    useCatalogSync({
        version: catalogVersion,
        reloadProps: ['bundle'],
    });

    return (
        <PublicLayout>
            <SeoHead title={seo.title} description={seo.description} />
            <Link href="/bundles" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                ← All bundles
            </Link>

            <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30">
                        <Package className="size-6" />
                    </span>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{bundle.name}</h1>
                        {bundle.description && (
                            <p className="mt-2 max-w-2xl text-muted-foreground">{bundle.description}</p>
                        )}
                        <p className="mt-2 text-sm text-muted-foreground">
                            {bundle.software_count} app{bundle.software_count !== 1 ? 's' : ''} included
                        </p>
                    </div>
                </div>
                <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-600/25">
                    <Link href={`/installer?bundle=${bundle.slug}`} preserveScroll={false}>
                        Use this bundle
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
            </div>

            <PublicCard className="mt-8 p-6">
                <h2 className="mb-4 text-lg font-semibold">Included software</h2>
                <ul className="divide-y">
                    {bundle.software.map((app) => (
                        <li key={app.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                            <SoftwareIcon name={app.name} icon={app.icon} slug={app.slug} />
                            <div className="min-w-0 flex-1">
                                <Link href={`/software/${app.slug}`} className="font-semibold hover:text-indigo-600">
                                    {app.name}
                                </Link>
                                {app.description && (
                                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{app.description}</p>
                                )}
                                {app.license_type && (
                                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                        {app.license_type}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </PublicCard>
        </PublicLayout>
    );
}
