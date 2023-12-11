import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

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