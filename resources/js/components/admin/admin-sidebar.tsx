import { Link, usePage } from '@inertiajs/react';
import {
    FolderKanban,
    Layers,
    LayoutGrid,
    Monitor,
    Newspaper,
    Package,
    Tags,
    Users,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';

const adminNavItems: NavItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard', icon: LayoutGrid },
    { title: 'Software', href: '/admin/software', icon: Monitor },
    { title: 'Categories', href: '/admin/categories', icon: Tags },
    { title: 'Bundles', href: '/admin/bundles', icon: Package },
    { title: 'Blog', href: '/admin/blog', icon: Newspaper },
    { title: 'Blog Categories', href: '/admin/blog-categories', icon: Tags },
    { title: 'Website Sections', href: '/admin/portfolio', icon: FolderKanban },
];

export function AdminSidebar() {
    const { auth } = usePage().props;
    const items = auth.user?.role === 'super_admin'
        ? [...adminNavItems, { title: 'Users', href: '/admin/users', icon: Users }]
        : adminNavItems;

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/admin/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" prefetch>
                                <Layers />
                                <span>View Site</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
