"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import RevealOnScroll from "@/components/ui/revealOnScroll";

const CtaSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, #1B365D 0%, #4F8CFF 100%)",
      }}
    >
      <Container maxWidth="xl">
        <RevealOnScroll>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Box sx={{ maxWidth: 720 }}>
              <Typography variant="h3" component="h2" color="primary.white" sx={{ mb: 1.5 }}>
                Ready to launch something great?
              </Typography>
              <Typography variant="body1" sx={{ color: "primary.white", opacity: 0.9 }}>
                Partner with ProLampX to design, build, and scale your next website or application.
              </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                component="a"
                href="/contact"
                sx={{
                  background: "#ffffff",
                  backgroundImage: "none",
                  color: "#0f2440",
                  fontWeight: 600,
                  px: 3,
                  boxShadow: "0 8px 24px rgba(11, 17, 32, 0.18)",
                  "&:hover": {
                    background: "#f8fafc",
                    backgroundImage: "none",
                    boxShadow: "0 12px 28px rgba(11, 17, 32, 0.22)",
                  },
                }}
              >
                Start a project
              </Button>
              <Button
                variant="outlined"
                component="a"
                href="/#services"
                sx={{
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.55)",
                  borderWidth: "1.5px",
                  px: 3,
                  "&:hover": {
                    borderColor: "#ffffff",
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderWidth: "1.5px",
                  },
                }}
              >
                Explore services
              </Button>
            </Stack>
          </Stack>
        </RevealOnScroll>
      </Container>
    </Box>
  );
};

export default CtaSection;
