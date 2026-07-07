import { useState } from 'react';
import { cn } from '@/lib/utils';

type SoftwareIconProps = {
    name: string;
    icon?: string | null;
    slug?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

const sizes = { sm: 32, md: 40, lg: 56 };

function fallbackUrl(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=128&bold=true&format=svg`;
}

export default function SoftwareIcon({ name, icon, slug, size = 'md', className }: SoftwareIconProps) {
    const px = sizes[size];
    const initial = icon || (slug ? fallbackUrl(name) : fallbackUrl(name));
    const [src, setSrc] = useState(initial);

    return (
        <div
            className={cn(
                'flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-muted dark:ring-white/10',
                className,
            )}
            style={{ width: px, height: px }}
        >
            <img
                src={src}
                alt=""
                width={px}
                height={px}
                className="size-[70%] object-contain"
                loading="lazy"
                onError={() => setSrc(fallbackUrl(name))}
            />
        </div>
    );
}
