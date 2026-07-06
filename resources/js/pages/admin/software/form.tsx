import type { ReactNode } from 'react';
import InputError from '@/components/input-error';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Category = { id: number; name: string; slug: string };

export type SoftwareFormData = {
    software: {
        name: string;
        slug: string;
        category_id: number;
        license_type: string;
        access_tier: string;
        latest_version: string;
        description: string;
        icon: string;
        meta_title: string;
        meta_description: string;
        meta_keywords: string;
        is_featured: boolean;
        is_active: boolean;
    };
    install_commands: { os: string; package_manager: string; command: string }[];
};

type Props = {
    data: SoftwareFormData;
    setData: (key: string, value: unknown) => void;
    errors: Partial<Record<string, string>>;
    categories: Category[];
};

export default function SoftwareFormFields({ data, setData, errors, categories }: Props) {
    const updateSoftware = (key: keyof SoftwareFormData['software'], value: unknown) => {
        setData('software', { ...data.software, [key]: value });
    };

    const updateCommand = (index: number, key: string, value: string) => {
        const commands = [...data.install_commands];
        commands[index] = { ...commands[index], [key]: value };
        setData('install_commands', commands);
    };

    return (
        <>
            <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" error={errors['software.name']}>
                    <Input value={data.software.name} onChange={(e) => updateSoftware('name', e.target.value)} />
                </Field>
                <Field label="Slug" error={errors['software.slug']}>
                    <Input value={data.software.slug} onChange={(e) => updateSoftware('slug', e.target.value)} />
                </Field>
                <Field label="Category" error={errors['software.category_id']}>
                    <select
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                        value={data.software.category_id}
                        onChange={(e) => updateSoftware('category_id', Number(e.target.value))}
                    >
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </Field>
                <Field label="License" error={errors['software.license_type']}>
                    <select
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                        value={data.software.license_type}
                        onChange={(e) => updateSoftware('license_type', e.target.value)}
                    >
                        <option value="free">Free</option>
                        <option value="freeware">Freeware</option>
                    </select>
                </Field>
                <Field label="Latest version" error={errors['software.latest_version']}>
                    <Input value={data.software.latest_version} onChange={(e) => updateSoftware('latest_version', e.target.value)} />
                </Field>
                <Field label="Icon URL" error={errors['software.icon']}>
                    <Input value={data.software.icon} onChange={(e) => updateSoftware('icon', e.target.value)} placeholder="https://cdn.simpleicons.org/..." />
                </Field>
            </div>
            <Field label="Description" error={errors['software.description']}>
                <textarea
                    className="flex min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                    value={data.software.description}
                    onChange={(e) => updateSoftware('description', e.target.value)}
                />
            </Field>
            <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 text-sm">
                    <Checkbox
                        checked={data.software.is_featured}
                        onCheckedChange={(v) => updateSoftware('is_featured', !!v)}
                    />
                    Featured
                </label>
                <label className="flex items-center gap-2 text-sm">
                    <Checkbox
                        checked={data.software.is_active}
                        onCheckedChange={(v) => updateSoftware('is_active', !!v)}
                    />
                    Active
                </label>
            </div>
            <div className="space-y-4 border-t pt-4">
                <h3 className="font-medium">Install commands</h3>
                {data.install_commands.map((cmd, index) => (
                    <div key={cmd.os} className="grid gap-2 md:grid-cols-3">
                        <Input value={cmd.os} readOnly className="capitalize" />
                        <Input
                            value={cmd.package_manager}
                            onChange={(e) => updateCommand(index, 'package_manager', e.target.value)}
                            placeholder="Package manager"
                        />
                        <Input
                            value={cmd.command}
                            onChange={(e) => updateCommand(index, 'command', e.target.value)}
                            placeholder="Install command"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
    return (
        <div className="grid gap-2">
            <Label>{label}</Label>
            {children}
            {error && <InputError message={error} />}
        </div>
    );
}
