import React from 'react';

import { LogInForm } from '@/components/LogInForm';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LogIn = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <LogInForm />
      <Link href='/signup' className='mt-8 flex'>
        <span className='font-semibold'>아직 계정이 없으신가요?</span>
        <ArrowRight className='ml-2' />
      </Link>
    </div>
  );
};

export default LogIn;
