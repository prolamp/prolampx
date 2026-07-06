import { Loader2, Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = {
    label?: string;
    value: string;
    onChange: (url: string) => void;
    accept?: string;
    className?: string;
};

export default function MediaUploadField({
    label = 'Image',
    value,
    onChange,
    accept = 'image/jpeg,image/png,image/jpg,image/gif,image/webp,image/svg+xml',
    className,
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const upload = async (file: File) => {
        setUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/admin/media', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content || '',
                    Accept: 'application/json',
                },
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message ?? 'Upload failed.');
            }

            onChange(data.url);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Upload failed.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className={cn('grid gap-2', className)}>
            <Label>{label}</Label>
            <div className="flex flex-wrap items-center gap-2">
                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            void upload(file);
                        }
                        e.target.value = '';
                    }}
                />
                <Button
                    type="button"
                    variant="outline"
                    disabled={uploading}
                    onClick={() => inputRef.current?.click()}
                >
                    {uploading ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
                    {uploading ? 'Uploading…' : 'Upload file'}
                </Button>
                {value && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => onChange('')}>
                        <X className="size-4" />
                        Remove
                    </Button>
                )}
            </div>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Or paste image URL"
            />
            {value && (
                <img src={value} alt="" className="h-24 w-auto rounded-lg border object-cover" />
            )}
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    );
}
