import { Button } from '@/components/button';
import { Link, useForm } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/dropdown-menu';
import { DropdownDialog } from '@/components/dropdown-dialog';
import { toast } from '@/lib/use-toast';
import { getTimeStamp } from '@/lib/get-date';
import { Icon } from '@/components/icon';

export function UserListOptions({ user, details = true }) {
    const { delete: destroy } = useForm();

    function destroyUser(user) {
        destroy(route('users.destroy', user), {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: 'User has been deleted succesfully',
                    description: getTimeStamp(),
                });
            },
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='h-7' variant='outline' size='icon'>
                    <Icon icon={'IconDots'} className={'h-5 w-5 stroke-[1.2]'} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                {details ? (
                    <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href={route('users.show', user)}>
                                <Icon icon={'IconId'} />
                                Details
                            </Link>
                        </DropdownMenuItem>
                    </>
                ) : null}
                <DropdownMenuSeparator />
                <DropdownDialog title='Are you sure?' description='This action will limit user activity.' submit_text='Ban' action={() => console.log(user.username)} buttonStyle='destructive'>
                    <Icon icon={'IconBan'} />
                    Ban
                </DropdownDialog>
                <DropdownDialog description='This action cannot be undone. This will permanently delete user account and remove data from our servers.' action={() => destroyUser(user)} submit_text='Delete' buttonStyle='destructive'>
                    <Icon icon={'IconTrash'} />
                    Delete Permanently
                </DropdownDialog>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

{
    /* <DropdownMenuSeparator />
<DropdownMenuSub>
    <DropdownMenuSubTrigger>
        <IconShare className=' mr-2 h-5 w-5 stroke-[1.2]' />
        Share
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal>
        <DropdownMenuSubContent className='w-40'>
            <DropdownMenuItem>
                <IconBrandFacebook className=' mr-2 h-5 w-5 stroke-[1.2]' />
                Facebook
            </DropdownMenuItem>
            <DropdownMenuItem>
                <IconBrandTwitter className=' mr-2 h-5 w-5 stroke-[1.2]' />
                Twitter
            </DropdownMenuItem>
            <DropdownMenuItem>
                <IconBrandTelegram className=' mr-2 h-5 w-5 stroke-[1.2]' />
                Telegram
            </DropdownMenuItem>
        </DropdownMenuSubContent>
    </DropdownMenuPortal>
</DropdownMenuSub>
<DropdownMenuSub>
    <DropdownMenuSubTrigger>
        <IconSend className=' mr-2 h-5 w-5 stroke-[1.2]' />
        Publish
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal>
        <DropdownMenuSubContent className='w-40'>
            <DropdownMenuItem>
                <IconBrandFacebook className=' mr-2 h-5 w-5 stroke-[1.2]' />
                Facebook
            </DropdownMenuItem>
            <DropdownMenuItem>
                <IconBrandTwitter className=' mr-2 h-5 w-5 stroke-[1.2]' />
                Twitter
            </DropdownMenuItem>
            <DropdownMenuItem>
                <IconBrandTelegram className=' mr-2 h-5 w-5 stroke-[1.2]' />
                Telegram
            </DropdownMenuItem>
            <DropdownMenuItem>
                <IconBrandWhatsapp className=' mr-2 h-5 w-5 stroke-[1.2]' />
                Whatsapp
            </DropdownMenuItem>
        </DropdownMenuSubContent>
    </DropdownMenuPortal>
</DropdownMenuSub> */
}
