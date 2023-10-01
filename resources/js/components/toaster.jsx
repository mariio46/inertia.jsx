import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/toast';
import { useToast } from '@/lib/use-toast';
import { IconCircleCheck } from '@tabler/icons-react';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <Toast key={id} {...props}>
                        <div className='flex items-start gap-x-2'>
                            <IconCircleCheck className='h-6 w-6 stroke-[1.2] text-green-500' />
                            <div className='grid gap-x-2'>
                                {title && <ToastTitle>{title}</ToastTitle>}
                                {description && <ToastDescription>{description}</ToastDescription>}
                            </div>
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
