import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from "yup"

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
    email: {
        required: {
            value: true,
            message: 'Email phải bắt buộc'
        },
        pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Email không đúng định dạng'
        },
        maxLength: {
            value: 160,
            message: 'Tối đa 160 ký tự'
        },
        minLength: {
            value: 5,
            message: 'Tối thiểu 5 ký tự'
        },
    },
    password: {
        required: {
            value: true,
            message: 'Mật khẩu là bắt buộc'
        },
        maxLength: {
            value: 160,
            message: 'Tối đa là 160 ký tự'
        },
        minLength: {
            value: 5,
            message: 'Tối đa là 5 ký tự'
        }
    },
    confirm_password: {
        required: {
            value: true,
            message: 'Hãy nhập lại mật khẩu'
        },
        maxLength: {
            value: 160,
            message: 'Tối đa là 160 ký tự'
        },
        minLength: {
            value: 5,
            message: 'Tối đa là 5 ký tự'
        },
        validate:
            typeof getValues === 'function'
                ? (value) => value === getValues('password') || 'Nhập lại password'
                : undefined
    }
})

export const schema = yup.object({
    email: yup
        .string()
        .required('Email là bắt buộc')
        .email('Email không đúng định dạng')
        .min(5, 'Tối thiểu 5 ký tự')
        .max(24, 'Tối đa 24 ký tự'),
    password: yup
        .string()
        .required('Mật khẩu là bắt buộc')
        .min(5, 'Tối thiểu 5 ký tự')
        .max(16, 'Tối đa 16 ký tự'),
    confirm_password: yup
        .string()
        .required('Nhập lại mật khẩu lần nữa')
        .min(5, 'Tối thiểu 5 ký tự')
        .max(16, 'Tối đa 16 ký tự')
        .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
})

export const loginSchema = schema.omit(['confirm_password'])

type LoginSchema = yup.InferType<typeof loginSchema>

export type Schema = yup.InferType<typeof schema>
