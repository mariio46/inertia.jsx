import { Link } from '@inertiajs/react';
import { Button } from '@/components/button';

export function SimplePagination({ links }) {
    return (
        <div className='flex items-center gap-x-1'>
            {links.prev !== null ? (
                <Button className='rounded-full px-6 text-xs' variant='secondary' size='sm' asChild>
                    <Link preserveScroll preserveState href={links.prev}>
                        Prev
                    </Link>
                </Button>
            ) : (
                <Button className='select-none rounded-full bg-secondary/50 px-6 text-xs text-primary/50 hover:bg-secondary/50' variant='secondary' size='sm' asChild disabled>
                    <span>Prev</span>
                </Button>
            )}
            {links.next !== null ? (
                <Button className='rounded-full px-6 text-xs' variant='secondary' size='sm' asChild>
                    <Link preserveScroll preserveState href={links.next}>
                        Next
                    </Link>
                </Button>
            ) : (
                <Button className='select-none rounded-full bg-secondary/50 px-6 text-xs text-primary/50 hover:bg-secondary/50' variant='secondary' size='sm' asChild disabled>
                    <span>Next</span>
                </Button>
            )}
        </div>
    );
}
