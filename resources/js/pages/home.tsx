import SeoHead from '@/components/seo-head';
import AboutSection from '@/components/sections/aboutSection';
import CtaSection from '@/components/sections/ctaSection';
import HeroSection from '@/components/sections/heroSection';
import ProcessSection from '@/components/sections/processSection';
import ProductsSection from '@/components/sections/productsSection';
import ServicesSection from '@/components/sections/servicesSection';
import TechStackSection from '@/components/sections/techStackSection';
import TestimonialSection from '@/components/sections/testimonialSection';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    seo: {
        title: string;
        description: string;
        keywords?: string;
        image?: string | null;
        canonical?: string | null;
    };
};

export default function Home({ seo }: Props) {
    return (
        <PublicLayout fullBleed>
            <SeoHead
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                image={seo.image}
                canonical={seo.canonical}
                type="website"
            />
            <div className="bg-background pb-20 text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed md:pb-0">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ProcessSection />
                <ProductsSection />
                <TestimonialSection />
                <TechStackSection />
                <CtaSection />
            </div>
        </PublicLayout>
    );
}
