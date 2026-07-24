import React, { createContext, HTMLAttributes, useContext, useEffect, useState } from "react";
import {
    createTheme,
    CssVarsThemeOptions,
    ThemeProvider
} from "@mui/material";
import '../../css/landing.css';
import {getPalette} from "@/theme/pallette";
import {getTypography} from "@/theme/typography";

interface ThemeContextProps {
    mode: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const resolveMode = (): "dark" | "light" =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";

/**
 * MUI theme provider for the landing sections. It only supplies the MUI theme
 * to its children (no CssBaseline / html class management) and mirrors the
 * ProLampX appearance by watching the `dark` class on <html>, so dark/light
 * stays in sync with the rest of the app.
 */
const WebTheme: React.FC<HTMLAttributes<HTMLElement>> = ({children}) => {
    const [mode, setMode] = useState<'dark' | 'light'>(resolveMode);

    useEffect(() => {
        const update = () => setMode(resolveMode());
        update();

        const observer = new MutationObserver(update);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    const fontFamily = 'var(--font-heading), "Segoe UI", sans-serif';
    const theme = createTheme({
        palette: getPalette(mode),
        typography: getTypography(fontFamily),
        shape: {
            borderRadius: 12,
        },
        spacing: 8,
        breakpoints: {
            values: {
                xs: 0,
                sm: 540,
                md: 768,
                lg: 992,
                xl: 1400,
            },
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 999,
                        paddingInline: 24,
                        boxShadow: "none",
                    },
                    containedPrimary: {
                        background: "linear-gradient(135deg, #1B365D 0%, #4F8CFF 100%)",
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 20,
                    },
                },
            },
        },
    } as CssVarsThemeOptions);

    return (
        <ThemeContext.Provider value={{mode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeMode must be used within WebTheme");
    }
    return context;
};

export default WebTheme;
