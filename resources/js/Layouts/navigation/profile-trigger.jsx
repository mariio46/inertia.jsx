import { Avatar, AvatarImage } from '@/components/avatar';
import { cn } from '@/lib/utils';
import React from 'react';

export default function ProfileTrigger({ className = '', auth }) {
    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={auth.user.avatar} />
        </Avatar>
    );
}
