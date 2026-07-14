import { siteConfig } from "@/lib/site";

export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.ogImage}`,
        description: siteConfig.description,
        email: siteConfig.email,
        sameAs: [],
        areaServed: "Worldwide",
        serviceType: [
            "Web Development",
            "Mobile App Development",
            "Full Stack Development",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
