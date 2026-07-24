import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Mail } from 'lucide-react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <>
            <Head title="Forgot password" />

            <div className="mb-6 flex justify-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-secondary/10 text-secondary dark:bg-primary/10 dark:text-primary">
                    <Mail className="size-6" />
                </div>
            </div>

            {status && (
                <div className="mb-4 rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-center text-sm font-medium text-green-700 dark:text-green-400">
                    {status}
                </div>
            )}

            <div className="space-y-6">
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-primary dark:text-on-surface">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    autoFocus
                                    placeholder="email@example.com"
                                    className="rounded-xl border-border-subtle bg-surface-container-low"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="my-6 flex items-center justify-start">
                                <Button
                                    className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-secondary hover:text-on-secondary dark:text-inverse-surface"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Send recovery link
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="space-x-1 text-center text-sm text-on-surface-variant">
                    <span>Or return to</span>
                    <TextLink href={login()} className="text-secondary dark:text-primary">
                        log in
                    </TextLink>
                </div>
            </div>
        </>
    );
}

ForgotPassword.layout = {
    title: 'Forgot password?',
    description: 'Enter your email and we will send a recovery link',
};
