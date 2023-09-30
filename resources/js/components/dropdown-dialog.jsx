import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/alert-dialog';
import { DropdownMenuItem } from '@/components/dropdown-menu';
import { buttonVariants } from './button';

export function DropdownDialog({ trigger_text, title = 'Are you absolutely sure?', description, cancel_text = 'Cancel', submit_text = 'Continue', action, buttonStyle = '', children }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(event) => event.preventDefault()}>{children || trigger_text}</DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancel_text}</AlertDialogCancel>
                    <AlertDialogAction onClick={action} className={buttonVariants({ variant: buttonStyle })}>
                        {submit_text}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
