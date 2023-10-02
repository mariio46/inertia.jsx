import AuthLayout from '@/Layouts/auth-layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import Container from '@/components/container';
import { Link } from '@inertiajs/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { UserListOptions } from './partials/user-list-options';
import { SimplePagination } from '@/components/simple-pagination';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { Input } from '@/components/input';
import { SortIndicator } from '@/components/sort-indicator';

export default function Index(props) {
    const { data: users, meta, links } = props.users;
    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('users.index'),
        values: params,
        only: ['users'],
    });

    const handleSort = (newField) => {
        let newDirection = params?.direction ?? 'asc';
        const field = params?.field ?? 'created_at';

        if (newField === field) {
            newDirection = newDirection === 'asc' ? 'desc' : 'asc'; // used newDirection
        }

        setParams({ ...params, field: newField, direction: newDirection });
    };

    return (
        <Container className={'lg:mx-auto lg:max-w-5xl'}>
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>The list of the registered users.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='mb-3 flex items-center justify-between'>
                        <div>
                            <Select value={params?.limit} onValueChange={(e) => setParams({ ...params, limit: e })}>
                                <SelectTrigger className='w-[180px]'>
                                    <SelectValue placeholder={params?.limit ?? 10} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='10'>10</SelectItem>
                                    <SelectItem value='25'>25</SelectItem>
                                    <SelectItem value='50'>50</SelectItem>
                                    <SelectItem value='75'>75</SelectItem>
                                    <SelectItem value='100'>100</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='w-72'>
                            <Input type='text' value={params?.search} onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))} placeholder='Pencarian...' />
                        </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-[50px] text-center'>#</TableHead>
                                <TableHead onClick={() => handleSort('name')}>
                                    <SortIndicator label='name' column='name' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('username')}>
                                    <SortIndicator label='username' column='username' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('email_verified_at')}>
                                    <SortIndicator label='verified' column='email_verified_at' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('created_at')}>
                                    <SortIndicator label='joined' column='created_at' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('updated_at')}>
                                    <SortIndicator label='updated' column='updated_at' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('posts_count')}>
                                    <SortIndicator label='posts' column='posts_count' field={params?.field} direction={params?.direction} />
                                </TableHead>
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
                                                            <AvatarFallback>{user.acronym}</AvatarFallback>
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
                                            <TableCell className={user.email_verified_at == 'Email not verified' ? 'font-medium text-destructive' : ''}>{user.email_verified_at}</TableCell>
                                            <TableCell>{user.created_at}</TableCell>
                                            <TableCell>{user.updated_at}</TableCell>
                                            <TableCell>{user.posts_count}</TableCell>
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
                                    <TableCell colSpan={7} className='animate-pulse py-5 text-center text-base font-semibold text-destructive'>
                                        No users.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className='flex items-center justify-between pt-6'>
                    <SimplePagination links={links} meta={meta} />
                </CardFooter>
            </Card>
        </Container>
    );
}

Index.layout = (page) => <AuthLayout title={'Users'} children={page} />;
