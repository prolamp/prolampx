import { Head } from '@inertiajs/react';

type SeoProps = {
    title: string;
    description?: string;
    keywords?: string;
    image?: string | null;
    canonical?: string | null;
    type?: 'website' | 'article' | 'software';
};

export default function SeoHead({
    title,
    description,
    keywords,
    image,
    canonical,
    type = 'website',
}: SeoProps) {
    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Head title={title}>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': type === 'article' ? 'Article' : type === 'software' ? 'SoftwareApplication' : 'WebSite',
                    name: title,
                    description,
                    url,
                })}
            </script>
        </Head>
    );
}
