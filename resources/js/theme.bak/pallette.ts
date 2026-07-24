const palettes = {
    dark: {
        primary: {
            main: "#1B365D",
            dark: "#0f2440",
            contrastText: "#ffffff",
            overlay: "rgba(15, 36, 64, 0.82)",
            white: "#ffffff",
        },
        secondary: {
            main: "#4F8CFF",
            dark: "#f1f5f9",
            contrastText: "#cbd5e1",
            body: "#94a3b8",
        },
        background: {
            default: "#222d45",
            offWhite: "#1b253a",
            dark: "#243252",
            border: "rgba(148, 163, 184, 0.28)",
            primary: "#1c2d4a",
            overlay: "rgba(27, 37, 58, 0.88)",
            shadow: "rgba(0, 0, 0, 0.28)",
            body: "#171f33",
        },
    },
    light: {
        primary: {
            main: "#1B365D",
            dark: "#0f2440",
            contrastText: "#ffffff",
            overlay: "rgba(27, 54, 93, 0.08)",
            white: "#ffffff",
        },
        secondary: {
            main: "#3B82F6",
            dark: "#0f2440",
            contrastText: "#5b6b7c",
            body: "#64748b",
        },
        background: {
            default: "#ffffff",
            offWhite: "#f4f7fb",
            dark: "#eef2f7",
            border: "#dbe3ee",
            primary: "#1B365D",
            overlay: "rgba(255, 255, 255, 0.92)",
            shadow: "rgba(27, 54, 93, 0.1)",
            body: "#f8fafc",
        },
    },
} as const;

export const getPalette = (mode: "light" | "dark") => ({
    mode,
    ...palettes[mode],
});
