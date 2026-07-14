import {Box, Container, Stack} from "@mui/material";
import React from "react";
import {MainSectionProps} from "@/interfaces";
import Image from "@/components/ui/Image";


const MainSection: React.FC<MainSectionProps> = ({
                                                     sx,
                                                     overlayColor = "primary.overlay",
                                                     backgroundColor,
                                                     backgroundImage,
                                                     fullSection = true,
                                                     children
                                                 }) => {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: `${backgroundColor}`,
                minHeight: `${fullSection ? 'calc(100vh - 64px)' : '40vh'}`,
                "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: overlayColor,
                    zIndex: 1,
                },
                ...sx,
            }}
        >
            {backgroundImage &&
                <Image src={backgroundImage} alt={`banner`} fill sizes="100" priority style={{
                    objectFit: "cover",
                    objectPosition: 'top',
                }}
                />
            }
            <Container maxWidth="xl" sx={{position: "relative", zIndex: 2}}>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        minHeight: `${fullSection ? 'calc(100vh - 64px)' : '40vh'}`,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBlock:"16px",
                    }}>
                    {children}
                </Stack>

            </Container>
        </Box>
    )
}
export default MainSection;