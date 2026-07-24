"use client";

import CustomSection from "@/components/ui/customSection";
import RevealOnScroll from "@/components/ui/revealOnScroll";
import SectionTitle from "@/components/ui/sectionTitle";
import {
    Code,
    Dns,
    Layers,
    PhoneAndroid,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Stack,
  Typography
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Image from "@/components/ui/Image";
import { useTheme } from "@mui/material/styles";

interface ServiceCard {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    icon: React.ReactNode;
}

const services: ServiceCard[] = [
    {
        id: 1,
        title: "Frontend Development",
        description: "Pixel-perfect interfaces with reusable components, smooth interactions, and responsive layouts across every device.",
        tech: ["React", "Next.js", "Vue.js", "TypeScript"],
        image: "/images/service-front-end.webp",
        icon: <Code fontSize="medium" />,
    },
    {
        id: 2,
        title: "Backend Development",
        description: "Secure APIs, scalable services, and reliable data layers built for production workloads and long-term growth.",
        tech: ["Node.js", "Laravel", "REST APIs", "MySQL"],
        image: "/images/service-backend.webp",
        icon: <Dns fontSize="medium" />,
    },
    {
        id: 3,
        title: "Full Stack Solutions",
        description: "End-to-end product delivery from architecture and development through deployment, monitoring, and support.",
        tech: ["React", "Next.js", "Laravel", "AWS", "Vercel"],
        image: "/images/service-full-stack.webp",
        icon: <Layers fontSize="medium" />,
    },
    {
        id: 4,
        title: "Mobile Experiences",
        description: "Cross-platform mobile apps with intuitive UX and performance tuned for real users on iOS and Android.",
        tech: ["React Native", "API Integration", "Push Notifications", "App Store Ready"],
        image: "/images/service-front-end.webp",
        icon: <PhoneAndroid fontSize="medium" />,
    },
];

const ServiceCardItem = ({ service, delay }: { service: ServiceCard; delay: number }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <RevealOnScroll delay={delay}>
            <Box
                className="ls-shadow"
                sx={{
                    height: "100%",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "background.border",
                    backgroundColor: "background.default",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
                    "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: isDark ? "rgba(79, 140, 255, 0.45)" : "rgba(79, 140, 255, 0.35)",
                        boxShadow: isDark
                            ? "0 24px 50px rgba(0, 0, 0, 0.4)"
                            : "0 24px 50px rgba(27, 54, 93, 0.12)",
                    },
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        height: { xs: 140, md: 160 },
                        flexShrink: 0,
                    }}
                >
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                        style={{ objectFit: "cover" }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background: isDark
                                ? "linear-gradient(180deg, rgba(11,17,32,0.15) 0%, rgba(11,17,32,0.72) 100%)"
                                : "linear-gradient(180deg, rgba(27,54,93,0.05) 0%, rgba(15,36,64,0.55) 100%)",
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            left: 20,
                            bottom: -22,
                            width: 52,
                            height: 52,
                            borderRadius: "16px",
                            display: "grid",
                            placeItems: "center",
                            background: "linear-gradient(135deg, #1B365D 0%, #4F8CFF 100%)",
                            color: "#ffffff",
                            boxShadow: "0 10px 28px rgba(79, 140, 255, 0.4)",
                            border: "3px solid",
                            borderColor: "background.default",
                            zIndex: 1,
                        }}
                    >
                        {service.icon}
                    </Box>
                </Box>

                <Stack
                    spacing={1.75}
                    sx={{
                        p: { xs: 3, md: 3.5 },
                        pt: { xs: 4.5, md: 5 },
                        flex: 1,
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h3"
                        color="secondary.dark"
                        sx={{ fontWeight: 700, lineHeight: 1.3 }}
                    >
                        {service.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="secondary.contrastText"
                        sx={{
                            lineHeight: 1.7,
                            flex: 1,
                            opacity: isDark ? 0.92 : 1,
                        }}
                    >
                        {service.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ pt: 0.5 }}>
                        {service.tech.map((item) => (
                            <Chip
                                key={item}
                                label={item}
                                size="small"
                                sx={{
                                    height: 28,
                                    fontWeight: 600,
                                    fontSize: "0.75rem",
                                    bgcolor: isDark
                                        ? "rgba(79, 140, 255, 0.14)"
                                        : "rgba(27, 54, 93, 0.07)",
                                    color: isDark ? "#e2e8f0" : "#0f2440",
                                    border: "1px solid",
                                    borderColor: isDark
                                        ? "rgba(79, 140, 255, 0.22)"
                                        : "rgba(27, 54, 93, 0.1)",
                                    "& .MuiChip-label": { px: 1.25 },
                                }}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </RevealOnScroll>
    );
};

const ServicesSection = () => {
    return (
        <CustomSection backgroundColor="background.offWhite" id="services" sx={{ py: { xs: 8, md: 12 } }}>
            <Stack spacing={5}>
                <RevealOnScroll>
                    <SectionTitle titleText="Services" />
                    <Typography variant="body1" color="secondary.contrastText" sx={{ maxWidth: 720, mt: 2 }}>
                        Modern product teams need more than code. We deliver design-led engineering across frontend, backend, and full product delivery.
                    </Typography>
                </RevealOnScroll>

                <Grid2 container spacing={3}>
                    {services.map((service, index) => (
                        <Grid2 key={service.id} size={{ xs: 12, sm: 6 }}>
                            <ServiceCardItem service={service} delay={index * 90} />
                        </Grid2>
                    ))}
                </Grid2>
            </Stack>
        </CustomSection>
    );
};

export default ServicesSection;
