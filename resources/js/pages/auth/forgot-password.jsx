import GuestLayout from '@/Layouts/guest-layout';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

            <form onSubmit={submit}>
                <Input id='email' type='email' name='email' value={data.email} className='mt-1 block w-full' autoFocus onChange={(e) => setData('email', e.target.value)} placeholder={'Email'} />

                <InputError message={errors.email} className='mt-2' />

                <div className='mt-4 flex items-center justify-end'>
                    <Button className='ml-4' disabled={processing}>
                        Send
                    </Button>
                </div>
            </form>
        </>
    );
}

ForgotPassword.layout = (page) => <GuestLayout title={'Forgot Password'} description={'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.'} children={page} />;
