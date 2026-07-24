"use client";

import CustomSection from "@/components/ui/customSection";
import RevealOnScroll from "@/components/ui/revealOnScroll";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "@/components/ui/Image";
import {
  Apple,
  CheckCircleOutline,
  Download,
  LaptopWindows,
  Terminal,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";

const highlights = [
  {
    title: "Pick your apps",
    description: "Browse free software and bundles for Windows, macOS, or Ubuntu.",
  },
  {
    title: "Download one file",
    description: "Get a single installer script tailored to your OS — .bat, .command, or .sh.",
  },
  {
    title: "Install safely",
    description: "Runs through official package managers: winget, Homebrew, or apt.",
  },
];

const InstallerSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <CustomSection
      id="installer"
      backgroundColor="background.offWhite"
      sx={{ py: { xs: 7, md: 10 } }}
    >
      <Stack spacing={4}>
        <RevealOnScroll>
          <Stack spacing={1.5}>
            <Chip
              label="Product"
              size="small"
              sx={{
                alignSelf: "flex-start",
                fontWeight: 700,
                bgcolor: isDark ? "rgba(79, 140, 255, 0.16)" : "rgba(27, 54, 93, 0.08)",
                color: isDark ? "secondary.main" : "primary.dark",
                border: "1px solid",
                borderColor: isDark ? "rgba(79, 140, 255, 0.28)" : "rgba(27, 54, 93, 0.12)",
              }}
            />
            <SectionTitle titleText="ProLampX Installer" />
            <Typography
              variant="body1"
              color="secondary.contrastText"
              sx={{ maxWidth: 720, mt: 1 }}
            >
              Set up a fresh PC or laptop in minutes. Choose the apps you need, download one installer,
              and let official package managers handle the rest — no shady mirrors, no guesswork.
            </Typography>
          </Stack>
        </RevealOnScroll>

        <Grid2 container spacing={4} alignItems="center">
          <Grid2 size={{ xs: 12, lg: 5 }}>
            <RevealOnScroll delay={80}>
              <Stack spacing={2.5}>
                {highlights.map((item, index) => (
                  <Box
                    key={item.title}
                    className="ls-shadow"
                    sx={{
                      display: "flex",
                      gap: 2,
                      p: 2.25,
                      borderRadius: "18px",
                      border: "1px solid",
                      borderColor: "background.border",
                      backgroundColor: "background.default",
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        background: "linear-gradient(135deg, #1B365D 0%, #4F8CFF 100%)",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" color="secondary.dark" sx={{ fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="secondary.contrastText" sx={{ mt: 0.5, lineHeight: 1.65 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
                  <Chip icon={<LaptopWindows />} label="Windows" size="small" sx={{ fontWeight: 600 }} />
                  <Chip icon={<Apple />} label="macOS" size="small" sx={{ fontWeight: 600 }} />
                  <Chip icon={<Terminal />} label="Ubuntu" size="small" sx={{ fontWeight: 600 }} />
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component="a"
                    href="/installer"
                    startIcon={<Download />}
                    className="shadow-white"
                    sx={{ px: 3 }}
                  >
                    Get Installer
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component="a"
                    href="/software"
                    sx={{
                      color: isDark ? "primary.white" : "primary.dark",
                      borderColor: isDark ? "rgba(255,255,255,0.28)" : "rgba(27,54,93,0.22)",
                      "&:hover": {
                        borderColor: isDark ? "primary.white" : "primary.dark",
                        bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(27,54,93,0.04)",
                      },
                    }}
                  >
                    Browse software
                  </Button>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ opacity: 0.85 }}>
                  <CheckCircleOutline sx={{ fontSize: 18, color: "secondary.main" }} />
                  <Typography variant="caption" color="secondary.contrastText">
                    Free · Official package managers · No account required
                  </Typography>
                </Stack>
              </Stack>
            </RevealOnScroll>
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 7 }}>
            <RevealOnScroll delay={140}>
              <Box
                className="ls-shadow"
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "background.border",
                  backgroundColor: "background.default",
                  minHeight: { xs: 240, md: 380 },
                }}
              >
                <Image
                  src="/images/blog/installer-page.png"
                  alt="ProLampX installer page — pick apps and download one setup file"
                  fill
                  sizes="(max-width: 1200px) 100vw, 55vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: isDark
                      ? "linear-gradient(180deg, transparent 55%, rgba(23,31,51,0.65) 100%)"
                      : "linear-gradient(180deg, transparent 60%, rgba(27,54,93,0.12) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </RevealOnScroll>
          </Grid2>
        </Grid2>
      </Stack>
    </CustomSection>
  );
};

export default InstallerSection;
