import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import type { AppLayoutProps } from '@/types';

export default function AdminLayout({ children, breadcrumbs = [] }: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AdminSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden bg-gradient-to-br from-background via-background to-indigo-50/30">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <div className="p-4 md:p-6">{children}</div>
            </AppContent>
        </AppShell>
    );
}
