import { useEffect } from 'react';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import { Input } from '@/components/input';
import { Checkbox } from '@/components/checkbox';
import { Button } from '@/components/button';
import { Label } from '@/components/label';
import GuestLayout from '@/Layouts/guest-layout';
import PrimaryLink from '@/components/primary-link';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor='email' className={'capitalize'}>
                        email
                    </Label>

                    <Input id='email' type='email' name='email' value={data.email} className='mt-1 block w-full' autoComplete='username' autoFocus onChange={(e) => setData('email', e.target.value)} />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password' className={'capitalize'}>
                        password
                    </Label>

                    <Input id='password' type='password' name='password' value={data.password} className='mt-1 block w-full' autoComplete='current-password' onChange={(e) => setData('password', e.target.value)} />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='mt-4 block'>
                    <label className='flex items-center'>
                        <Checkbox name='remember' checked={data.remember} onCheckedChange={(e) => setData('remember', e)} />
                        <span className='ml-2 text-sm text-muted-foreground'>Remember me</span>
                    </label>
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    {/* {canResetPassword && (
                        <Link href={route('password.request')} className='rounded-md text-sm text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'>
                            Forget Password?
                        </Link>
                    )} */}
                    <PrimaryLink href={route('register')} value={'register?'} />

                    <Button className='ml-4' disabled={processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </>
    );
}

Login.layout = (page) => <GuestLayout title={'Login'} description={'Welcome back, Login and jump to your dashboard'} children={page} />;
