import { Link } from '@inertiajs/react';
import { Activity, ArrowRight, ArrowUpRight, Cloud, ExternalLink, Lock, RefreshCw, Shield, Terminal } from 'lucide-react';
import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

export default function ProductsIndex({ seo }: Props) {
    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} type="website" />

            <div className="products-page">
                {/* Hero — matches product page/code.html */}
                <section className="relative mx-auto max-w-container-max px-gutter pb-32 pt-24 text-center">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#0057c2]/10 bg-white/50 px-4 py-1.5 backdrop-blur-sm dark:border-primary/20 dark:bg-surface-container/50">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#0057c2] opacity-75 dark:bg-primary" />
                            <span className="relative inline-flex size-2 rounded-full bg-[#0057c2] dark:bg-primary" />
                        </span>
                        <span className="text-label-sm font-bold uppercase tracking-widest text-[#0057c2] dark:text-primary">
                            Unified Solutions
                        </span>
                    </div>

                    <h1 className="mb-8 text-[4rem] font-extrabold leading-[1.1] tracking-tight text-[#1a1c1e] md:text-[5.5rem] dark:text-on-surface">
                        <span className="products-gradient-text">Product</span> Ecosystem.
                    </h1>

                    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-[#44474e] dark:text-on-surface-variant">
                        A comprehensive suite of enterprise-grade tools engineered to work in perfect harmony. From
                        automated deployment to AI-driven security, we build the foundation of modern infrastructure.
                    </p>

                    <div className="flex flex-col justify-center gap-6 sm:flex-row">
                        <a
                            href="#products"
                            className="rounded-full bg-[#0057c2] px-10 py-5 text-sm font-semibold text-white shadow-xl shadow-[#0057c2]/20 transition-all hover:scale-105 dark:bg-primary dark:text-inverse-surface dark:shadow-primary/20"
                        >
                            Discover Our Suite
                        </a>
                        <a
                            href="#labs"
                            className="flex items-center justify-center gap-2 rounded-full border border-[#74777f]/20 px-10 py-5 text-sm font-semibold text-[#1a1c1e] transition-all hover:bg-white dark:border-outline/30 dark:text-on-surface dark:hover:bg-surface-container"
                        >
                            System Overview <ArrowRight className="size-4" />
                        </a>
                    </div>
                </section>

                {/* Product gateways */}
                <div id="products" className="mx-auto mb-stack-xl max-w-container-max space-y-stack-xl px-gutter">
                    {/* ProLampX Installer */}
                    <section className="product-gradient-bg group relative overflow-hidden rounded-[3rem] border border-black/[0.08] bg-white dark:border-border-subtle dark:bg-surface-container">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="order-2 p-12 lg:order-1 lg:p-20">
                                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-[#0057c2]/10 text-[#0057c2] dark:bg-primary/10 dark:text-primary">
                                    <RefreshCw className="size-8" strokeWidth={1.25} />
                                </div>
                                <h2 className="mb-6 text-[32px] font-bold leading-10 tracking-tight text-[#1a1c1e] dark:text-on-surface">
                                    ProLampX Installer
                                </h2>
                                <p className="mb-10 text-base leading-relaxed text-[#44474e] dark:text-on-surface-variant">
                                    Orchestrate complex deployments with surgical precision. Our installer automates
                                    multi-node environments with zero-downtime guarantees and intelligent rollback
                                    capabilities.
                                </p>
                                <Link
                                    href="/installer"
                                    className="group/btn inline-flex items-center gap-4 rounded-full bg-[#2f3033] px-8 py-4 text-sm font-semibold text-[#f1f0f4] transition-all hover:bg-[#0057c2] dark:bg-on-surface dark:text-background dark:hover:bg-primary dark:hover:text-inverse-surface"
                                >
                                    Explore ProLampX Installer
                                    <ExternalLink className="size-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                            <div className="relative order-1 h-[400px] min-h-[500px] overflow-hidden bg-[#f1f3f8] lg:order-2 lg:h-full dark:bg-surface-container-high">
                                <img
                                    alt="Installer Visualization"
                                    className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASiaaU7NAPIk9Wkx3vifdAyPwqiZ9VijYXoeJQV33MQIhBYpzrw2gaxFgihEToN_D5GEx8STMzO1-8kMCmhBf1tI2voQON3rSYyLprtfcfb6t3zRwiNIqU_p4ILJg0G3bQMWNfhLGeJhlJbrBzvBW9ON6zWnd04yEKCk3iMkyhJdD7LtDNefmFp-FiSPKxLcHNgubKduwDUCWdzMJIEoJMuuWBhbbQVNjXGKpsFCFSkpETdLPLzy5qmlJD-YWACrgj-HLC_4Ue6GpP"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10 lg:to-white/20 dark:to-black/10" />
                            </div>
                        </div>
                    </section>

                    {/* InsightEngine */}
                    <section className="product-gradient-bg group relative overflow-hidden rounded-[3rem] border border-black/[0.08] bg-white dark:border-border-subtle dark:bg-surface-container">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="relative h-[400px] min-h-[500px] overflow-hidden bg-[#f1f3f8] lg:h-full dark:bg-surface-container-high">
                                <img
                                    alt="InsightEngine Visualization"
                                    className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUjIZOA2RXHY2-FUixN0sRdpV7f5hsULrkTLdlRsg7dwZamS0CMLccZ8w4CjMMzXeCeLEfOXnTBrVuQ6tI-mLwk9amVP0cXM4DBsi9w623aYBOwBI2gf5tR27csQaBraOs7QZnkALr-iJktrwVpoejB9lXfuCOKSzE4qhlL6tRAtWkIMhX940OGEJFzl0G4yEAWA4vG-TDJ5DA6o4wzY9Ad-cKi-jMmWIh1Ku9uELEA8rSJ0GqfDQfXPNlDaJ3oBqCZhWo1OdBkp3H"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 lg:to-white/20 dark:to-black/10" />
                            </div>
                            <div className="p-12 lg:p-20">
                                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-[#0057c2]/10 text-[#0057c2] dark:bg-primary/10 dark:text-primary">
                                    <Activity className="size-8" strokeWidth={1.25} />
                                </div>
                                <h2 className="mb-6 text-[32px] font-bold leading-10 tracking-tight text-[#1a1c1e] dark:text-on-surface">
                                    InsightEngine
                                </h2>
                                <p className="mb-10 text-base leading-relaxed text-[#44474e] dark:text-on-surface-variant">
                                    Transform raw logs into actionable intelligence. InsightEngine uses proprietary
                                    neural networks to predict infrastructure anomalies before they affect performance.
                                </p>
                                <Link
                                    href="/contact"
                                    className="group/btn inline-flex items-center gap-4 rounded-full bg-[#2f3033] px-8 py-4 text-sm font-semibold text-[#f1f0f4] transition-all hover:bg-[#0057c2] dark:bg-on-surface dark:text-background dark:hover:bg-primary dark:hover:text-inverse-surface"
                                >
                                    Explore InsightEngine
                                    <ExternalLink className="size-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* SecureAuth Pro */}
                    <section className="product-gradient-bg group relative overflow-hidden rounded-[3rem] border border-black/[0.08] bg-white dark:border-border-subtle dark:bg-surface-container">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="order-2 p-12 lg:order-1 lg:p-20">
                                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-[#0057c2]/10 text-[#0057c2] dark:bg-primary/10 dark:text-primary">
                                    <Shield className="size-8" strokeWidth={1.25} />
                                </div>
                                <h2 className="mb-6 text-[32px] font-bold leading-10 tracking-tight text-[#1a1c1e] dark:text-on-surface">
                                    SecureAuth Pro
                                </h2>
                                <p className="mb-10 text-base leading-relaxed text-[#44474e] dark:text-on-surface-variant">
                                    The gold standard in zero-trust identity. SecureAuth Pro implements hardware-backed
                                    attestation and multi-region synchronization for unbreakable access control.
                                </p>
                                <Link
                                    href="/contact"
                                    className="group/btn inline-flex items-center gap-4 rounded-full bg-[#2f3033] px-8 py-4 text-sm font-semibold text-[#f1f0f4] transition-all hover:bg-[#0057c2] dark:bg-on-surface dark:text-background dark:hover:bg-primary dark:hover:text-inverse-surface"
                                >
                                    Explore SecureAuth Pro
                                    <ExternalLink className="size-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                            <div className="relative order-1 h-[400px] min-h-[500px] overflow-hidden bg-[#f1f3f8] lg:order-2 lg:h-full dark:bg-surface-container-high">
                                <img
                                    alt="Security Visualization"
                                    className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5VHq-RfZhSiMHva67JVCJXfORf5WMi0EB4OT4-DoATbw6ZEU__8iMrokFiBMckbk4OW7x49l-hrWZTn2ipFm3RXf6CTR3y39Uy9FNLJNAO3jBqE2Gn-C_3VC8UWIEmQcIPfftcP1eRvapskfZePb9mZK-lZqJCVQ4679D1Fu3GOa-qPRlgJP9OJf1rpPWPzkA8juIHE1ddZEccTd1Z2KBmX2VKNsCiLeTtQfJGidxRYkV0x-go4Msud11FRKGV03FBGzywp05gPBk"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10 lg:to-white/20 dark:to-black/10" />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Internal Labs */}
                <section id="labs" className="border-y border-black/[0.08] bg-[#f1f3f8] px-gutter py-stack-xl dark:border-border-subtle dark:bg-surface">
                    <div className="mx-auto max-w-container-max">
                        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
                            <div className="max-w-xl">
                                <h2 className="mb-4 text-[32px] font-bold leading-10 tracking-tight text-[#1a1c1e] dark:text-on-surface">
                                    Internal Labs
                                </h2>
                                <p className="text-base text-[#44474e] dark:text-on-surface-variant">
                                    Where engineering meets curiosity. Explore the experimental modules and core
                                    technical specifications currently in development within our obsidian clusters.
                                </p>
                            </div>
                            <Link
                                href="/blog"
                                className="flex items-center gap-2 text-sm font-semibold text-[#0057c2] hover:underline dark:text-primary"
                            >
                                View Technical Whitepapers <ArrowUpRight className="size-4" />
                            </Link>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="products-glass-card rounded-[2.5rem] p-10">
                                <div className="mb-12 flex items-start justify-between">
                                    <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-surface-container-high">
                                        <Terminal className="size-5 text-[#0057c2] dark:text-primary" strokeWidth={1.5} />
                                    </div>
                                    <span className="rounded bg-[#0057c2]/5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0057c2] dark:bg-primary/10 dark:text-primary">
                                        Experimental
                                    </span>
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-[#1a1c1e] dark:text-on-surface">
                                    TitanOS Kernel v4.2
                                </h3>
                                <div className="mb-8 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#44474e] dark:text-on-surface-variant">Interrupt Latency</span>
                                        <span className="font-bold">&lt; 0.5ms</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#44474e] dark:text-on-surface-variant">Memory Footprint</span>
                                        <span className="font-bold">12MB Core</span>
                                    </div>
                                </div>
                                <p className="mb-6 text-sm leading-relaxed text-[#44474e] dark:text-on-surface-variant">
                                    Optimized for high-density edge deployments with proprietary scheduling algorithms.
                                </p>
                                <div className="h-1 overflow-hidden rounded-full bg-[#f1f3f8] dark:bg-surface-container-highest">
                                    <div className="h-full w-[92%] bg-[#0057c2] dark:bg-primary" />
                                </div>
                            </div>

                            <div className="products-glass-card rounded-[2.5rem] p-10">
                                <div className="mb-12 flex items-start justify-between">
                                    <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-surface-container-high">
                                        <Cloud className="size-5 text-[#0057c2] dark:text-primary" strokeWidth={1.5} />
                                    </div>
                                    <span className="rounded bg-[#0057c2]/5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0057c2] dark:bg-primary/10 dark:text-primary">
                                        Beta
                                    </span>
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-[#1a1c1e] dark:text-on-surface">CloudMirror V2</h3>
                                <div className="mb-8 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#44474e] dark:text-on-surface-variant">Sync Throughput</span>
                                        <span className="font-bold">10GB/s</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#44474e] dark:text-on-surface-variant">Conflict Resolution</span>
                                        <span className="font-bold">CRDT-based</span>
                                    </div>
                                </div>
                                <p className="mb-6 text-sm leading-relaxed text-[#44474e] dark:text-on-surface-variant">
                                    Distributed database mirroring with multi-region eventual consistency guarantees.
                                </p>
                                <div className="h-1 overflow-hidden rounded-full bg-[#f1f3f8] dark:bg-surface-container-highest">
                                    <div className="h-full w-[78%] bg-[#0057c2] dark:bg-primary" />
                                </div>
                            </div>

                            <div className="products-glass-card rounded-[2.5rem] p-10">
                                <div className="mb-12 flex items-start justify-between">
                                    <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-surface-container-high">
                                        <Lock className="size-5 text-[#0057c2] dark:text-primary" strokeWidth={1.5} />
                                    </div>
                                    <span className="rounded bg-[#e1e2e5] px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#44474e] dark:bg-surface-container-highest dark:text-on-surface-variant">
                                        Internal
                                    </span>
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-[#1a1c1e] dark:text-on-surface">
                                    MeshNet Quantum
                                </h3>
                                <div className="mb-8 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#44474e] dark:text-on-surface-variant">Encryption Level</span>
                                        <span className="font-bold">PQC-256</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#44474e] dark:text-on-surface-variant">Node Capacity</span>
                                        <span className="font-bold">100k+</span>
                                    </div>
                                </div>
                                <p className="mb-6 text-sm leading-relaxed text-[#44474e] dark:text-on-surface-variant">
                                    The future of secure communication. Quantum-resistant tunneling for global networks.
                                </p>
                                <div className="h-1 overflow-hidden rounded-full bg-[#f1f3f8] dark:bg-surface-container-highest">
                                    <div className="h-full w-[45%] bg-[#74777f]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="mx-auto max-w-container-max px-gutter py-stack-xl">
                    <div className="group relative h-[600px] w-full overflow-hidden rounded-[3.5rem] shadow-2xl">
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                        <div
                            className="size-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXS3mDZUIzPc50KjRzJ0pjSFAzntp7fFne7TzjFaKYghRqQ4fOuHuJexXN38vazGL-5UgtdeZ6aQxpbUVPiv8wh1z0vAZZbpyYkfwf8BAOiEBIlhGcGm6st00Iq0R5itnqoPc9LCcyZvh6TGiDkdjSWKQcqFli-OXr4ux6NM-D0rCKAPGxckpsJX3wqiL46-2-CxT7C45YOpSz910iY_TsCVXEVuJZvCFmuy6LRuM8k9kD35AtfdOOTD9RfD9olKz431EMnRDf0Zw7')",
                            }}
                        />
                        <div className="absolute inset-0 z-20 flex items-center px-12 md:px-24">
                            <div className="max-w-2xl text-white">
                                <span className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-[#d6e3ff]">
                                    Ecosystem Forge
                                </span>
                                <h2 className="mb-8 text-5xl font-extrabold leading-tight md:text-7xl">
                                    Elite engineering for elite teams.
                                </h2>
                                <p className="mb-12 max-w-lg text-lg text-white/80">
                                    Join the 4,000+ organizations leveraging ProLampX Labs to build the next generation
                                    of digital infrastructure.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block rounded-full bg-white px-10 py-5 text-sm font-semibold text-[#1a1c1e] transition-all hover:scale-105 hover:bg-[#d6e3ff]"
                                >
                                    Request Ecosystem Access
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
