import ApplicationLogo from '@/components/application-logo';
import { Link, usePage } from '@inertiajs/react';
import { ThemeToggle } from '@/components/theme-toggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/dropdown-menu';
import ProfileTrigger from './profile-trigger';
import MenuItem from './menu-item';
import { Icon } from '@/components/icon';

export default function ResponsiveNavigation({ setOpenCommandPalette }) {
    const { auth } = usePage().props;
    return (
        <header className={'relative z-40 block md:hidden'}>
            <div className='fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2'>
                <nav className='flex items-center justify-between border-b border-border bg-background px-2 py-4'>
                    <Link href={route('home')}>
                        <ApplicationLogo className={'block h-10 w-auto fill-muted-foreground transition duration-300 hover:fill-foreground'} />
                    </Link>
                    <div className='flex items-center gap-x-2'>
                        <ThemeToggle />
                        <button onClick={() => setOpenCommandPalette(true)} className='flex items-center justify-center gap-x-4 rounded-lg border border-border p-2 text-[0.900rem]/[1.35rem] text-muted-foreground hover:text-foreground focus:outline-none'>
                            <Icon icon={'IconSearch'} className='h-6 w-6' />
                        </button>
                        <DropdownMenu>
                            {auth.user ? (
                                <>
                                    <DropdownMenuTrigger className={'select-none outline-none'}>
                                        <ProfileTrigger auth={auth} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end' className={'mt-2 w-64 space-y-2'}>
                                        <MenuItem {...{ auth }} />
                                    </DropdownMenuContent>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuTrigger className={'grid place-content-center rounded-lg border border-border p-2'}>
                                        <Icon icon={'IconMenuDeep'} className={'h-6 w-6 stroke-[1.3] text-muted-foreground'} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end' className={'mt-2 w-64 space-y-2'}>
                                        <DropdownMenuLabel className={'pt-3'}>You are not authenticated</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild>
                                            <Link href={route('login')}>
                                                <Icon icon={'IconLogin'} className={'mr-2 h-5 w-5 stroke-[1.2]'} />
                                                Login
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href={route('register')}>
                                                <Icon icon={'IconUserCircle'} className={'mr-2 h-5 w-5 stroke-[1.2]'} />
                                                Register
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </>
                            )}
                        </DropdownMenu>
                    </div>
                </nav>
            </div>
        </header>
    );
}
