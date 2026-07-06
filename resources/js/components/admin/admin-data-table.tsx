import type { ReactNode } from 'react';

type Column<T> = {
    key: string;
    label: string;
    render?: (row: T) => ReactNode;
};

type AdminDataTableProps<T extends { id: number | string }> = {
    columns: Column<T>[];
    rows: T[];
    emptyMessage?: string;
    actions?: (row: T) => ReactNode;
};

export default function AdminDataTable<T extends { id: number | string }>({
    columns,
    rows,
    emptyMessage = 'No records found.',
    actions,
}: AdminDataTableProps<T>) {
    if (rows.length === 0) {
        return (
            <div className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
                {emptyMessage}
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border bg-card/80 shadow-sm backdrop-blur-sm">
            <table className="w-full text-sm">
                <thead className="border-b bg-muted/30">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className="px-4 py-3 text-left font-medium">{col.label}</th>
                        ))}
                        {actions && <th className="px-4 py-3 text-right font-medium">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id} className="border-b last:border-0">
                            {columns.map((col) => (
                                <td key={col.key} className="px-4 py-3 align-top">
                                    {col.render ? col.render(row) : (row as Record<string, unknown>)[col.key] as ReactNode}
                                </td>
                            ))}
                            {actions && <td className="px-4 py-3 text-right">{actions(row)}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
