import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type AdminFormCardProps = {
    title: string;
    children: ReactNode;
    footer?: ReactNode;
};

export default function AdminFormCard({ title, children, footer }: AdminFormCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">{children}</div>
                {footer && <div className="mt-6 flex gap-2">{footer}</div>}
            </CardContent>
        </Card>
    );
}
