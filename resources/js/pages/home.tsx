import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SeoHead from '@/components/seo-head';
import AboutSection from '@/components/sections/aboutSection';
import ClientLogosSection from '@/components/sections/clientLogosSection';
import CtaSection from '@/components/sections/ctaSection';
import HeroSection from '@/components/sections/heroSection';
import InstallerSection from '@/components/sections/installerSection';
import ProcessSection from '@/components/sections/processSection';
import ServicesSection from '@/components/sections/servicesSection';
import TestimonialSection from '@/components/sections/testimonialSection';
import PublicLayout from '@/layouts/public-layout';
import WebTheme from '@/theme/web';

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
            <WebTheme>
                <HeroSection />
                <ClientLogosSection />
                <InstallerSection />
                <AboutSection />
                <ServicesSection />
                <ProcessSection />
                <TestimonialSection />
                <CtaSection />
            </WebTheme>
        </PublicLayout>
    );
}
