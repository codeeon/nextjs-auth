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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent } from '@/components/ui/tabs';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { logInSchema } from '@/validators/auth';
import { useToast } from '@/components/ui/use-toast';

type LogInData = { email: string; password: string };

export const LogInForm = () => {
  const { toast } = useToast();

  const form = useForm<LogInData>({
    resolver: zodResolver(logInSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<LogInData> = async (data) => {
    try {
      const validatedData = logInSchema.parse(data);
      console.log(validatedData);
      // 로그인 로직 추가 예정
    } catch (err) {
      console.error('로그인 실패:', err);
      toast({
        variant: 'destructive',
        title: '‼️ 로그인에 실패하였습니다.',
        description: '이메일과 비밀번호를 확인해주세요.',
      });
    }
  };

  return (
    <div>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsContent value='account'>
          <Card>
            <CardHeader className='items-center justify-center gap-2 mt-4'>
              <CardTitle>로그인</CardTitle>
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
                          <FormLabel>이메일</FormLabel>
                          <FormControl>
                            <Input placeholder='abc@defgh.com' {...field} />
                          </FormControl>
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
                          <FormLabel>비밀번호</FormLabel>
                          <FormControl>
                            <Input type={'password'} placeholder='********' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <CardFooter className='items-center justify-center my-4'>
                  <Button type='submit' size='lg' className='font-semibold'>
                    로그인
                  </Button>
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
