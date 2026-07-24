import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    Brush,
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    Layers,
    MonitorSmartphone,
    Smartphone,
    Terminal,
    Users,
} from 'lucide-react';
import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

const stack = [
    { name: 'React', icon: Code2, className: 'text-os-windows' },
    { name: 'Swift', icon: Terminal, className: 'text-os-macos' },
    { name: 'Flutter', icon: Smartphone, className: 'text-os-ubuntu' },
    { name: 'Node.js', icon: Layers, className: 'text-secondary dark:text-primary' },
    { name: 'AWS', icon: Cloud, className: 'text-primary-container dark:text-primary' },
    { name: 'PostgreSQL', icon: Database, className: 'text-error' },
];

const cases = [
    {
        tag: 'E-commerce',
        title: 'Revitalizing Global Retail',
        body: 'How we scaled a legacy marketplace to handle 10x traffic during peak seasons with zero downtime.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbXOl1qOElUdEPqBUhkkgIgxn6xOxANAiyqLr9K9qiBVAHtfajSwPi10U-0NJFaDYekHb1RVcj1VnG6sE_LKwC9dq3RAN7_ljBuLQccv_7QP22VNpoIYBJt7ScIRSfTIN9_yRYGBy8lc4VdjcWAt_gnoVSw_dZ_AmNYpMFmbhoFH2B11eJ9nJf6An-EpdEtdc7YG1jzx3mPpV3rJDzS3BC2_dGdzM0A5sfTqoCGZipHUABUnqlTQ99BBq1W2AHZWwLYc_RRXoHabn',
    },
    {
        tag: 'Mobile Health',
        title: 'Precision in Patient Care',
        body: 'Developing a secure, HIPAA-compliant platform connecting 50k patients with practitioners in real-time.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0eT_HhhuigCjR4Sx4HfyGaLfQbtBHbjA5LNeWYqckbcbp3HD2Mlkec_hi7MZthOMaGRfiMvPIQACJ5xAVChZs10_IXnEkE37THNv0-QlZXpn3XcR8UjSmXjPEmv7EOAPoDWRtNEBhw7puISwDLfKeCtb5ld3Z2vH0DNA8KrRvM3infMdH91ktxTOJqlFCRmsB_4-mjqEtiHXnHa95k9yTCp7QHrATAVzX_UL-RC15IzEJu-jqAPxqDMo5X5U5eaCQcQbWCmKlIn2b',
    },
];

