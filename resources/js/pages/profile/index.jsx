import Container from '@/components/container';
import AuthLayout from '@/Layouts/auth-layout';
import InputError from '@/components/input-error';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';

export default function Index({ mustVerifyEmail, status }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };
    return (
        <Container className={'lg:max-w-2xl'}>
            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account's profile information and email address.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className='space-y-6'>
                        <div>
                            <Label htmlFor='name'>Name</Label>

                            <Input id='name' className='mt-1 block w-full' value={data.name} onChange={(e) => setData('name', e.target.value)} required autoFocus autoComplete='name' />

                            <InputError className='mt-2' message={errors.name} />
                        </div>

                        <div>
                            <Label htmlFor='username'>Username</Label>

                            <Input id='username' className='mt-1 block w-full' value={data.username} onChange={(e) => setData('username', e.target.value)} required autoComplete='username' />

                            <InputError className='mt-2' message={errors.username} />
                        </div>

                        <div>
                            <Label htmlFor='email'>Email</Label>

                            <Input id='email' type='email' className='mt-1 block w-full' value={data.email} onChange={(e) => setData('email', e.target.value)} required autoComplete='username' />

                            <InputError className='mt-2' message={errors.email} />
                        </div>

                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className='mt-2 text-sm text-gray-800'>
                                    Your email address is unverified.
                                    <Link href={route('verification.send')} method='post' as='button' className='rounded-md text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'>
                                        Click here to re-send the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && <div className='mt-2 text-sm font-medium text-green-600'>A new verification link has been sent to your email address.</div>}
                            </div>
                        )}

                        <div className='flex items-center gap-4'>
                            <Button disabled={processing}>Save</Button>

                            <Transition show={recentlySuccessful} enter='transition ease-in-out' enterFrom='opacity-0' leave='transition ease-in-out' leaveTo='opacity-0'>
                                <p className='text-sm text-muted-foreground'>Saved.</p>
                            </Transition>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}

Index.layout = (page) => <AuthLayout title={'Profile'} children={page} />;
