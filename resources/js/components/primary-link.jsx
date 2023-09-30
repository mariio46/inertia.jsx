import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function PrimaryLink({ className, isDanger = false, active, value, children, ...props }) {
    return (
        <Link className={cn('text-sm capitalize text-muted-foreground hover:text-foreground', className, active ? 'bg-muted font-medium text-primary' : 'text-muted-foreground', isDanger && active ? 'text-destructive' : 'text-primary')} {...props}>
            {value || children}
        </Link>
    );
}
