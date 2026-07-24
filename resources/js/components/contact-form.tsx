import { useForm } from '@inertiajs/react';
import { Send } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import {
    contactFormIsValid,
    type ContactFormField,
    validateContactField,
    validateContactForm,
} from '@/lib/validate-contact-form';
import { cn } from '@/lib/utils';

const fields: ContactFormField[] = ['name', 'email', 'subject', 'message'];

export default function ContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [touched, setTouched] = useState<Partial<Record<ContactFormField, boolean>>>({});
    const [clientErrors, setClientErrors] = useState<Partial<Record<ContactFormField, string>>>({});

    const fieldError = useCallback(
        (field: ContactFormField) => errors[field] ?? clientErrors[field],
        [clientErrors, errors],
    );

    const markTouched = useCallback((field: ContactFormField) => {
        setTouched((current) => ({ ...current, [field]: true }));
    }, []);

    const validateAndSetField = useCallback((field: ContactFormField, value: string) => {
        const message = validateContactField(field, value);
        setClientErrors((current) => {
            const next = { ...current };
            if (message) {
                next[field] = message;
            } else {
                delete next[field];
            }
            return next;
        });
    }, []);

    const updateField = useCallback(
        (field: ContactFormField, value: string) => {
            setData(field, value);
            if (touched[field] || clientErrors[field] || errors[field]) {
                validateAndSetField(field, value);
            }
        },
        [clientErrors, errors, setData, touched, validateAndSetField],
    );

    const handleBlur = useCallback(
        (field: ContactFormField) => {
            markTouched(field);
            validateAndSetField(field, data[field]);
        },
        [data, markTouched, validateAndSetField],
    );

    const showInvalid = useCallback(
        (field: ContactFormField) => Boolean(fieldError(field)),
        [fieldError],
    );

    const canSubmit = useMemo(() => contactFormIsValid(data), [data]);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        const nextErrors = validateContactForm(data);
        setClientErrors(nextErrors);
        setTouched(Object.fromEntries(fields.map((field) => [field, true])) as Record<ContactFormField, boolean>);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setTouched({});
                setClientErrors({});
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="name" className="text-primary dark:text-on-surface">
                        Name
                    </Label>
                    <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className="public-surface"
                        autoComplete="name"
                        aria-invalid={showInvalid('name')}
                    />
                    <InputError message={fieldError('name')} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-primary dark:text-on-surface">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className="public-surface"
                        autoComplete="email"
                        aria-invalid={showInvalid('email')}
                    />
                    <InputError message={fieldError('email')} />
                </div>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="subject" className="text-primary dark:text-on-surface">
                    Subject
                </Label>
                <Input
                    id="subject"
                    value={data.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    className="public-surface"
                    aria-invalid={showInvalid('subject')}
                />
                <InputError message={fieldError('subject')} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="message" className="text-primary dark:text-on-surface">
                    Message
                </Label>
                <textarea
                    id="message"
                    value={data.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={cn(
                        'border-input placeholder:text-muted-foreground flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm',
                        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                        'public-surface min-h-36 resize-y',
                        showInvalid('message') && 'border-destructive aria-invalid:ring-destructive/20',
                    )}
                    aria-invalid={showInvalid('message')}
                />
                <InputError message={fieldError('message')} />
            </div>

            <Button
                type="submit"
                disabled={processing || !canSubmit}
                className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-secondary hover:text-on-secondary sm:w-auto disabled:opacity-60 dark:text-inverse-surface"
            >
                {processing ? <Spinner /> : <Send className="size-4" />}
                Send message
            </Button>
        </form>
    );
}
