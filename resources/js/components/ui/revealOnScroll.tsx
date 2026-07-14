"use client";

import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    delay = 0,
    className = "",
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <Box
            ref={ref}
            className={`reveal-on-scroll ${visible ? "is-visible" : ""} ${className}`.trim()}
            sx={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Box>
    );
};

export default RevealOnScroll;
