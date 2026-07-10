import { cn } from '@/lib/utils';

const LOGO = {
    full: {
        light: '/logo/black-prolamp-logo.svg',
        dark: '/logo/white-prolamp-logo.svg',
    },
    mark: {
        light: '/logo/black-favicon.svg',
        dark: '/logo/white-favicon.svg',
    },
} as const;

type ProLampLogoProps = {
    variant?: keyof typeof LOGO;
    className?: string;
    imageClassName?: string;
};

export function ProLampLogo({ variant = 'full', className, imageClassName }: ProLampLogoProps) {
    const sources = LOGO[variant];
    const sizeClass = variant === 'full' ? 'h-8 w-auto sm:h-9' : 'h-6 w-auto';
    const imgClass = imageClassName ?? sizeClass;

    return (
        <span className={cn('inline-flex shrink-0 items-center', className)}>
            <img
                src={sources.light}
                alt="ProLampX"
                className={cn(imgClass, 'dark:hidden')}
            />
            <img
                src={sources.dark}
                alt="ProLampX"
                className={cn(imgClass, 'hidden dark:block')}
            />
        </span>
    );
}

export const PROLAMP_FAVICON = '/logo/white-favicon.svg';
