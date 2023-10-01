import GuestLayout from '@/Layouts/guest-layout';
import { Button } from '@/components/button';
import { router, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            {status === 'verification-link-sent' && <div className='mb-4 text-sm font-medium text-green-600'>A new verification link has been sent to the email address you provided during registration.</div>}

            <form onSubmit={submit}>
                <div className='mt-4 flex items-center justify-between'>
                    <Button disabled={processing}>Resend Verification Email</Button>
                    <Button variant={'link'} type={'button'} onClick={() => router.post(route('logout'))}>
                        Log Out
                    </Button>
                </div>
            </form>
        </>
    );
}
VerifyEmail.layout = (page) => <GuestLayout title={'Email Verification'} description={`Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.`} children={page} />;
