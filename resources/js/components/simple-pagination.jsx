import { buttonVariants } from '@/Components/button.jsx';
import { Link } from '@inertiajs/react';

export function SimplePagination({ meta, links }) {
    return (
        <div className='flex w-full items-center justify-between'>
            <div>
                <span className='text-sm text-muted-foreground'>
                    Showing <strong>{meta.from}</strong> to <strong>{meta.to}</strong> of <strong>{meta.total}</strong> results
                </span>
            </div>
            <div className='flex items-center justify-end gap-x-2'>
                <Link className={buttonVariants({ variant: 'outline', size: 'sm' })} disabled={links?.prev === null} as='button' preserveScroll preserveState href={links?.prev}>
                    Previous
                </Link>
                <Link className={buttonVariants({ variant: 'outline', size: 'sm' })} disabled={links?.next === null} as='button' preserveScroll preserveState href={links?.next}>
                    Next
                </Link>
            </div>
        </div>
    );
}
