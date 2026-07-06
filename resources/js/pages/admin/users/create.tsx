import { Head, Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminUsersCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'admin',
    });

    return (
        <>
            <Head title="Create Admin User" />
            <AdminPageHeader title="Create Admin User" />
            <form onSubmit={(e) => { e.preventDefault(); post('/admin/users'); }}>
                <AdminFormCard
                    title="User details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>Create</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/users">Cancel</Link>
                            </Button>
                        </>
                    )}
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                            <Label>Name</Label>
                            <Input value={data.name} onChange={(e) => setData('name', e.target.value)} />
                            <InputError message={errors.name} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Email</Label>
                            <Input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                            <InputError message={errors.email} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Password</Label>
                            <Input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} />
                            <InputError message={errors.password} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Role</Label>
                            <select
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                                value={data.role}
                                onChange={(e) => setData('role', e.target.value)}
                            >
                                <option value="admin">Admin</option>
                                <option value="super_admin">Super Admin</option>
                            </select>
                            <InputError message={errors.role} />
                        </div>
                    </div>
                </AdminFormCard>
            </form>
        </>
    );
}

AdminUsersCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'Users', href: '/admin/users' },
        { title: 'Create', href: '/admin/users/create' },
    ],
};
