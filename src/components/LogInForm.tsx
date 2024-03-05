'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent } from '@/components/ui/tabs';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { logInSchema } from '@/validators/auth';

type LogInData = { email: string; password: string };

const LogInForm: React.JSX.Element = () => {
  const [loginError, setLoginError] = useState('');

  const form = useForm<LogInData>({
    resolver: zodResolver(logInSchema),
    defaultValues: { email: '', password: '' },
  });

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className='space-y-2'>
                  <div className='space-y-1'>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type={'email'} placeholder='abc@defgh.com' {...field} />
                          </FormControl>
                          {/* {errors.email && (
                              <FormDescription>
                                <span className='text-red-500'>이메일을 입력해주세요.</span>
                              </FormDescription>
                            )} */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='space-y-1'>
                    <FormField
                      control={form.control}
                      name='password'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type={'password'} placeholder='********' {...field} />
                          </FormControl>
                          {/* {errors.password && (
                              <FormDescription>
                                <span className='text-red-500'>비밀번호를 입력해주세요.</span>
                              </FormDescription>
                            )} */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type='submit'>Log In</Button>
                  {loginError && (
                    <FormDescription>
                      <p className='text-red-500 ml-4'>{loginError}</p>
                    </FormDescription>
                  )}
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
        <TabsContent value='password'></TabsContent>
      </Tabs>
    </div>
  );
};

export default LogInForm;
