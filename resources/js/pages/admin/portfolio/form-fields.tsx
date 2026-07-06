import { Link, useForm } from '@inertiajs/react';
import AdminFormCard from '@/components/admin/admin-form-card';
import AdminPageHeader from '@/components/admin/admin-page-header';
import InputError from '@/components/input-error';
import MediaUploadField from '@/components/media-upload-field';
import RichTextEditor from '@/components/rich-text-editor';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type PortfolioFormData = {
    type: string;
    title: string;
    subtitle: string;
    body: string;
    image: string;
    settings: {
        cta_text?: string;
        cta_url?: string;
        secondary_cta_text?: string;
        secondary_cta_url?: string;
        items?: { title: string; description: string; icon?: string; image?: string | null; url?: string }[];
    };
    sort_order: number;
    is_active: boolean;
};

type Props = {
    section?: PortfolioFormData & { id: number };
    sectionTypes: string[];
};

const defaultSettings: Record<string, Record<string, unknown>> = {
    hero: { cta_text: '', cta_url: '', secondary_cta_text: '', secondary_cta_url: '' },
    cta: { cta_text: '', cta_url: '' },
    features: { items: [] },
    projects: { items: [] },
};

export default function PortfolioFormFields({ section, sectionTypes }: Props) {
    const isEdit = !!section?.id;
    const { data, setData, post, put, processing, errors } = useForm<PortfolioFormData>({
        type: section?.type ?? 'hero',
        title: section?.title ?? '',
        subtitle: section?.subtitle ?? '',
        body: section?.body ?? '',
        image: section?.image ?? '',
        settings: section?.settings ?? defaultSettings.hero,
        sort_order: section?.sort_order ?? 0,
        is_active: section?.is_active ?? true,
    });

    const settings = data.settings as Record<string, string>;

    const updateSetting = (key: string, value: string) => {
        setData('settings', { ...data.settings, [key]: value });
    };

    const showRichBody = ['about', 'text', 'contact'].includes(data.type);
    const showHeroCta = data.type === 'hero' || data.type === 'cta';
    const showItemsJson = data.type === 'features' || data.type === 'projects';

    return (
        <>
            <AdminPageHeader title={isEdit ? `Edit section` : 'Create Section'} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isEdit) {
                        put(`/admin/portfolio/${section!.id}`);
                    } else {
                        post('/admin/portfolio');
                    }
                }}
            >
                <AdminFormCard
                    title="Section details"
                    footer={(
                        <>
                            <Button type="submit" disabled={processing}>{isEdit ? 'Save changes' : 'Create'}</Button>
                            <Button variant="outline" asChild>
                                <Link href="/admin/portfolio">Cancel</Link>
                            </Button>
                        </>
                    )}
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                            <Label>Section type</Label>
                            <select
                                value={data.type}
                                onChange={(e) => {
                                    const type = e.target.value;
                                    setData((prev) => ({
                                        ...prev,
                                        type,
                                        settings: defaultSettings[type] ?? {},
                                    }));
                                }}
                                className="rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                            >
                                {sectionTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                            <InputError message={errors.type} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Sort order</Label>
                            <Input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', Number(e.target.value))} />
                        </div>
                        <div className="grid gap-2 md:col-span-2">
                            <Label>Title</Label>
                            <Input value={data.title} onChange={(e) => setData('title', e.target.value)} />
                        </div>
                        <div className="grid gap-2 md:col-span-2">
                            <Label>Subtitle</Label>
                            <Input value={data.subtitle} onChange={(e) => setData('subtitle', e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                            <MediaUploadField label="Section image" value={data.image} onChange={(url) => setData('image', url)} />
                        </div>
                        <div className="flex items-center gap-2 md:col-span-2">
                            <Checkbox
                                id="is_active"
                                checked={data.is_active}
                                onCheckedChange={(checked) => setData('is_active', checked === true)}
                            />
                            <Label htmlFor="is_active">Active (visible on homepage)</Label>
                        </div>
                    </div>

                    {showRichBody && (
                        <div className="mt-4 grid gap-2">
                            <Label>Body content</Label>
                            <RichTextEditor value={data.body} onChange={(html) => setData('body', html)} error={errors.body} />
                        </div>
                    )}

                    {showHeroCta && (
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="grid gap-2">
                                <Label>Primary button text</Label>
                                <Input value={settings.cta_text ?? ''} onChange={(e) => updateSetting('cta_text', e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <Label>Primary button URL</Label>
                                <Input value={settings.cta_url ?? ''} onChange={(e) => updateSetting('cta_url', e.target.value)} />
                            </div>
                            {data.type === 'hero' && (
                                <>
                                    <div className="grid gap-2">
                                        <Label>Secondary button text</Label>
                                        <Input value={settings.secondary_cta_text ?? ''} onChange={(e) => updateSetting('secondary_cta_text', e.target.value)} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Secondary button URL</Label>
                                        <Input value={settings.secondary_cta_url ?? ''} onChange={(e) => updateSetting('secondary_cta_url', e.target.value)} />
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {showItemsJson && (
                        <div className="mt-4 grid gap-2">
                            <Label>Items (JSON array)</Label>
                            <textarea
                                className="min-h-40 w-full rounded-md border border-input bg-transparent px-3 py-2 font-mono text-xs"
                                value={JSON.stringify((data.settings as { items?: unknown[] }).items ?? [], null, 2)}
                                onChange={(e) => {
                                    try {
                                        const items = JSON.parse(e.target.value) as PortfolioFormData['settings']['items'];
                                        setData('settings', { ...data.settings, items });
                                    } catch {
                                        // Keep typing
                                    }
                                }}
                            />
                            <p className="text-xs text-muted-foreground">
                                Features: title, description, icon (zap|monitor|layers). Projects: title, description, image, url.
                            </p>
                        </div>
                    )}
                </AdminFormCard>
            </form>
        </>
    );
}
