"use client";

import { Box } from "@mui/material";
import React from "react";

interface MotionHoverProps {
    children: React.ReactNode;
    className?: string;
}

const MotionHover: React.FC<MotionHoverProps> = ({ children, className = "" }) => {
    return (
        <Box className={`motion-hover ${className}`.trim()} sx={{ height: "100%" }}>
            {children}
        </Box>
    );
};

export default MotionHover;
