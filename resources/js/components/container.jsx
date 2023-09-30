import { cn } from '@/lib/utils';
import React from 'react';

export default function Container({ className, children }) {
    return <div className={cn('space-y-6 px-2 pb-6 pt-[1rem] lg:px-0 lg:pr-5 lg:pt-[7.5rem]', className)}>{children}</div>;
}
