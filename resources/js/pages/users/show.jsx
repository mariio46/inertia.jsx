import AuthLayout from '@/Layouts/auth-layout';
import { Avatar, AvatarFallback } from '@/components/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import Container from '@/components/container';
import { AvatarImage } from '@radix-ui/react-avatar';
import { UserListOptions } from './partials/user-list-options';

export default function Show({ user }) {
    return (
        <Container>
            <Card className={'mx-auto max-w-sm lg:mx-0'}>
                <CardHeader>
                    <div className='flex items-start justify-between'>
                        <div>
                            <CardTitle>Profile Detail</CardTitle>
                            <CardDescription>All profile information from this user</CardDescription>
                        </div>
                        <UserListOptions user={user} details={false} />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className='flex items-center justify-center'>
                        <Avatar className={'h-52 w-52 border-2'}>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.acronym}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='mt-5 text-center'>
                        <h4 className='font-medium text-primary'>{user.name}</h4>
                        <p className='text-sm text-muted-foreground'>{user.email}</p>
                    </div>
                    <div className='mt-5 space-y-2'>
                        <Grid>
                            <GridTitle>Username</GridTitle>
                            <GridColon>:</GridColon>
                            <GridValue>{user.username}</GridValue>
                        </Grid>
                        <Grid>
                            <GridTitle>Joined</GridTitle>
                            <GridColon>:</GridColon>
                            <GridValue>{user.joined}</GridValue>
                        </Grid>
                        <Grid>
                            <GridTitle>Verified</GridTitle>
                            <GridColon>:</GridColon>
                            <GridValue>{user.email_verified}</GridValue>
                        </Grid>
                        <Grid>
                            <GridTitle>Updated</GridTitle>
                            <GridColon>:</GridColon>
                            <GridValue>{user.updated}</GridValue>
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
}

function Grid({ children }) {
    return <div className='grid grid-cols-12 text-sm'>{children}</div>;
}

function GridTitle({ children }) {
    return <div className='col-span-4 font-medium text-muted-foreground'>{children}</div>;
}

function GridColon({ children }) {
    return <div className='col-span-1 font-medium text-muted-foreground'>{children}</div>;
}

function GridValue({ children }) {
    return <div className='col-span-7 text-primary'>{children}</div>;
}

Show.layout = (page) => <AuthLayout title={'User Detail'} children={page} />;
