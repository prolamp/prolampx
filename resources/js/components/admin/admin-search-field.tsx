import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type AdminSearchFieldProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

export default function AdminSearchField({
    value,
    onChange,
    placeholder = 'Search…',
}: AdminSearchFieldProps) {
    return (
        <div className="relative max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="pl-9"
            />
        </div>
    );
}
