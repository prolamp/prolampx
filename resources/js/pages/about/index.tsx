import { Link } from '@inertiajs/react';
import {
    BadgeCheck,
    Eye,
    GraduationCap,
    Handshake,
    Home,
    Lightbulb,
} from 'lucide-react';
import SeoHead from '@/components/seo-head';
import PublicLayout from '@/layouts/public-layout';

type Props = {
    seo: { title: string; description?: string; keywords?: string; image?: string | null; canonical?: string | null };
};

const values = [
    {
        icon: BadgeCheck,
        title: 'Quality',
        body: "Precision is not an option; it's our standard. We maintain rigorous QA cycles for every deployment.",
    },
    {
        icon: Eye,
        title: 'Transparency',
        body: 'Clear communication and open-source contributions are at the heart of our operations.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        body: "We don't just use tools; we build them. Constantly evolving our stack to stay ahead.",
    },
    {
        icon: Handshake,
        title: 'Client Success',
        body: 'Your growth is our metric for success. We partner with you for the long-term journey.',
    },
];

const showLeadershipTeam = false;

const leaders = [
    {
        name: 'Marcus Thorne',
        role: 'Chief Executive Officer',
        bio: 'With 20 years in enterprise IT, Marcus leads our strategic vision and partnership initiatives.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvQK0es9sRl6vEF3uSFjMwVsgS94xBXMS9sBaIc0ySTzraINk3CfzdND41emuP7dCwrHo5eC-UC-jbCPGbbovtmqjH8NlDbwt1NlyhRC6iY-qwCDfi84HbqrfSDvejhyHfb28Y43kcwKbWBLH_-IVbI4aw2dmqU8liY6vP3vQjzqyjNVrqPiMIXjh6FYcZ7SKpRdrLxskvpiYulL3avsutFZyW_3KVtAOw5OZNjAC8yafAn59nZ3x1lvll0tO0RqwyuoqETzNY6phE',
    },
    {
        name: 'Dr. Elena Chen',
        role: 'Chief Technology Officer',
        bio: 'An expert in distributed systems and cloud architecture, Elena oversees all engineering efforts.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgwygB3mJjQfDmGal-2U6t2-mQtL9Sp75ql2HRJFiWY07tlfoCl52UIW7GLzNtYNP5__Y8qKUtGUb_R0GO0n5We4giDFDRAvzgW5_Q2LIXj_1sUc3yaNW6VTx-lqHDjg23StrwgyUo8VgTGshn4kR5sKxtoGZmo87inNikk8saZ_2X6_bsmAyFBBhHG4l8zEz3Z9dqNG_bZ9F2U3APxK1m6Ykk8k_JV1sfNfRxeefgLEt3aHr0zXBW4WDplJzq3G-g3j5C_C2BW0-P',
    },
    {
        name: 'Julian Vane',
        role: 'Design Lead',
        bio: 'Julian ensures our technical tools remain approachable, intuitive, and aesthetically superior.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-POQHUSvr8jI-kC4jHtz8vYbENmijrWi8fEdxxySJsag19TPiGl_h0yGbZ4eHYJVAaOOuUi4L7Zyx3dNozp5S4hHpShmgeP0xn4k8oQfJ11s2u2NVJkZ-XBdyn4-b9EOO33mitOWoNzYvFZOgZJMh3VYzo6JJoArMPX0vJLCo9-fgzg4jgVp9O9ylFdCCmW2BtSCbf-iMmc1AxpmCV5kDeZ9AU_PlBT4hgzRYutnEP9oDn72QlQNAJkkgGHYmDuxs-y0WkOUTVcrl',
    },
];

