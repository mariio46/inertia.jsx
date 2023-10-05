import ApplicationLogo from '@/components/application-logo';
import { Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/dropdown-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import PrimaryLink from '@/components/primary-link';
import { buttonVariants } from '@/components/button';
import ProfileTrigger from './profile-trigger';
import MenuItem from './menu-item';
import { CommandPalette } from '../command/command-palette';
import { Icon } from '@/components/icon';

export default function NavigationMenu({ openCommandPalette, setOpenCommandPalette }) {
    const { auth } = usePage().props;
    return (
        <>
            <CommandPalette openCommandPalette={openCommandPalette} setOpenCommandPalette={setOpenCommandPalette} />
            <header className='relative z-[60] hidden md:block'>
                <div className='fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2'>
                    <nav className='border-b border-border/80 bg-card px-6 py-5'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-4'>
                                <Link href={route('home')}>
                                    <ApplicationLogo className={'block h-10 w-auto fill-muted-foreground transition duration-300 hover:fill-foreground'} />
                                </Link>
                            </div>
                            <div className='flex items-center gap-x-4'>
                                <button onClick={() => setOpenCommandPalette(true)} className='flex items-center gap-x-4 rounded-lg border px-4 py-2.5 text-[0.900rem]/[1.35rem] text-muted-foreground hover:text-foreground focus:outline-none'>
                                    <Icon icon={'IconSearch'} className={'h-4 w-4 stroke-[2]'} />

                                    <span className='mx-3'>Search...</span>
                                    <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium opacity-100'>
                                        <span className='text-base'>⌘</span>K
                                    </kbd>
                                </button>
                                <ThemeToggle />
                                {auth.user ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className={'select-none outline-none'}>
                                            <ProfileTrigger auth={auth} className={'h-[2.7rem] w-[2.7rem]'} />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align='end' className={'mt-3 w-64 space-y-2'}>
                                            <MenuItem {...{ auth }} />
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <div className='flex items-center gap-x-2'>
                                        <PrimaryLink className={buttonVariants({ variant: 'outline', size: 'lg', className: 'h-[2.7rem] px-4' })} href={route('login')} value={'login'} />
                                        <PrimaryLink className={buttonVariants({ variant: 'outline', size: 'lg', className: 'h-[2.7rem] px-4' })} href={route('register')} value={'register'} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
