"use client";

import { Box, Stack, Typography } from "@mui/material";
import RevealOnScroll from "@/components/ui/revealOnScroll";
import { trustedClients } from "@/data/testimonials";

const marqueeClients = [...trustedClients, ...trustedClients];

const ClientLogosSection = () => {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 4, md: 5 },
                borderBottom: "1px solid",
                borderColor: "background.border",
                backgroundColor: "background.offWhite",
                overflow: "hidden",
            }}
        >
            <RevealOnScroll>
                <Typography
                    variant="overline"
                    align="center"
                    display="block"
                    sx={{ color: "secondary.contrastText", mb: 2.5, letterSpacing: "0.12em" }}
                >
                    Trusted by teams worldwide
                </Typography>
            </RevealOnScroll>

            <Box className="logo-marquee">
                <Stack direction="row" className="logo-marquee-track" spacing={2}>
                    {marqueeClients.map((client, index) => (
                        <Box key={`${client}-${index}`} className="logo-marquee-item">
                            {client}
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default ClientLogosSection;
