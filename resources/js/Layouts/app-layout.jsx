import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import ResponsiveNavigation from './navigation/responsive-navigation';
import NavigationMenu from './navigation/navigation';

export default function AppLayout({ title, children }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Head title={title} />
            <main>
                <ResponsiveNavigation openCommandPalette={open} setOpenCommandPalette={setOpen} />
                <NavigationMenu openCommandPalette={open} setOpenCommandPalette={setOpen} />
                {children}
            </main>
        </>
    );
}
