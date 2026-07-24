import CustomSection from "@/components/ui/customSection";
import RevealOnScroll from "@/components/ui/revealOnScroll";
import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Image from "@/components/ui/Image";
import SectionTitle from "@/components/ui/sectionTitle";

const valuePoints = [
    {
        title: "Design-first approach",
        description: "Interfaces that look premium and communicate clearly.",
    },
    {
        title: "Performance-focused",
        description: "Fast, responsive experiences across devices and networks.",
    },
    {
        title: "Scalable delivery",
        description: "Architecture and code built to grow with your business.",
    },
];

const AboutSection = () => {
    return (
        <CustomSection id="about" backgroundColor="background.default" sx={{ py: { xs: 8, md: 12 } }}>
            <Stack spacing={4}>
                <RevealOnScroll>
                    <SectionTitle titleText="About ProLampX"/>
                </RevealOnScroll>

                <Grid2 container spacing={4} alignItems="center">
                    <Grid2 size={{ xs: 12, md: 5 }}>
                        <RevealOnScroll delay={80}>
                            <Box className="about-image" sx={{ position: "relative", minHeight: { xs: 220, md: 340 }, borderRadius: "20px", overflow: "hidden" }}>
                                <Image src="/images/about.webp" alt="ProLampX team collaboration" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }}/>
                            </Box>
                        </RevealOnScroll>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 7 }}>
                        <RevealOnScroll delay={140}>
                            <Stack spacing={2.5}>
                                <Typography variant="h3" component="h3" color="secondary.dark">
                                    We turn ideas into meaningful digital products
                                </Typography>
                                <Typography variant="body1" component="p" color="secondary.contrastText">
                                    We are a team of passionate developers and designers who build interactive, engaging web and mobile experiences. Great design is more than visual appeal — it should inspire, communicate, and create real business impact.
                                </Typography>
                                <Typography variant="body1" component="p" color="secondary.contrastText">
                                    Whether you are launching something new or improving an existing product, we help you move from concept to production with clarity and confidence.
                                </Typography>
                            </Stack>
                        </RevealOnScroll>
                    </Grid2>
                </Grid2>

                <Grid2 container spacing={2}>
                    {valuePoints.map((point, index) => (
                        <Grid2 key={point.title} size={{ xs: 12, md: 4 }}>
                            <RevealOnScroll delay={index * 90}>
                                <Box
                                    className="ls-shadow"
                                sx={{
                                    p: 3,
                                    borderRadius: "20px",
                                    border: "1px solid",
                                    borderColor: "background.border",
                                    backgroundColor: "background.default",
                                    height: "100%",
                                }}
                                >
                                    <Typography variant="h5" component="h4" color="secondary.dark" gutterBottom>
                                        {point.title}
                                    </Typography>
                                    <Typography variant="body2" color="secondary.contrastText">
                                        {point.description}
                                    </Typography>
                                </Box>
                            </RevealOnScroll>
                        </Grid2>
                    ))}
                </Grid2>
            </Stack>
        </CustomSection>
    );
};

export default AboutSection;
