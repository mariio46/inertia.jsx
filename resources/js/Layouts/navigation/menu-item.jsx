import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/dropdown-menu';
import { Link } from '@inertiajs/react';
import { IconChartPie3, IconHome2, IconLogout, IconSettings } from '@tabler/icons-react';
import React from 'react';

export default function MenuItem({ auth }) {
    return (
        <>
            <DropdownMenuLabel className={'pt-3'}>
                <h4 className={'block'}>{auth.user.name}</h4>
                <span className='text-xs font-normal'>{auth.user.email}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link href={route('home')}>
                    <IconHome2 className={'mr-2 h-5 w-5 stroke-[1.2]'} />
                    Home
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href={route('dashboard')}>
                    <IconChartPie3 className={'mr-2 h-5 w-5 stroke-[1.2]'} />
                    Dashboard
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href={route('profile.index')}>
                    <IconSettings className={'mr-2 h-5 w-5 stroke-[1.2]'} />
                    Settings
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link className='w-full' as='button' method='post' href={route('logout')}>
                    <IconLogout className={'mr-2 h-5 w-5 stroke-[1.2]'} />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}
