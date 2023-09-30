import { useRef } from 'react';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from '@/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import Container from '@/components/container';
import AuthLayout from '@/Layouts/auth-layout';

export default function Index() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <Container className={'lg:max-w-2xl'}>
            <Card>
                <CardHeader>
                    <CardTitle>Update Password</CardTitle>
                    <CardDescription>Ensure your account is using a long, random password to stay secure.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={updatePassword} className='space-y-6'>
                        <div>
                            <Label htmlFor='current_password'>Current Password</Label>

                            <Input id='current_password' ref={currentPasswordInput} value={data.current_password} onChange={(e) => setData('current_password', e.target.value)} type='password' className='mt-1 block w-full' autoComplete='current-password' />

                            <InputError message={errors.current_password} className='mt-2' />
                        </div>

                        <div>
                            <Label htmlFor='password'>New Password</Label>

                            <Input id='password' ref={passwordInput} value={data.password} onChange={(e) => setData('password', e.target.value)} type='password' className='mt-1 block w-full' autoComplete='new-password' />

                            <InputError message={errors.password} className='mt-2' />
                        </div>

                        <div>
                            <Label htmlFor='password_confirmation'>Confirm Password</Label>

                            <Input id='password_confirmation' value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} type='password' className='mt-1 block w-full' autoComplete='new-password' />

                            <InputError message={errors.password_confirmation} className='mt-2' />
                        </div>

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

Index.layout = (page) => <AuthLayout title={'Security'} children={page} />;
