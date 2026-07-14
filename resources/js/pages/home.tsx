import { Head } from '@inertiajs/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    seo: { title: string; description: string };
};

export default function Home({ seo }: Props) {
    return (
        <PublicLayout fullBleed>
            <Head title={seo.title}>
                <meta name="description" content={seo.description} />
            </Head>
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
