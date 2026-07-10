import { ProLampLogo } from '@/components/prolamp-logo';

export default function AppLogo() {
    return (
        <>
            <ProLampLogo variant="mark" imageClassName="size-8" />
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">ProLampX</span>
            </div>
        </>
    );
}
