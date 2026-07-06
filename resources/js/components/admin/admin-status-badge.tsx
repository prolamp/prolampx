import { Badge } from '@/components/ui/badge';

type AdminStatusBadgeProps = {
    active: boolean;
    activeLabel?: string;
    inactiveLabel?: string;
};

export default function AdminStatusBadge({
    active,
    activeLabel = 'Active',
    inactiveLabel = 'Inactive',
}: AdminStatusBadgeProps) {
    return (
        <Badge variant={active ? 'default' : 'secondary'}>
            {active ? activeLabel : inactiveLabel}
        </Badge>
    );
}
