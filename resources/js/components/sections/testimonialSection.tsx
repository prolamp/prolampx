import { Star } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '@/data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSection() {
    return (
        <section className="relative overflow-hidden bg-primary py-stack-xl dark:bg-surface-container">
            <div className="software-grid-pattern pointer-events-none absolute inset-0 opacity-10" />
            <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile">
                <div className="mx-auto mb-stack-xl max-w-2xl text-center">
                    <h2 className="mb-4 text-headline-lg font-bold text-white dark:text-on-surface">
                        What Our Partners Say
                    </h2>
                    <p className="text-body-md text-on-primary-container dark:text-on-surface-variant">
                        We let our results speak through the words of our clients.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    className="partners-swiper !pb-12"
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={testimonials.length > 3}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id} className="!h-auto">
                            <div className="flex h-full min-h-[280px] flex-col rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md dark:border-border-subtle dark:bg-surface-container-high/40">
                                <div className="mb-4 flex gap-1 text-secondary-fixed dark:text-primary">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <Star key={i} className="size-5 fill-current" />
                                    ))}
                                </div>
                                <p className="mb-8 flex-grow italic text-white dark:text-on-surface-variant">
                                    &ldquo;{item.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex size-12 items-center justify-center rounded-full bg-secondary-container/20 font-bold text-white dark:bg-primary/20 dark:text-primary">
                                        {item.initials}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white dark:text-on-surface">{item.name}</div>
                                        <div className="text-label-sm text-on-primary-container dark:text-on-surface-variant">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .partners-swiper .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.45);
                    opacity: 1;
                }
                .partners-swiper .swiper-pagination-bullet-active {
                    background: #ffffff;
                }
                .dark .partners-swiper .swiper-pagination-bullet {
                    background: rgba(174, 199, 247, 0.35);
                }
                .dark .partners-swiper .swiper-pagination-bullet-active {
                    background: #aec7f7;
                }
            `}</style>
        </section>
    );
}
