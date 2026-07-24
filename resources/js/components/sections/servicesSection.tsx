import { CheckCircle2, Smartphone, Terminal, Users } from 'lucide-react';

const services = [
    {
        icon: Terminal,
        title: 'Web Development',
        body: 'Building scalable, accessible, and high-performance web applications using React, Vue, and modern cloud architectures.',
        items: ['Single Page Applications', 'E-commerce Platforms', 'Enterprise Portals'],
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        body: 'Native and cross-platform mobile solutions that deliver seamless user experiences on iOS and Android.',
        items: ['iOS & Android (Native)', 'Flutter & React Native', 'Mobile Strategy & UI/UX'],
    },
    {
        icon: Users,
        title: 'Staff Augmentation',
        body: 'Rent-a-Service model to scale your team quickly with our senior developers, QA engineers, or designers.',
        items: ['Dedicated Dev Teams', 'Tech Lead Consulting', 'Flexible Monthly Contracts'],
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-surface-container-lowest py-stack-xl dark:bg-background" id="services">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <div className="mb-stack-xl flex flex-col items-end justify-between gap-4 md:flex-row">
                    <div className="max-w-xl">
                        <h2 className="mb-2 text-headline-lg font-bold text-primary dark:text-on-surface">Our Services</h2>
                        <p className="text-body-md text-on-surface-variant">
                            Expertise that scales with your ambition. We provide end-to-end development and specialized
                            talent.
                        </p>
                    </div>
                    <a
                        href="/contact"
                        className="flex items-center gap-2 text-label-md font-semibold text-secondary hover:underline dark:text-primary"
                    >
                        Start a project
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
                    {services.map(({ icon: Icon, title, body, items }) => (
                        <div
                            key={title}
                            className="card-hover-up group rounded-[32px] border border-border-subtle bg-surface-container-low p-stack-lg transition-all hover:border-secondary dark:bg-surface-container dark:hover:border-primary/50"
                        >
                            <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-surface-container-lowest text-secondary shadow-sm transition-transform group-hover:scale-110 dark:border dark:border-border-subtle dark:bg-surface-container-highest dark:text-primary">
                                <Icon className="size-10" strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-3 text-headline-md font-bold text-primary dark:text-on-surface">{title}</h3>
                            <p className="mb-6 text-body-md leading-relaxed text-on-surface-variant">{body}</p>
                            <ul className="flex flex-col gap-3">
                                {items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-label-md text-on-surface-variant">
                                        <CheckCircle2 className="size-[18px] shrink-0 text-secondary dark:text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
