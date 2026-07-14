import React, { useCallback, useEffect, useRef } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CustomSwiperSliderProps } from "@/interfaces";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const prevIcon = `<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
</svg></span>`;

const nextIcon = `<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
</svg></span>`;

const CustomSlider: React.FC<CustomSwiperSliderProps> = ({
  children,
  autoplay,
  pagination,
  navigation,
  loop,
  slidesPerView,
  breakpoints,
  className,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const applyNavButtons = useCallback(() => {
    if (!navigation || !sliderRef.current) return;

    const prevButton = sliderRef.current.querySelector(".swiper-button-prev");
    const nextButton = sliderRef.current.querySelector(".swiper-button-next");

    if (prevButton) {
      prevButton.classList.add("btn-swiper", "testimonials-nav-btn");
      prevButton.innerHTML = prevIcon;
    }
    if (nextButton) {
      nextButton.classList.add("btn-swiper", "testimonials-nav-btn");
      nextButton.innerHTML = nextIcon;
    }
  }, [navigation]);

  const handleSwiperInit = useCallback(
    (_swiper: SwiperInstance) => {
      applyNavButtons();
      requestAnimationFrame(applyNavButtons);
    },
    [applyNavButtons],
  );

  useEffect(() => {
    if (!navigation) return;
    applyNavButtons();
    const timer = window.setTimeout(applyNavButtons, 100);
    return () => window.clearTimeout(timer);
  }, [navigation, applyNavButtons, children]);

  return (
    <div ref={sliderRef} className={className} style={{ position: "relative" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={autoplay}
        pagination={pagination}
        loop={loop}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        navigation={navigation}
        breakpoints={breakpoints}
        onInit={handleSwiperInit}
      >
        {children}
      </Swiper>
    </div>
  );
};
export default CustomSlider