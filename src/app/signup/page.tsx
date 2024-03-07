import React from 'react';

import { SignUpForm } from '@/components/signup-form';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SignUp = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <SignUpForm />
      <Link href='/login' className='mt-8 flex'>
        <span className='font-semibold'>이미 계정이 있으신가요?</span>
        <ArrowRight className='ml-2' />
      </Link>
    </div>
  );
};

export default SignUp;
