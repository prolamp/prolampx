import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Image from "@/components/ui/Image";
import { useTheme } from "@mui/material/styles";

const trustStats = [
  { value: "50+", label: "Projects delivered" },
  { value: "8+", label: "Years experience" },
  { value: "4.9/5", label: "Client satisfaction" },
  { value: "24h", label: "Average response" },
];

const HeroSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const headingColor = isDark ? "primary.white" : "primary.dark";
  const bodyColor = isDark ? "primary.white" : "secondary.contrastText";

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box className="hero-gradient" sx={{ position: "absolute", inset: 0, zIndex: 0 }} />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid2 container spacing={6} alignItems="center">
          <Grid2 size={{ xs: 12, lg: 6 }}>
            <Stack spacing={3}>
              <Chip
                label="Web & Mobile Development Studio"
                sx={{
                  alignSelf: { xs: "center", lg: "flex-start" },
                  bgcolor: isDark ? "rgba(79, 140, 255, 0.12)" : "rgba(59, 130, 246, 0.12)",
                  color: isDark ? "secondary.main" : "primary.dark",
                  fontWeight: 600,
                  border: isDark
                    ? "1px solid rgba(79, 140, 255, 0.25)"
                    : "1px solid rgba(59, 130, 246, 0.2)",
                }}
              />

              <Typography
                variant="h1"
                component="h1"
                color={headingColor}
                sx={{ textAlign: { xs: "center", lg: "left" } }}
              >
                Build intelligent digital products that grow your business
              </Typography>

              <Typography
                variant="body1"
                component="p"
                color={bodyColor}
                sx={{
                  opacity: 0.88,
                  maxWidth: 620,
                  textAlign: { xs: "center", lg: "left" },
                  mx: { xs: "auto", lg: 0 },
                }}
              >
                ProLampX designs and develops high-performing websites, web apps, and mobile apps with modern UX, scalable architecture, and reliable delivery.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                }}
              >
                <Button
                  className="shadow-white"
                  variant="contained"
                  size="large"
                  color="primary"
                  component="a"
                  href="/contact"
                >
                  Start a project
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="/#services"
                  sx={{
                    color: isDark ? "primary.white" : "primary.dark",
                    borderColor: isDark ? "rgba(255,255,255,0.35)" : "rgba(27,54,93,0.25)",
                    "&:hover": {
                      borderColor: isDark ? "primary.white" : "primary.dark",
                      backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(27,54,93,0.05)",
                    },
                  }}
                >
                  View services
                </Button>
              </Stack>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 6 }}>
            <Box
              className="hero-float"
              sx={{
                position: "relative",
                minHeight: { xs: 280, md: 420 },
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid",
                borderColor: isDark ? "rgba(148, 163, 184, 0.18)" : "rgba(27, 54, 93, 0.1)",
                boxShadow: isDark
                  ? "0 24px 80px rgba(0,0,0,0.35)"
                  : "0 24px 60px rgba(27, 54, 93, 0.12)",
              }}
            >
              <Image
                src="/images/banners/bg-hero.webp"
                alt="ProLampX development workspace"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: isDark
                    ? "linear-gradient(180deg, rgba(11,17,32,0.05) 0%, rgba(11,17,32,0.55) 100%)"
                    : "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(27,54,93,0.08) 100%)",
                }}
              />
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Grid2 container spacing={2}>
              {trustStats.map((stat) => (
                <Grid2 key={stat.label} size={{ xs: 6, md: 3 }}>
                  <Box className="trust-stat">
                    <Typography variant="h4" component="p" color={headingColor} fontWeight={700}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color={bodyColor} sx={{ opacity: 0.8 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default HeroSection;
