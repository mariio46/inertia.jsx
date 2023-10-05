import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/dropdown-menu';
import { Icon } from '@/components/icon';
import { Link } from '@inertiajs/react';
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
                    <Icon icon={'IconHome2'} />
                    Home
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href={route('dashboard')}>
                    <Icon icon={'IconChartPie3'} />
                    Dashboard
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href={route('profile.index')}>
                    <Icon icon={'IconSettings'} />
                    Settings
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link className='w-full' as='button' method='post' href={route('logout')}>
                    <Icon icon={'IconLogout'} />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}
