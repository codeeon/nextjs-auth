import React from 'react';

import { LogInForm } from '@/components/LogInForm';
import Link from 'next/link';

const LogIn = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <LogInForm />
      <Link href='/signup' className='mt-8'>
        <span className='font-semibold'>아직 계정이 없으신가요?</span>
      </Link>
    </div>
  );
};

export default LogIn;
