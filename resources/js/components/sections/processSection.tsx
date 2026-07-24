const steps = [
    {
        n: '01',
        title: 'Discovery',
        body: 'Deep dive into requirements, business goals, and tech audit.',
    },
    {
        n: '02',
        title: 'Design',
        body: 'Prototyping and UX architecture focused on user success.',
    },
    {
        n: '03',
        title: 'Development',
        body: 'Agile sprints with continuous integration and testing.',
    },
    {
        n: '04',
        title: 'Deployment',
        body: 'Seamless launch with ongoing support and monitoring.',
    },
];

export default function ProcessSection() {
    return (
        <section className="bg-surface-container-low py-stack-xl dark:bg-surface" id="process">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <div className="mx-auto mb-stack-xl max-w-2xl text-center">
                    <h2 className="mb-4 text-headline-lg font-bold text-primary dark:text-on-surface">How We Work</h2>
                    <p className="text-body-md text-on-surface-variant">
                        A battle-tested methodology designed for speed, clarity, and excellence.
                    </p>
                </div>
                <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="absolute top-12 right-24 left-24 -z-10 hidden h-px bg-border-subtle lg:block" />
                    {steps.map((step) => (
                        <div key={step.n} className="group flex flex-col items-center text-center">
                            <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-border-subtle bg-surface-container-lowest text-xl font-bold text-primary shadow-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground dark:bg-surface-container dark:group-hover:text-inverse-surface">
                                {step.n}
                            </div>
                            <h4 className="mb-2 font-bold text-primary dark:text-on-surface">{step.title}</h4>
                            <p className="px-4 text-body-md text-on-surface-variant">{step.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
