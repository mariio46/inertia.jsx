import { cn } from '@/lib/utils';
import * as tablerIcons from '@tabler/icons-react';

export function Icon({ className, icon, ...props }) {
    const Icon = tablerIcons[icon];
    return <Icon className={cn('h-6 w-6 stroke-[1.2]', className)} {...props} />;
}
