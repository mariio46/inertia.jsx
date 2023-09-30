import { useEffect } from 'react';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/guest-layout';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <form onSubmit={submit}>
            <div className='mt-4'>
                <Label htmlFor='password'>Password</Label>

                <Input id='password' type='password' name='password' value={data.password} className='mt-1 block w-full' autoFocus onChange={(e) => setData('password', e.target.value)} />

                <InputError message={errors.password} className='mt-2' />
            </div>

            <div className='mt-4 flex items-center justify-end'>
                <Button className='ml-4' disabled={processing}>
                    Confirm
                </Button>
            </div>
        </form>
    );
}

ConfirmPassword.layout = (page) => <GuestLayout title={'Confirm Password'} description={'This is a secure area of the application. Please confirm your password before continuing.'} children={page} />;
