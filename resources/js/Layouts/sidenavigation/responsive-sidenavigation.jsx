import ApplicationLogo from '@/components/application-logo';
import { Sheet, SheetContent } from '@/components/sheet';
import { Link } from '@inertiajs/react';
import React from 'react';
import Menu from './menu';

export default function ResponsiveSidebarNavigation({ open, setOpen }) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className='w-[90%]' side='left'>
                <Link className='mb-8 block' href='/'>
                    <ApplicationLogo className='mr-4 h-8 w-auto fill-foreground' />
                </Link>
                <Menu setOpen={setOpen} />
            </SheetContent>
        </Sheet>
    );
}
