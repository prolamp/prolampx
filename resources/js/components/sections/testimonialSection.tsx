"use client";

import CustomSection from "@/components/ui/customSection";
import RevealOnScroll from "@/components/ui/revealOnScroll";
import SectionTitle from "@/components/ui/sectionTitle";
import CustomSlider from "@/components/swiper/customSlider";
import { SwiperSlide } from "swiper/react";
import {
  Avatar,
  Box,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTheme } from "@mui/material/styles";
import { testimonials } from "@/data/testimonials";

const metrics = [
  { value: "4.9/5", label: "Average client rating" },
  { value: "95%", label: "Repeat collaboration rate" },
  { value: "50+", label: "Successful deliveries" },
];

const customBreakpoints = {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1200: { slidesPerView: 3 },
};

const TestimonialSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const titleColor = isDark ? "primary.white" : "primary.dark";
  const bodyColor = isDark ? "primary.white" : "secondary.contrastText";
  const cardTextColor = isDark ? "primary.white" : "secondary.dark";
  const cardMutedColor = isDark ? "primary.white" : "secondary.contrastText";

  return (
    <CustomSection
      className="testimonials-section"
      backgroundColor={isDark ? "background.primary" : "background.offWhite"}
      backgroundImage={isDark ? "/images/feedback.webp" : undefined}
      sx={{ py: { xs: 8, md: 12 } }}
      overlayColor="var(--background-overlay)"
      id="testimonials"
    >
      <Stack spacing={5}>
        <RevealOnScroll>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <SectionTitle titleText="What clients say" textColor={titleColor} />
            <Typography variant="body1" sx={{ color: bodyColor, opacity: 0.85, maxWidth: 680, mt: 2 }}>
              Trusted by founders and teams who value quality, speed, and clear communication.
            </Typography>
          </Box>
        </RevealOnScroll>

        <Grid2 container spacing={2}>
          {metrics.map((metric, index) => (
            <Grid2 key={metric.label} size={{ xs: 12, md: 4 }}>
              <RevealOnScroll delay={index * 80}>
                <Box className="trust-stat" sx={{ textAlign: "center" }}>
                  <Typography variant="h4" color={titleColor} fontWeight={700}>
                    {metric.value}
                  </Typography>
                  <Typography variant="body2" color={bodyColor} sx={{ opacity: 0.8 }}>
                    {metric.label}
                  </Typography>
                </Box>
              </RevealOnScroll>
            </Grid2>
          ))}
        </Grid2>

        <RevealOnScroll delay={120}>
          <CustomSlider
            className="testimonials-slider"
            autoplay={true}
            pagination={false}
            navigation={true}
            loop={true}
            slidesPerView={3}
            breakpoints={customBreakpoints}
          >
            {testimonials.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Box sx={{ p: { xs: 1, md: 1.5 }, width: "100%" }}>
                  <Box
                    className="testimonial-card ls-shadow motion-hover"
                    sx={{
                      p: 3,
                      height: 280,
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    <FormatQuoteIcon sx={{ color: "secondary.main", fontSize: 28, flexShrink: 0 }} />
                    <Rating value={slide.rating} readOnly size="small" sx={{ mt: 1.5, flexShrink: 0 }} />
                    <Box
                      sx={{
                        flex: 1,
                        minHeight: 0,
                        overflowY: "auto",
                        mt: 1.5,
                        mb: 2,
                        pr: 0.5,
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ color: cardMutedColor, opacity: 0.92, lineHeight: 1.7 }}
                      >
                        “{slide.quote}”
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ flexShrink: 0 }}>
                      <Avatar sx={{ bgcolor: "secondary.main", color: "primary.white", width: 40, height: 40, flexShrink: 0 }}>
                        {slide.initials}
                      </Avatar>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: cardTextColor, fontWeight: 700, lineHeight: 1.3 }}
                        >
                          {slide.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: cardMutedColor, opacity: 0.75, display: "block", lineHeight: 1.3 }}
                        >
                          {slide.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </CustomSlider>
        </RevealOnScroll>
      </Stack>
    </CustomSection>
  );
};

export default TestimonialSection;
