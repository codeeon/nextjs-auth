import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Link href='/login'>
        <h1 className='text-4xl'>Click here to login page</h1>
      </Link>
    </div>
  );
};

export default Home;
