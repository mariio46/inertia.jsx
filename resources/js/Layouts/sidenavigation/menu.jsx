import { Icon } from '@/components/icon';
import PrimaryLink from '@/components/primary-link';
import { Separator } from '@/components/separator';
import React from 'react';

export default function Menu({ setOpen }) {
    const closeSidebar = () => {
        setOpen(false);
    };
    return (
        <ul className='space-y-3 px-2 py-5 lg:px-4'>
            <li>
                <PrimaryLink onSuccess={closeSidebar} href={route('dashboard')} active={route().current('dashboard')} className='flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]'>
                    <Icon icon={'IconChartPie3'} />
                    Dashboard
                </PrimaryLink>
            </li>
            <li>
                <PrimaryLink onSuccess={closeSidebar} href={route('users.index')} active={route().current('users.*')} className='flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]'>
                    <Icon icon={'IconUsersGroup'} />
                    Users
                </PrimaryLink>
            </li>
            <Separator className='!my-4' />
            <li>
                <PrimaryLink onSuccess={closeSidebar} href={route('profile.index')} active={route().current('profile.*')} className='flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]'>
                    <Icon icon={'IconSettings'} />
                    Settings
                </PrimaryLink>
            </li>
            <li>
                <PrimaryLink onSuccess={closeSidebar} href={route('security.index')} active={route().current('security.*')} className='flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]'>
                    <Icon icon={'IconShieldLock'} />
                    Security
                </PrimaryLink>
            </li>
            <li>
                <PrimaryLink onSuccess={closeSidebar} href={route('danger.index')} isDanger={true} active={route().current('danger.*')} className='flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem] normal-case hover:text-destructive'>
                    <Icon icon={'IconAlertTriangle'} />
                    Danger zone
                </PrimaryLink>
            </li>
            <Separator className='!my-4' />
            <li>
                <PrimaryLink onSuccess={closeSidebar} as='button' method='post' href={route('logout')} className='flex w-full items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem] normal-case'>
                    <Icon icon={'IconLogout'} />
                    Log out
                </PrimaryLink>
            </li>
        </ul>
    );
}
