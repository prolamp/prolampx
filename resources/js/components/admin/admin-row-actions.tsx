import { Eye, Pencil, Power, Trash2 } from 'lucide-react';
import AdminActionButton, { adminDelete, adminPatch } from '@/components/admin/admin-action-button';

type AdminRowActionsProps = {
    name: string;
    viewHref?: string;
    editHref: string;
    deleteHref: string;
    toggleHref?: string;
    isActive?: boolean;
    showView?: boolean;
    showEdit?: boolean;
    showToggle?: boolean;
};

export default function AdminRowActions({
    name,
    viewHref,
    editHref,
    deleteHref,
    toggleHref,
    isActive = true,
    showView = true,
    showEdit = true,
    showToggle = true,
}: AdminRowActionsProps) {
    return (
        <div className="flex justify-end gap-1">
            {showView && viewHref && (
                <AdminActionButton icon={Eye} label={`View ${name}`} href={viewHref} />
            )}
            {showEdit && (
                <AdminActionButton icon={Pencil} label={`Edit ${name}`} href={editHref} />
            )}
            {showToggle && toggleHref && (
                <AdminActionButton
                    icon={Power}
                    label={isActive ? `Deactivate ${name}` : `Activate ${name}`}
                    className={isActive ? 'text-amber-600 hover:text-amber-600' : 'text-green-600 hover:text-green-600'}
                    onClick={() => adminPatch(toggleHref)}
                />
            )}
            <AdminActionButton
                icon={Trash2}
                label={`Delete ${name}`}
                className="text-destructive hover:text-destructive"
                onClick={() => adminDelete(deleteHref, `Delete ${name}? This cannot be undone.`)}
            />
        </div>
    );
}
