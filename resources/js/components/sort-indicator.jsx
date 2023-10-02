import { IconChevronDown, IconChevronUp, IconSelector } from '@tabler/icons-react';

export const SortIndicator = ({ label, field, column, direction }) => {
    return (
        <div className='flex items-center'>
            <span className='mr-2 capitalize'>{label}</span>
            {field === column ? direction === 'asc' ? <IconChevronUp className='h-4 w-4' /> : <IconChevronDown className='h-4 w-4' /> : <IconSelector className='h-4 w-4' />}
        </div>
    );
};
