const palettes = {
    dark: {
        primary: {
            main: '#aec7f7',
            dark: '#0f2440',
            contrastText: '#191c1e',
            overlay: 'rgba(15, 36, 64, 0.82)',
            white: '#ffffff',
        },
        secondary: {
            main: '#0057c2',
            dark: '#eff1f3',
            contrastText: '#c4c6cf',
            body: '#c4c6cf',
        },
        background: {
            default: '#1b1c1e',
            offWhite: '#191c1e',
            dark: '#282a2d',
            border: 'rgba(255, 255, 255, 0.1)',
            primary: '#1b365d',
            overlay: 'rgba(15, 18, 20, 0.88)',
            shadow: 'rgba(0, 0, 0, 0.4)',
            body: '#0f1214',
        },
    },
    light: {
        primary: {
            main: '#002046',
            dark: '#0f2440',
            contrastText: '#ffffff',
            overlay: 'rgba(27, 54, 93, 0.08)',
            white: '#ffffff',
        },
        secondary: {
            main: '#0057c2',
            dark: '#0f2440',
            contrastText: '#44474e',
            body: '#44474e',
        },
        background: {
            default: '#ffffff',
            offWhite: '#f2f4f6',
            dark: '#e6e8ea',
            border: '#e2e8f0',
            primary: '#1b365d',
            overlay: 'rgba(255, 255, 255, 0.92)',
            shadow: 'rgba(27, 54, 93, 0.1)',
            body: '#f7f9fb',
        },
    },
} as const;

export const getPalette = (mode: 'light' | 'dark') => ({
    mode,
    ...palettes[mode],
});
