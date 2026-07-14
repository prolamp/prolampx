import { Box, Container } from "@mui/material";
import React from "react";
import { SxProps, Theme } from "@mui/system";
import Image from "@/components/ui/Image";

interface CustomSectionProps {
  backgroundImage?: string;
  backgroundColor?: string;
  fullSection?: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
  id?: string;
  overlayColor?: string;

}

const CustomSection: React.FC<CustomSectionProps> = ({
  sx,
  backgroundColor,
  backgroundImage,
  children,
  className,
  id,
  overlayColor="primary.overlay"
}) => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: `${backgroundColor}`,
        paddingBlock: { xs: "20px", md: "5%" },
        ...sx,
      }}
      className={className}
      id={id}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={`banner`}
            fill
            sizes="100"
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />

          <div style={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: overlayColor,
            zIndex: 1,
          }}></div>
        </>
      )}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2,height:"100%" }}>
        {children}
      </Container>
    </Box>
  );
};
export default CustomSection;
