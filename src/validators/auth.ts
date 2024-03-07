import { z } from 'zod';

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const logInSchema = z.object({
  email: z.string().trim().email({ message: '올바른 이메일을 입력해주세요.' }),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자리 이상이어야 합니다.')
    .max(32, '비밀번호는 32자리 이하이어야 합니다.')
    .refine(
      (value) => passwordRegex.test(value),
      '비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
});

export const registerSchema = z.object({
  email: z.string().trim().email({ message: '올바른 이메일을 입력해주세요.' }),
  username: z
    .string()
    .trim()
    .min(2, { message: '이름은 앞뒤 공백 없이 2글자 이상이어야 합니다.' })
    .max(100, { message: '이름은 100글자 이하이어야 합니다.' }),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자리 이상이어야 합니다.')
    .max(32, '비밀번호는 32자리 이하이어야 합니다.')
    .refine(
      (value) => passwordRegex.test(value),
      '비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
  confirmPassword: z
    .string()
    .min(8, '비밀번호는 최소 8자리 이상이어야 합니다.')
    .max(32, '비밀번호는 32자리 이하이어야 합니다.')
    .refine(
      (value) => passwordRegex.test(value),
      '비밀번호는 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
});