export default function ServicesIndex({ seo }: Props) {
    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} type="website" />

            <section className="mx-auto mb-stack-xl max-w-container-max px-margin-mobile pt-8">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-container p-12 text-center md:p-24 md:text-left">
                    <div className="relative z-10 max-w-3xl">
                        <span className="mb-6 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-label-sm font-bold uppercase tracking-wider text-secondary dark:text-primary">
                            Our Expertise
                        </span>
                        <h1 className="mb-6 text-headline-xl-mobile font-extrabold leading-tight text-white md:text-headline-xl">
                            Solutions tailored to your vision.
                        </h1>
                        <p className="mb-10 max-w-2xl text-body-lg text-on-primary-container opacity-90">
                            We bridge the gap between complex technical requirements and intuitive user experiences.
                            ProLampX delivers engineering excellence across the entire digital ecosystem.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                            <Link
                                href="/contact"
                                className="rounded-xl bg-secondary px-8 py-4 text-label-md font-semibold text-white transition-all hover:shadow-lg active:scale-95"
                            >
                                Consult our Tech Leads
                            </Link>
                            <a
                                href="#stack"
                                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-label-md font-semibold text-white transition-all hover:bg-white/20"
                            >
                                View Our Stack
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto mb-stack-xl max-w-container-max px-margin-mobile">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-headline-lg font-bold text-primary dark:text-on-surface">
                        Our Core Capabilities
                    </h2>
                    <p className="mx-auto max-w-xl text-body-md text-on-surface-variant">
                        From strategic design to enterprise-scale engineering, we provide end-to-end services for modern
                        businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
                    <div className="group flex flex-col gap-8 rounded-3xl border border-border-subtle bg-surface-container-lowest p-10 shadow-sm transition-all hover:border-secondary/30 md:col-span-8 md:flex-row dark:bg-surface-container dark:hover:border-primary/40">
                        <div className="flex-1">
                            <Terminal className="mb-6 size-10 text-secondary transition-transform group-hover:-translate-y-1 group-hover:scale-110 dark:text-primary" />
                            <h3 className="mb-4 text-headline-md font-bold text-primary dark:text-on-surface">
                                Web Development
                            </h3>
                            <p className="mb-6 text-body-md text-on-surface-variant">
                                High-performance web applications built for scale and security.
                            </p>
                            <ul className="space-y-3">
                                {['Full-stack Development', 'E-commerce Platforms', 'Enterprise Portals'].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-label-md text-primary dark:text-on-surface"
                                    >
                                        <CheckCircle2 className="size-5 shrink-0 text-secondary dark:text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-48 w-full overflow-hidden rounded-2xl md:h-auto md:w-64">
                            <img
                                alt="Developer workspace with code on a curved monitor"
                                className="size-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk23-LMB-2AkEWHuY0EWM3QVvfat_cTO7vISC_kX0OcsDeu3bJi8iIezi-_arN7nlm9g1VVN0S9b18d8oqvV3Pt-bqqoHlWyCCNrCRg2MIG3ZUXVZLWldl2HkN5Ryu2rPoMi6Xo72Xo25E5wA89F5HLuroVaRD2_ZFoRG9W_uGzDuuKadMOlWc3K-YgANcYU1-r5R0clxiRFyCwKZYRnOVBVYaJx5rXERBSaUFpPqwaj-hqCLfaRDQ8np4ivIJmkrLShZp6w-cUCP0"
                            />
                        </div>
                    </div>

                    <div className="group rounded-3xl border border-border-subtle bg-surface-container-lowest p-10 shadow-sm transition-all hover:border-secondary/30 md:col-span-4 dark:bg-surface-container dark:hover:border-primary/40">
                        <Users className="mb-6 size-10 text-secondary transition-transform group-hover:-translate-y-1 group-hover:scale-110 dark:text-primary" />
                        <h3 className="mb-4 text-headline-md font-bold text-primary dark:text-on-surface">
                            Staff Augmentation
                        </h3>
                        <p className="mb-6 text-body-md text-on-surface-variant">
                            Scale your team with elite talent on demand.
                        </p>
                        <div className="space-y-4">
                            <div className="rounded-xl border border-border-subtle bg-surface-container p-4 dark:bg-surface-container-high">
                                <p className="text-label-md font-semibold text-primary dark:text-on-surface">
                                    Dedicated Dev Teams
                                </p>
                                <p className="text-[13px] text-on-surface-variant">
                                    Embedded engineers for long-term vision.
                                </p>
                            </div>
                            <div className="rounded-xl border border-border-subtle bg-surface-container p-4 dark:bg-surface-container-high">
                                <p className="text-label-md font-semibold text-primary dark:text-on-surface">
                                    Tech Lead Consulting
                                </p>
                                <p className="text-[13px] text-on-surface-variant">
                                    Strategic guidance and architecture reviews.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group rounded-3xl border border-border-subtle bg-surface-container-lowest p-10 shadow-sm transition-all hover:border-secondary/30 md:col-span-4 dark:bg-surface-container dark:hover:border-primary/40">
                        <MonitorSmartphone className="mb-6 size-10 text-secondary transition-transform group-hover:-translate-y-1 group-hover:scale-110 dark:text-primary" />
                        <h3 className="mb-4 text-headline-md font-bold text-primary dark:text-on-surface">
                            Mobile App Development
                        </h3>
                        <p className="mb-6 text-body-md text-on-surface-variant">
                            Seamless mobile experiences that users love to keep.
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                            {['Native iOS', 'Android', 'Flutter'].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-border-subtle bg-surface-container px-3 py-1 text-[12px] font-bold uppercase text-primary dark:bg-surface-container-high dark:text-on-surface"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="group flex flex-col gap-8 rounded-3xl bg-primary-container p-10 text-white shadow-xl transition-all md:col-span-8 md:flex-row">
                        <div className="flex-1">
                            <Brush className="mb-6 size-10 text-primary-fixed-dim transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
                            <h3 className="mb-4 text-headline-md font-bold text-white">UI/UX Design</h3>
                            <p className="mb-6 text-body-md text-on-primary-container">
                                Where aesthetics meet functionality to drive conversion.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {['Product Strategy', 'Design Systems', 'Prototyping', 'User Research'].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <Layers className="size-5 shrink-0 text-primary-fixed-dim" />
                                        <span className="text-label-md">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:w-80">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
                            <div className="relative z-10 space-y-4">
                                <div className="h-8 w-3/4 rounded-full bg-white/20" />
                                <div className="h-32 w-full rounded-xl border border-white/20 bg-white/10" />
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-10 rounded-lg bg-white/20" />
                                    <div className="h-10 rounded-lg bg-white/20" />
                                    <div className="h-10 rounded-lg bg-white/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stack" className="bg-surface-container-low py-stack-xl dark:bg-surface">
                <div className="mx-auto max-w-container-max px-margin-mobile">
                    <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
                        <div className="max-w-xl">
                            <h2 className="mb-4 text-headline-lg font-bold text-primary dark:text-on-surface">
                                Our Technology Stack
                            </h2>
                            <p className="text-body-md text-on-surface-variant">
                                We utilize the most reliable and forward-thinking technologies to ensure your product is
                                built for the future.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-border-subtle bg-surface-container-lowest px-4 py-2 text-label-sm text-primary dark:bg-surface-container dark:text-on-surface">
                            <span className="size-2 rounded-full bg-secondary dark:bg-primary" />
                            Active Support
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
                        {stack.map(({ name, icon: Icon, className }) => (
                            <div
                                key={name}
                                className="flex flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface-container-lowest p-8 text-center transition-shadow hover:shadow-md dark:bg-surface-container"
                            >
                                <Icon className={`mb-4 size-10 ${className}`} strokeWidth={1.5} />
                                <p className="text-label-md font-semibold text-primary dark:text-on-surface">{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-container-max px-margin-mobile py-stack-xl">
                <div className="mb-12">
                    <h2 className="mb-2 text-headline-lg font-bold text-primary dark:text-on-surface">Proven Results</h2>
                    <p className="text-body-md text-on-surface-variant">
                        Real-world impact delivered through strategic execution.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
                    {cases.map((study) => (
                        <div key={study.title} className="group">
                            <div className="relative mb-6 h-80 overflow-hidden rounded-[2rem]">
                                <img
                                    alt={study.title}
                                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={study.image}
                                />
                                <div className="absolute left-6 top-6 rounded-full border border-border-subtle bg-surface-container-lowest/70 px-4 py-1.5 text-label-sm font-bold uppercase text-primary backdrop-blur-md dark:bg-surface-container/80 dark:text-on-surface">
                                    {study.tag}
                                </div>
                            </div>
                            <h3 className="mb-3 text-headline-md font-bold text-primary dark:text-on-surface">
                                {study.title}
                            </h3>
                            <p className="mb-4 text-body-md text-on-surface-variant">{study.body}</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 font-bold text-secondary transition-all hover:gap-4 dark:text-primary"
                            >
                                View Case Study <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-container-max px-margin-mobile pb-stack-xl">
                <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 text-center text-white shadow-2xl md:p-20 dark:bg-primary-container">
                    <div className="relative z-10 mx-auto max-w-2xl">
                        <h2 className="mb-8 text-headline-xl-mobile font-extrabold md:text-headline-xl">
                            Ready to bring your product to life?
                        </h2>
                        <p className="mb-12 text-body-lg text-on-primary-container opacity-90">
                            Let&apos;s discuss your technical challenges and find the most efficient path to market. Our
                            tech leads are ready to consult.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block rounded-2xl bg-secondary px-12 py-5 text-headline-md font-semibold text-white shadow-xl transition-all hover:bg-secondary-container active:scale-95"
                        >
                            Start a Project
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
