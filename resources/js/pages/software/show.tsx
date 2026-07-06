import { Link } from '@inertiajs/react';
import { ContentWithSidebarAd } from '@/components/ad-section';
import SeoHead from '@/components/seo-head';
import SoftwareIcon from '@/components/software-icon';
import PublicLayout, { PublicCard } from '@/layouts/public-layout';
import { Button } from '@/components/ui/button';

type Props = {
    software: {
        name: string;
        slug: string;
        icon: string | null;
        category: string;
        license_type: string;
        description: string | null;
        latest_version: string | null;
        install_commands: { os: string; package_manager: string; command: string }[];
    };
    seo: {
        title: string;
        description?: string;
        keywords?: string;
        image?: string | null;
        type?: 'software';
    };
};

export default function SoftwareShow({ software, seo }: Props) {
    return (
        <PublicLayout>
            <SeoHead {...seo} type="software" />
            <ContentWithSidebarAd>
                <PublicCard className="p-8">
                    <div className="flex items-start gap-4">
                        <SoftwareIcon name={software.name} icon={software.icon} slug={software.slug} size="lg" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                                {software.category.replace('-', ' ')}
                            </p>
                            <h1 className="mt-1 text-4xl font-bold tracking-tight">{software.name}</h1>
                            {software.latest_version && (
                                <p className="mt-2 text-sm text-muted-foreground">Latest version: {software.latest_version}</p>
                            )}
                        </div>
                    </div>
                    {software.description && (
                        <p className="mt-6 leading-relaxed text-muted-foreground">{software.description}</p>
                    )}
                    <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-600/25">
                        <Link href="/installer">Add to installer</Link>
                    </Button>
                    <div className="mt-10 border-t pt-6">
                        <h2 className="font-semibold">Available on</h2>
                        <ul className="mt-3 space-y-2">
                            {software.install_commands.map((cmd) => (
                                <li key={cmd.os} className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm capitalize">
                                    <span className="font-medium">{cmd.os}</span>
                                    <span className="text-muted-foreground">· {cmd.package_manager}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </PublicCard>
            </ContentWithSidebarAd>
        </PublicLayout>
    );
}
