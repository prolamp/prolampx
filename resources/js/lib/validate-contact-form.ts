export type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export type ContactFormField = keyof ContactFormData;

const limits = {
    name: 100,
    email: 255,
    subject: 150,
    message: 5000,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactField(field: ContactFormField, value: string): string | null {
    const trimmed = value.trim();

    switch (field) {
        case 'name':
            if (!trimmed) {
                return 'Name is required.';
            }
            if (trimmed.length > limits.name) {
                return `Name must be ${limits.name} characters or fewer.`;
            }
            return null;
        case 'email':
            if (!trimmed) {
                return 'Email is required.';
            }
            if (trimmed.length > limits.email) {
                return `Email must be ${limits.email} characters or fewer.`;
            }
            if (!emailPattern.test(trimmed)) {
                return 'Enter a valid email address.';
            }
            return null;
        case 'subject':
            if (!trimmed) {
                return 'Subject is required.';
            }
            if (trimmed.length > limits.subject) {
                return `Subject must be ${limits.subject} characters or fewer.`;
            }
            return null;
        case 'message':
            if (!trimmed) {
                return 'Message is required.';
            }
            if (trimmed.length > limits.message) {
                return `Message must be ${limits.message} characters or fewer.`;
            }
            return null;
        default:
            return null;
    }
}

export function validateContactForm(data: ContactFormData): Partial<Record<ContactFormField, string>> {
    const fields: ContactFormField[] = ['name', 'email', 'subject', 'message'];
    const errors: Partial<Record<ContactFormField, string>> = {};

    for (const field of fields) {
        const message = validateContactField(field, data[field]);
        if (message) {
            errors[field] = message;
        }
    }

    return errors;
}

export function contactFormIsValid(data: ContactFormData): boolean {
    return Object.keys(validateContactForm(data)).length === 0;
}
