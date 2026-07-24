export const getTypography = (fontFamily: string) => ({
    fontFamily,
    htmlFontSize: 16,
    h1: {
        fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
    },
    h2: {
        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
    },
    h3: {
        fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
        fontWeight: 600,
        lineHeight: 1.35,
    },
    h4: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.4,
    },
    h5: {
        fontSize: "1.125rem",
        fontWeight: 600,
    },
    h6: {
        fontSize: "1rem",
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: "1rem",
        lineHeight: 1.6,
    },
    subtitle2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },
    body1: {
        fontSize: "1rem",
        lineHeight: 1.7,
    },
    body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
    },
    button: {
        fontSize: "0.9375rem",
        fontWeight: 600,
        textTransform: "none" as const,
    },
    caption: {
        fontSize: "0.75rem",
    },
    overline: {
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
    },
});
