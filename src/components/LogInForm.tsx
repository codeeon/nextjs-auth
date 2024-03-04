'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent } from '@/components/ui/tabs';

type LogInData = { email: string; password: string };

const logInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [loginError, setLoginError] = useState('');

  const onSubmit: SubmitHandler<LogInData> = async (data) => {
    try {
      const validatedData = logInSchema.parse(data);
      console.log(validatedData);
      // 로그인 로직 추가 예정
      setLoginError('');
    } catch (err) {
      console.error('로그인 실패:', err);
      setLoginError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsContent value='account'>
          <Card>
            <CardHeader>
              <CardTitle>LOG IN</CardTitle>
              <CardDescription>Welcome to the Next.js world</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='abc@defgh.com'
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className='text-red-500'>이메일을 입력해주세요.</span>}
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    type='password'
                    placeholder='********'
                    {...register('password', { required: true })}
                  />
                  {errors.password && (
                    <span className='text-red-500'>비밀번호를 입력해주세요.</span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button type='submit'>Log In</Button>
                {loginError && <p className='text-red-500'>{loginError}</p>}
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value='password'></TabsContent>
      </Tabs>
    </div>
  );
};

export default LogInForm;
