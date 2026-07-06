import { Head, Link } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import AdminStatusBadge from '@/components/admin/admin-status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Software = {
    id: number;
    name: string;
    slug: string;
    license_type: string;
    latest_version: string | null;
    description: string | null;
    is_featured: boolean;
    is_active: boolean;
    category_relation?: { name: string } | null;
    install_commands: { os: string; package_manager: string; command: string }[];
};

type Props = { software: Software };

export default function AdminSoftwareShow({ software }: Props) {
    return (
        <>
            <Head title={software.name} />
            <AdminPageHeader
                title={software.name}
                action={(
                    <Button asChild>
                        <Link href={`/admin/software/${software.id}/edit`}>Edit</Link>
                    </Button>
                )}
            />
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        Details
                        <AdminStatusBadge active={software.is_active} />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <Row label="Slug" value={software.slug} />
                    <Row label="Category" value={software.category_relation?.name ?? '—'} />
                    <Row label="License" value={software.license_type} />
                    <Row label="Version" value={software.latest_version ?? '—'} />
                    <Row label="Featured" value={software.is_featured ? 'Yes' : 'No'} />
                    {software.description && <p className="text-muted-foreground">{software.description}</p>}
                    <div className="border-t pt-4">
                        <h3 className="mb-2 font-medium">Install commands</h3>
                        {software.install_commands.length === 0 ? (
                            <p className="text-muted-foreground">No commands configured.</p>
                        ) : (
                            <ul className="space-y-2">
                                {software.install_commands.map((cmd) => (
                                    <li key={cmd.os} className="rounded-md border p-3">
                                        <span className="font-medium capitalize">{cmd.os}</span>
                                        <span className="text-muted-foreground"> · {cmd.package_manager}</span>
                                        <pre className="mt-1 overflow-x-auto text-xs">{cmd.command}</pre>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex gap-2">
            <span className="w-24 shrink-0 text-muted-foreground">{label}</span>
            <span>{value}</span>
        </div>
    );
}

AdminSoftwareShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Software', href: '/admin/software' },
        { title: 'View', href: '#' },
    ],
};
