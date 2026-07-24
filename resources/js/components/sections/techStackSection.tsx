import { Cloud, Code2, Database, FileCode2, Smartphone, Terminal } from 'lucide-react';

const stack = [
    { icon: Terminal, label: 'React' },
    { icon: FileCode2, label: 'Node.js' },
    { icon: Smartphone, label: 'Swift' },
    { icon: Code2, label: 'Flutter' },
    { icon: Database, label: 'PostgreSQL' },
    { icon: Cloud, label: 'AWS' },
];

export default function TechStackSection() {
    return (
        <section className="border-y border-border-subtle bg-surface-container-lowest py-stack-xl dark:bg-surface">
            <div className="mx-auto max-w-container-max px-margin-mobile">
                <h2 className="mb-stack-lg text-center text-label-md font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                    Our Technology Stack
                </h2>
                <div className="grid grid-cols-2 items-center justify-items-center gap-stack-lg opacity-60 sm:grid-cols-4 md:grid-cols-6">
                    {stack.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex flex-col items-center gap-2">
                            <Icon className="size-12" strokeWidth={1.25} />
                            <span className="text-label-sm font-bold uppercase tracking-wider">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
