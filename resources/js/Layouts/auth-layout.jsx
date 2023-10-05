import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/components/button';
import { Toaster } from '@/components/toaster';
import ResponsiveNavigation from './navigation/responsive-navigation';
import NavigationMenu from './navigation/navigation';
import ResponsiveSidebarNavigation from './sidenavigation/responsive-sidenavigation';
import SidebarNavigation from './sidenavigation/sidenavigation';
import { Icon } from '@/components/icon';

export default function AuthLayout({ title, children }) {
    const [open, setOpen] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <Head title={title} />
            <main>
                <ResponsiveNavigation setOpenCommandPalette={setOpen} />
                <NavigationMenu openCommandPalette={open} setOpenCommandPalette={setOpen} />
                <ResponsiveSidebarNavigation open={openSidebar} setOpen={setOpenSidebar} />
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    <div className='col-span-1 hidden min-h-screen lg:block'>
                        <SidebarNavigation />
                    </div>
                    <div className='col-span-full lg:col-span-3'>
                        <div className='block px-2 pt-24 lg:hidden'>
                            <Button variant={'secondary'} className={'gap-x-1 border border-border'} onClick={() => setOpenSidebar(true)}>
                                <Icon icon={'IconAlignBoxLeftMiddleFilled'} className='h-5 w-5 stroke-[1.2]' />
                                Side Menu
                            </Button>
                        </div>
                        {children}
                    </div>
                </div>
            </main>
            <Toaster />
        </>
    );
}
