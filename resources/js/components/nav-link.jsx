import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className, value, children, ...props }) {
    return (
        <Link className={cn('px-4 py-2 text-[0.900rem]/[1.35rem] capitalize transition duration-300 hover:text-primary', className, active ? 'font-medium text-primary' : 'text-muted-foreground')} {...props}>
            {value || children}
        </Link>
    );
}
