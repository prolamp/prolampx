export const branding = {
    logo: {
        forLightBackground: "/logo/black-prolamp-logo.svg",
        forDarkBackground: "/logo/white-prolamp-logo.svg",
    },
    favicon: "/logo/white-favicon.svg",
} as const;

export type LogoSurface = "auto" | "dark" | "light";

export const getLogoSrc = (mode: "light" | "dark", surface: LogoSurface = "auto") => {
    if (surface === "dark") {
        return branding.logo.forDarkBackground;
    }

    if (surface === "light") {
        return branding.logo.forLightBackground;
    }

    return mode === "dark"
        ? branding.logo.forDarkBackground
        : branding.logo.forLightBackground;
};
