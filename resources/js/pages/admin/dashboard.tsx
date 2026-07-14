import { Head, Link } from '@inertiajs/react';
import { Monitor, Newspaper, Package, Tags, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
    stats: {
        software: number;
        bundles: number;
        posts: number;
        users: number;
        categories: number;
    };
};

const links = [
    { title: 'Software', href: '/admin/software', icon: Monitor, stat: 'software' as const, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Categories', href: '/admin/categories', icon: Tags, stat: 'categories' as const, gradient: 'from-violet-500 to-purple-500' },
    { title: 'Bundles', href: '/admin/bundles', icon: Package, stat: 'bundles' as const, gradient: 'from-amber-500 to-orange-500' },
    { title: 'Blog', href: '/admin/blog', icon: Newspaper, stat: 'posts' as const, gradient: 'from-emerald-500 to-teal-500' },
    { title: 'Users', href: '/admin/users', icon: Users, stat: 'users' as const, gradient: 'from-indigo-500 to-blue-500' },
];

export default function AdminDashboard({ stats }: Props) {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="mt-1 text-muted-foreground">Manage your ProLampX content and catalog.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {links.map(({ title, href, icon: Icon, stat, gradient }) => (
                    <Link key={href} href={href} className="group block">
                        <Card className="overflow-hidden border-0 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl">
                            <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                                <span className={`flex size-9 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                                    <Icon className="size-4" />
                                </span>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stats[stat]}</div>
                                <p className="mt-1 text-xs text-muted-foreground group-hover:text-primary">Open {title.toLowerCase()} →</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    );
}

AdminDashboard.layout = {
    breadcrumbs: [{ title: 'Dashboard', href: '/admin/dashboard' }],
};
