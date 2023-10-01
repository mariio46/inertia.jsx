import AuthLayout from '@/Layouts/auth-layout';
import { useRef, useState } from 'react';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/dialog';
import Container from '@/components/container';

export default function Index() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const { data, setData, delete: destroy, processing, reset, errors } = useForm({ password: '' });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('danger.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <Container className={'lg:max-w-2xl'}>
            <Card>
                <CardHeader>
                    <CardTitle>Delete Account</CardTitle>
                    <CardDescription>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant={'destructive'} onClick={confirmUserDeletion}>
                        Delete Account
                    </Button>
                    <Dialog open={confirmingUserDeletion} onOpenChange={setConfirmingUserDeletion}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                                <DialogDescription>Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.</DialogDescription>
                            </DialogHeader>
                            <form onSubmit={deleteUser}>
                                <div className={'mb-4'}>
                                    <Label htmlFor='password'>Password</Label>

                                    <Input id='password' type='password' name='password' ref={passwordInput} value={data.password} onChange={(e) => setData('password', e.target.value)} className='mt-1' autoFocus placeholder='Password' />

                                    <InputError message={errors.password} className='mt-2' />
                                </div>
                                <DialogFooter className={'gap-x-2'}>
                                    <Button type={'button'} variant={'outline'} onClick={closeModal}>
                                        Cancel
                                    </Button>

                                    <Button variant={'destructive'} disabled={processing}>
                                        Delete Account
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </Container>
    );
}

Index.layout = (page) => <AuthLayout title={'Danger'} children={page} />;
