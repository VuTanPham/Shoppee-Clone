import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
    type: React.HTMLInputTypeAttribute
    errorMessage?: string
    placeholder?: string
    className?: string
    name: string
    rules?: RegisterOptions
    autoComplete?: string
    register: UseFormRegister<any>
}

export default function Input({
    type,
    errorMessage,
    placeholder,
    className,
    name,
    rules,
    autoComplete,
    register
}: Props) {
    return (
        <div className={className}>
            <input
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                {...register(name, rules)} />
            <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{errorMessage}</div>
        </div>
    )
}
