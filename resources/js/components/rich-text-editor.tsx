import { Bold, Heading2, Italic, List, ListOrdered } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
    value: string;
    onChange: (html: string) => void;
    className?: string;
    error?: string;
};

export default function RichTextEditor({ value, onChange, className, error }: Props) {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            editorRef.current.innerHTML = value;
        }
    }, [value]);

    const exec = (command: string, arg?: string) => {
        editorRef.current?.focus();
        document.execCommand(command, false, arg);
        onChange(editorRef.current?.innerHTML ?? '');
    };

    const sync = () => {
        onChange(editorRef.current?.innerHTML ?? '');
    };

    return (
        <div className={cn('space-y-2', className)}>
            <div className="overflow-hidden rounded-xl border border-input bg-white/80">
                <div className="flex flex-wrap gap-1 border-b border-input bg-muted/40 p-2">
                    <Button type="button" size="sm" variant="ghost" onClick={() => exec('bold')}>
                        <Bold className="size-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => exec('italic')}>
                        <Italic className="size-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => exec('formatBlock', 'h2')}>
                        <Heading2 className="size-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => exec('insertUnorderedList')}>
                        <List className="size-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => exec('insertOrderedList')}>
                        <ListOrdered className="size-4" />
                    </Button>
                </div>
                <div
                    ref={editorRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={sync}
                    className="prose prose-sm max-w-none min-h-48 px-3 py-2 focus:outline-none"
                />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    );
}
