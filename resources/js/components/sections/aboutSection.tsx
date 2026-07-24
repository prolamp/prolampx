import { BadgeCheck, Globe, Users } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="bg-surface-container-low py-stack-xl dark:bg-surface" id="about">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="relative">
                        <div className="relative aspect-square overflow-hidden rounded-[40px] bg-primary-container shadow-2xl dark:border dark:border-border-subtle dark:bg-primary-container/30">
                            <div className="software-grid-pattern absolute inset-0 opacity-20 dark:opacity-10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Globe className="size-40 text-on-primary/20 dark:text-primary/10" strokeWidth={1} />
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md dark:border-white/5 dark:bg-surface-container/30">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-headline-lg font-bold text-white dark:text-primary">10+</div>
                                        <div className="text-label-sm uppercase text-white/70 dark:text-on-surface-variant">
                                            Years
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-headline-lg font-bold text-white dark:text-primary">150+</div>
                                        <div className="text-label-sm uppercase text-white/70 dark:text-on-surface-variant">
                                            Projects
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-headline-lg font-bold text-white dark:text-primary">Global</div>
                                        <div className="text-label-sm uppercase text-white/70 dark:text-on-surface-variant">
                                            Reach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-headline-lg font-bold text-primary dark:text-on-surface">
                            Global Expertise, Elite Engineering.
                        </h2>
                        <p className="text-body-lg leading-relaxed text-on-surface-variant">
                            ProLampX began with a simple mission: to bridge the gap between complex enterprise needs and
                            agile, modern software solutions. Today, we are a leading technology partner for companies
                            ranging from high-growth startups to Fortune 500 giants.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 rounded-2xl border border-border-subtle bg-surface-container-lowest p-4 shadow-sm dark:bg-surface-container-high">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary dark:border dark:border-primary/20 dark:bg-primary/10 dark:text-primary">
                                    <BadgeCheck className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary dark:text-on-surface">Uncompromising Quality</h4>
                                    <p className="text-body-md text-on-surface-variant">
                                        We follow rigorous engineering standards and automated testing to ensure
                                        zero-defect delivery.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 rounded-2xl border border-border-subtle bg-surface-container-lowest p-4 shadow-sm dark:bg-surface-container-high">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary dark:border dark:border-primary/20 dark:bg-primary/10 dark:text-primary">
                                    <Users className="size-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary dark:text-on-surface">Global Talent Pool</h4>
                                    <p className="text-body-md text-on-surface-variant">
                                        Our distributed team of senior architects and designers bring a diverse,
                                        world-class perspective.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