export default function AboutIndex({ seo }: Props) {
    return (
        <PublicLayout fullBleed>
            <SeoHead {...seo} type="website" />

            <section className="mx-auto max-w-container-max px-margin-mobile py-stack-xl">
                <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl md:aspect-[21/9]">
                    <img
                        alt="Modern tech office with a collaborative IT team"
                        className="size-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvR46lITDKTFEwV2BNAsCdyEffTFZvwA0bDxQa2UFOecrxkPj0X0yfezr1ZJAsBeYl8CaFjgVZ6Zsm2zvH7C2a_PxQQze0T4zqMMW4sABoFgf0BCn9d1eY8hCCS14WdFY3WDUw5g3VvUc2kP2ChHiKZ9PYEXoGhicaLtU2J82f-OIMSpJbCD5ZoygiHCx7KnRYqewUZq74_8tOya3ZFJ867rgE5ANh8PiDQsIxs846CxHDPF_s9MJ-qNzFZPQrjvqR3FJrVRJnF0xd"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-gutter md:p-stack-xl">
                        <h1 className="max-w-2xl text-headline-xl-mobile font-extrabold text-white md:text-headline-xl">
                            Engineering Excellence, Delivered.
                        </h1>
                        <p className="mt-stack-sm max-w-xl text-body-lg text-white/80">
                            We build the infrastructure that powers the next generation of enterprise software solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-low py-stack-xl dark:bg-surface">
                <div className="mx-auto max-w-container-max px-margin-mobile">
                    <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
                        <div className="flex flex-col justify-center md:col-span-7">
                            <span className="mb-4 text-label-sm font-bold uppercase tracking-wider text-secondary dark:text-primary">
                                Our Genesis
                            </span>
                            <h2 className="mb-stack-md text-headline-lg font-bold text-primary dark:text-on-surface">
                                Bridging the Gap
                            </h2>
                            <div className="space-y-stack-md text-body-md leading-relaxed text-on-surface-variant">
                                <p>
                                    Founded in 2018, ProLampX emerged from a single observation: enterprise systems were
                                    too rigid, and agile startups were too fragmented. We set out to create a middle
                                    ground—engineering solutions that possess the robustness of enterprise architecture
                                    with the speed and flexibility of modern DevOps.
                                </p>
                                <p>
                                    Today, we serve as the technical backbone for over 500 global firms, providing the
                                    tools and expertise needed to navigate the complexities of digital transformation
                                    without sacrificing stability.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:col-span-5">
                            <div className="flex flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface-container-lowest/70 p-gutter text-center backdrop-blur-md dark:bg-surface-container">
                                <span className="text-headline-lg font-bold text-primary dark:text-on-surface">500+</span>
                                <span className="text-label-md text-on-surface-variant">Clients Globally</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-gutter text-center text-white dark:bg-primary-container">
                                <span className="text-headline-lg font-bold">99.9%</span>
                                <span className="text-label-md opacity-80">Uptime Delivered</span>
                            </div>
                            <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl bg-secondary p-gutter text-center text-white">
                                <span className="text-headline-lg font-bold">6+ Years</span>
                                <span className="text-label-md opacity-80">of Technical Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-stack-xl">
                <div className="mx-auto max-w-container-max px-margin-mobile">
                    <div className="mb-stack-xl text-center">
                        <h2 className="text-headline-lg font-bold text-primary dark:text-on-surface">Our Core Values</h2>
                        <p className="mt-2 text-on-surface-variant">
                            The principles that guide every line of code we write.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
                        {values.map(({ icon: Icon, title, body }) => (
                            <div
                                key={title}
                                className="group rounded-2xl border border-border-subtle bg-surface-container-lowest p-gutter transition-all hover:border-secondary dark:bg-surface-container dark:hover:border-primary/50"
                            >
                                <div className="mb-stack-md flex size-12 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors group-hover:bg-secondary group-hover:text-white dark:bg-surface-container-high dark:text-primary dark:group-hover:bg-primary dark:group-hover:text-on-primary">
                                    <Icon className="size-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="mb-2 text-headline-md font-bold text-primary dark:text-on-surface">
                                    {title}
                                </h3>
                                <p className="text-body-md text-on-surface-variant">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {showLeadershipTeam && (
                <section className="bg-surface-container-highest py-stack-xl dark:bg-surface-container-low">
                    <div className="mx-auto max-w-container-max px-margin-mobile">
                        <div className="mb-stack-xl">
                            <h2 className="text-headline-lg font-bold text-primary dark:text-on-surface">Leadership Team</h2>
                            <p className="text-on-surface-variant">
                                The visionaries steering ProLampX toward the future.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
                            {leaders.map((person) => (
                                <div
                                    key={person.name}
                                    className="group overflow-hidden rounded-2xl border border-border-subtle bg-surface-container-lowest shadow-sm dark:bg-surface-container"
                                >
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            alt={person.name}
                                            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            src={person.image}
                                        />
                                    </div>
                                    <div className="p-gutter">
                                        <h3 className="text-headline-md font-bold text-primary dark:text-on-surface">
                                            {person.name}
                                        </h3>
                                        <p className="mb-4 text-label-md text-secondary dark:text-primary">{person.role}</p>
                                        <p className="text-body-md text-on-surface-variant">{person.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-stack-xl">
                <div className="mx-auto max-w-container-max px-margin-mobile">
                    <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-2">
                        <div>
                            <h2 className="mb-stack-md text-headline-lg font-bold text-primary dark:text-on-surface">
                                Life at ProLampX
                            </h2>
                            <p className="mb-gutter text-body-md text-on-surface-variant">
                                We cultivate an environment of continuous learning and radical ownership. Our team
                                isn&apos;t just building software; they&apos;re solving the infrastructure puzzles of
                                tomorrow.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <Home className="mt-0.5 size-5 shrink-0 text-secondary dark:text-primary" />
                                    <div>
                                        <h3 className="text-label-md font-semibold text-primary dark:text-on-surface">
                                            Hybrid-First Model
                                        </h3>
                                        <p className="text-label-sm text-on-surface-variant">
                                            Work from where you are most productive.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <GraduationCap className="mt-0.5 size-5 shrink-0 text-secondary dark:text-primary" />
                                    <div>
                                        <h3 className="text-label-md font-semibold text-primary dark:text-on-surface">
                                            Annual Learning Credit
                                        </h3>
                                        <p className="text-label-sm text-on-surface-variant">
                                            We invest in your certifications and skillsets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square overflow-hidden rounded-2xl">
                                <img
                                    alt="Team collaborating around a whiteboard"
                                    className="size-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPqnA7AVogkBH-_lyhG8bTeiXbti3Itlme25qG8ORJKxHzN0h3NgR2k3e3zPVBU4dh7EI8Ys9Catcu8xqPlnBsFx8XcPIZdeqCideOwGUW2yL6RJf-DE1s3Kt8eDODLDERjAaDhlQ92BZ4d2Heipo8z7QzCmLz9AkPo6oZFJL45Mjq6qke5FIGfz2-VB7XNx8MgpEiCp9vjjpSbmay5XunZpi_GatFmCVsMo79vLsD2P_PTdV7BPsWUbjtcTGy-ZumvqXF5uwi31QD"
                                />
                            </div>
                            <div className="mt-8 aspect-[4/5] overflow-hidden rounded-2xl">
                                <img
                                    alt="Developer workspace with mechanical keyboard"
                                    className="size-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoMyCAu_iUK7ehLtCzrfdcQ2JPv1sBlYgp_ZzvjftiuZRECaFmW9940raf65DRkTuOr6JiP_KN9grv2pjQ0wWYwjvn_TtMYMYWU-KDT0_118l0gqRgThf595LtHLN1Jw4Kjo5xi8ztE2wGABoLHua1lK1WnBFAKyagpGjNt8sKSoYNjHIqEZQ5YAJ0lBqwdhFpY2JLVAuIjYNNDVTQrU8mWTKRSeXr_W2bTr318PuFFLSbZh8qx28dABRLsYTQxP-7DZLPPyT8pqKv"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-container-max px-margin-mobile py-stack-xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-primary-container p-gutter text-center md:p-stack-xl">
                    <div className="absolute -right-24 -top-24 size-64 rounded-full bg-secondary/20 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-primary/40 blur-3xl" />
                    <h2 className="relative z-10 mb-stack-md text-headline-xl-mobile font-extrabold text-white md:text-headline-xl">
                        Ready to build the future?
                    </h2>
                    <p className="relative z-10 mx-auto mb-stack-lg max-w-2xl text-body-lg text-on-primary-container">
                        Whether you&apos;re an enterprise looking for a reliable partner or a developer seeking your next
                        challenge, we want to hear from you.
                    </p>
                    <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="rounded-xl bg-secondary px-stack-lg py-4 text-label-md font-semibold text-white shadow-lg transition-all hover:bg-secondary-container active:scale-95"
                        >
                            Partner with us
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-xl border border-white/20 bg-white/10 px-stack-lg py-4 text-label-md font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
                        >
                            Join our team
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
