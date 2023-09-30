import AuthLayout from '@/Layouts/auth-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import Container from '@/components/container';
import React from 'react';

export default function Index() {
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                    <CardDescription>All statistics related to your account.</CardDescription>
                </CardHeader>
                <CardContent>{/* <div className='mb-[100rem]'></div> */}</CardContent>
            </Card>
        </Container>
    );
}
Index.layout = (page) => <AuthLayout title={'Dashboard'} children={page} />;
{
    /* <div className='px-2 pb-12 pt-28'>
<Container>
    <div className='max-w-2xl space-y-6'>
        <div className='p-6 text-foreground'>You're logged in!</div>
    </div>
</Container>
</div> */
}
