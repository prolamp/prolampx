import { Head, usePage } from '@inertiajs/react';

type SeoProps = {
    title: string;
    description?: string;
    keywords?: string;
    image?: string | null;
    canonical?: string | null;
    type?: 'website' | 'article' | 'software';
};

function toAbsoluteUrl(baseUrl: string, pathOrUrl?: string | null): string | undefined {
    if (!pathOrUrl) {
        return undefined;
    }

    if (/^https?:\/\//i.test(pathOrUrl)) {
        return pathOrUrl;
    }

    const base = baseUrl.replace(/\/$/, '');
    const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;

    return `${base}${path}`;
}

export default function SeoHead({
    title,
    description,
    keywords,
    image,
    canonical,
    type = 'website',
}: SeoProps) {
    const { props, url: pageUrl } = usePage<{ appUrl?: string; name?: string }>();
    const siteName = props.name || 'ProLampX';
    const appUrl = (props.appUrl || '').replace(/\/$/, '');

    const canonicalUrl =
        toAbsoluteUrl(appUrl, canonical) ||
        (appUrl ? `${appUrl}${pageUrl.split('?')[0] || '/'}` : undefined);

    const imageUrl = toAbsoluteUrl(appUrl, image);
    const pageType = type === 'article' ? 'article' : 'website';

    const schemaType =
        type === 'article' ? 'Article' : type === 'software' ? 'SoftwareApplication' : 'WebSite';

    const jsonLd: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        name: title,
        description,
        url: canonicalUrl,
    };

    if (imageUrl) {
        jsonLd.image = imageUrl;
    }

    if (type === 'website') {
        jsonLd.publisher = {
            '@type': 'Organization',
            name: siteName,
            url: appUrl || canonicalUrl,
            logo: toAbsoluteUrl(appUrl, '/images/prolampx-logo.png'),
        };
    }

    return (
        <Head title={title}>
            <meta name="robots" content="index, follow" />
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            <meta property="og:type" content={pageType} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}

            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Head>
    );
}
