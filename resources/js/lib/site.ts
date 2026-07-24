export const siteConfig = {
    name: import.meta.env.VITE_APP_NAME || 'ProLampX',
    url: import.meta.env.VITE_SITE_URL || 'https://prolampx.com',
    description:
        'ProLampX delivers software development, IT consultancy, and the free multi-OS installer for Windows, macOS, and Ubuntu.',
    keywords: [
        'ProLampX',
        'software development company',
        'web development',
        'mobile app development',
        'IT consultancy',
        'software installer',
        'Windows macOS Ubuntu',
        'free software installer',
    ],
    ogImage: '/images/prolampx-logo.png',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'example@gmail.com',
};
