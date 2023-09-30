import { useEffect } from 'react';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/command';
import { IconAlertTriangle, IconChartPie, IconLogin, IconLogout, IconSettings, IconShieldLock, IconUserCircle } from '@tabler/icons-react';
import { router, usePage } from '@inertiajs/react';
import { IconHome2 } from '@tabler/icons-react';

export function CommandPalette({ openCommandPalette, setOpenCommandPalette }) {
    const { auth } = usePage().props;
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpenCommandPalette((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    function Redirect(href) {
        router.get(
            href,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => setOpenCommandPalette(false),
            },
        );
    }

    function Logout(href) {
        router.post(
            href,
            {},
            {
                onSuccess: () => setOpenCommandPalette(false),
            },
        );
    }

    return (
        <CommandDialog open={openCommandPalette} onOpenChange={setOpenCommandPalette}>
            <CommandInput placeholder='Type a command or search...' />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading='Suggestions'>
                    <CommandItem onSelect={() => Redirect(route('home'))}>
                        <IconHome2 className='mr-2 h-4 w-4 stroke-[1.3px]' />
                        <span>Home</span>
                    </CommandItem>
                </CommandGroup>
                {auth.user ? (
                    <>
                        <CommandSeparator />
                        <CommandGroup heading='Settings'>
                            <CommandItem onSelect={() => Redirect(route('dashboard'))}>
                                <IconChartPie className='mr-2 h-4 w-4 stroke-[1.3px]' />
                                <span>Dashboard</span>
                            </CommandItem>
                            <CommandItem onSelect={() => Redirect(route('profile.index'))}>
                                <IconSettings className='mr-2 h-4 w-4 stroke-[1.3px]' />
                                <span>Settings</span>
                            </CommandItem>
                            <CommandItem onSelect={() => Redirect(route('security.index'))}>
                                <IconShieldLock className='mr-2 h-4 w-4 stroke-[1.3px]' />
                                <span>Security</span>
                            </CommandItem>
                            <CommandItem onSelect={() => Redirect(route('danger.index'))}>
                                <IconAlertTriangle className='mr-2 h-4 w-4 stroke-[1.3px]' />
                                <span>Danger Zone</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup>
                            <CommandItem onSelect={() => Logout(route('logout'))}>
                                <IconLogout className='mr-2 h-4 w-4 stroke-[1.3px]' />
                                <span>Logout</span>
                            </CommandItem>
                        </CommandGroup>
                    </>
                ) : (
                    <>
                        <CommandSeparator />
                        <CommandGroup heading='Authentication'>
                            <CommandItem onSelect={() => Redirect(route('login'))}>
                                <IconLogin className='mr-2 h-4 w-4 stroke-[1.3px]' />
                                <span>Login</span>
                            </CommandItem>
                            <CommandItem onSelect={() => Redirect(route('register'))}>
                                <IconUserCircle className='mr-2 h-4 w-4 stroke-[1.3px]' />
                                <span>Register</span>
                            </CommandItem>
                        </CommandGroup>
                    </>
                )}
            </CommandList>
        </CommandDialog>
    );
}
