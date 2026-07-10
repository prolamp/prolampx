import { ProLampLogo } from '@/components/prolamp-logo';
import { cn } from '@/lib/utils';

export default function AppLogoIcon({ className }: { className?: string }) {
    return (
        <ProLampLogo
            variant="mark"
            imageClassName={cn('h-full w-auto', className)}
        />
    );
}
