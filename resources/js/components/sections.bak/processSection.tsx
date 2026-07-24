"use client";

import CustomSection from "@/components/ui/customSection";
import RevealOnScroll from "@/components/ui/revealOnScroll";
import SectionTitle from "@/components/ui/sectionTitle";
import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";

const steps = [
    {
        step: "01",
        title: "Discover",
        description: "We align on goals, users, scope, and success metrics.",
    },
    {
        step: "02",
        title: "Design",
        description: "We shape UX flows, UI direction, and technical architecture.",
    },
    {
        step: "03",
        title: "Build",
        description: "We develop in iterative milestones with clear communication.",
    },
    {
        step: "04",
        title: "Launch & Support",
        description: "We deploy, monitor, and improve your product after release.",
    },
];

const NODE_SIZE = 64;

const ProcessSection = () => {
    return (
        <CustomSection id="process" backgroundColor="background.offWhite" sx={{ py: { xs: 8, md: 10 } }}>
            <Stack spacing={5}>
                <RevealOnScroll>
                    <SectionTitle titleText="Our process" />
                    <Typography variant="body1" color="secondary.contrastText" sx={{ maxWidth: 680, mt: 2 }}>
                        A clear delivery framework that keeps projects predictable, transparent, and fast.
                    </Typography>
                </RevealOnScroll>

                <Box sx={{ position: "relative", pt: { xs: 0, md: 1 } }}>
                    {/* Horizontal connector (desktop) */}
                    <Box
                        aria-hidden
                        sx={{
                            display: { xs: "none", md: "block" },
                            position: "absolute",
                            top: NODE_SIZE / 2 + 8,
                            left: "12.5%",
                            right: "12.5%",
                            height: 3,
                            borderRadius: 999,
                            background: "linear-gradient(90deg, #1B365D 0%, #4F8CFF 100%)",
                            opacity: 0.9,
                            zIndex: 0,
                        }}
                    />
                    {/* Vertical connector (mobile) */}
                    <Box
                        aria-hidden
                        sx={{
                            display: { xs: "block", md: "none" },
                            position: "absolute",
                            top: NODE_SIZE / 2,
                            bottom: NODE_SIZE / 2,
                            left: NODE_SIZE / 2 - 1.5,
                            width: 3,
                            borderRadius: 999,
                            background: "linear-gradient(180deg, #1B365D 0%, #4F8CFF 100%)",
                            opacity: 0.9,
                            zIndex: 0,
                        }}
                    />

                    <Grid2 container spacing={{ xs: 3, md: 4 }} sx={{ position: "relative", zIndex: 1 }}>
                        {steps.map((item, index) => (
                            <Grid2 key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
                                <RevealOnScroll delay={index * 100}>
                                    <Stack
                                        direction={{ xs: "row", md: "column" }}
                                        spacing={2}
                                        alignItems={{ xs: "flex-start", md: "center" }}
                                        sx={{ textAlign: { xs: "left", md: "center" } }}
                                    >
                                        <Box
                                            sx={{
                                                flexShrink: 0,
                                                width: NODE_SIZE,
                                                height: NODE_SIZE,
                                                borderRadius: "50%",
                                                display: "grid",
                                                placeItems: "center",
                                                background: "linear-gradient(135deg, #1B365D 0%, #4F8CFF 100%)",
                                                color: "#ffffff",
                                                fontWeight: 700,
                                                fontSize: "1.25rem",
                                                boxShadow: "0 12px 30px rgba(79, 140, 255, 0.35)",
                                                border: "4px solid",
                                                borderColor: "background.offWhite",
                                            }}
                                        >
                                            {item.step}
                                        </Box>
                                        <Box sx={{ pt: { xs: 0.5, md: 0.5 } }}>
                                            <Typography variant="h5" component="h3" color="secondary.dark">
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="secondary.contrastText"
                                                sx={{ mt: 0.75, maxWidth: 260, mx: { xs: 0, md: "auto" } }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </RevealOnScroll>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
            </Stack>
        </CustomSection>
    );
};

export default ProcessSection;
