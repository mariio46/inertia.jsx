import React from 'react';
import AuthLayout from '@/Layouts/auth-layout';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import Container from '@/components/container';
import { Link, usePage } from '@inertiajs/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { SimplePagination } from '@/components/SimplePagination';
import { UserListOptions } from './partials/user-list-options';

export default function Index() {
    const { data: users, meta, links } = usePage().props.users;
    return (
        <Container className={'lg:mx-auto lg:max-w-5xl'}>
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>The list of the users registered.</CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[50px] text-center'>#</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>Verified</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead>Updated</TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length > 0 ? (
                            <>
                                {users.map((user, i) => (
                                    <TableRow key={i}>
                                        <TableCell className='w-0 py-7 text-center'>{meta.from + i}</TableCell>
                                        <TableCell>
                                            <div className='flex items-center font-normal'>
                                                <div className='mr-3 shrink-0'>
                                                    <Avatar>
                                                        <AvatarImage src={user.avatar} />
                                                        <AvatarFallback>{user.username}</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <div>
                                                    <div>
                                                        <Link href={route('users.show', user)}>{user.name}</Link>
                                                    </div>
                                                    <div className='text-muted-foreground'>{user.email}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell className={user.email_verified == 'Email not verified' ? 'font-medium text-destructive' : ''}>{user.email_verified}</TableCell>
                                        <TableCell>{user.joined}</TableCell>
                                        <TableCell>{user.updated}</TableCell>
                                        <TableCell>
                                            <div className='flex justify-end'>
                                                <UserListOptions user={user} />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className='animate-pulse py-5 text-center text-base font-semibold text-destructive'>
                                    No users.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <CardFooter className='flex items-center justify-between pt-6'>
                    <span className='text-sm text-muted-foreground'>
                        Showing you {meta.to} of {meta.total} users.
                    </span>
                    <SimplePagination links={links} />
                </CardFooter>
            </Card>
        </Container>
    );
}

Index.layout = (page) => <AuthLayout title={'Users'} children={page} />;
