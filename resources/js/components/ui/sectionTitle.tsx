import { Typography } from "@mui/material";
import React from "react";

interface TitleProps {
    titleText: string;
    textColor?: string;
}

const SectionTitle: React.FC<TitleProps> = ({ titleText, textColor = "secondary.dark" }) => {
    return (
        <Typography
            variant="h2"
            component="h2"
            mb={{ xs: "14px", md: "30px" }}
            position="relative"
            sx={{
                color: textColor,
                "&::before": {
                    content: '""',
                    background: "linear-gradient(90deg, var(--secondary-color), transparent)",
                    height: "3px",
                    width: "72px",
                    position: "absolute",
                    bottom: "-12px",
                    left: "0",
                    borderRadius: 999,
                },
            }}
        >
            {titleText}
        </Typography>
    );
};

export default SectionTitle;
