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
import { registerSchema } from '@/validators/auth';
import { useToast } from '@/components/ui/use-toast';
import RegisterCarousel from './carousel';

type RegisterData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
  const { toast } = useToast();

  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    try {
      const validatedData = registerSchema.parse(data);
      console.log(validatedData);
      validatedData.password === validatedData.confirmPassword
        ? // 회원가입 로직 추가 예정
          alert(validatedData)
        : toast({
            variant: 'destructive',
            title: '‼️ 가입에 실패하였습니다.',
            description: '비밀번호를 확인해주세요.',
          });
    } catch (err) {
      console.error('로그인 실패:', err);
      //   toast({
      //     variant: 'destructive',
      //     title: '‼️ 가입에 실패하였습니다.',
      //     description: '입력한 정보를 확인해주세요.',
      //   });
    }
  };

  return (
    <div>
      <Tabs defaultValue='account' className='w-[800px]'>
        <TabsContent value='account'>
          <Card className='grid grid-cols-2'>
            <CardHeader className='items-center justify-center gap-4 mt-4'>
              <CardTitle>회원가입</CardTitle>
              <CardDescription>codeeon의 Next.js-Auth에 오신 것을 환영합니다!</CardDescription>
              <RegisterCarousel />
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className='space-y-2 w-[400px] mt-12'>
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
                      name='username'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이름</FormLabel>
                          <FormControl>
                            <Input placeholder='닉네임' {...field} />
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
                  <div className='space-y-1'>
                    <FormField
                      control={form.control}
                      name='confirmPassword'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>비밀번호 확인</FormLabel>
                          <FormControl>
                            <Input type={'password'} placeholder='********' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <CardFooter className='justify-center my-4'>
                  <Button size='lg' type='submit' className='font-semibold'>
                    가입하기
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
        {/* <TabsContent value='password'></TabsContent> */}
      </Tabs>
    </div>
  );
};
