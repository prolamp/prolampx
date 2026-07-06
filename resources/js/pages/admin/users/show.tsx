import { Head } from '@inertiajs/react';
import AdminPageHeader from '@/components/admin/admin-page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string | null;
};

type Props = { user: User };

export default function AdminUsersShow({ user }: Props) {
    return (
        <>
            <Head title={user.name} />
            <AdminPageHeader title={user.name} />
            <Card>
                <CardHeader>
                    <CardTitle>User details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Email:</span> {user.email}</p>
                    <p><span className="text-muted-foreground">Role:</span> {user.role}</p>
                    {user.created_at && (
                        <p><span className="text-muted-foreground">Joined:</span> {new Date(user.created_at).toLocaleString()}</p>
                    )}
                </CardContent>
            </Card>
        </>
    );
}

AdminUsersShow.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Users', href: '/admin/users' },
        { title: 'View', href: '#' },
    ],
};
