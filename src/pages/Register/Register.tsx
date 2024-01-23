import { Link } from "react-router-dom";
import Input from "src/components/Input/Input";
import { schema, Schema } from "src/utils/rules";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from "@tanstack/react-query";
import { omit } from 'lodash'
import { isAxiosUnprocessableEntity } from "src/utils/utils";
import { ResponseApi } from "src/types/utils.type";
import authApi from "src/apis/auth.api";


type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  // const rules = getRules(getValues)

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, '[confirm_password]')
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true), setProfile(data.data.data.user), navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ResponseApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className="container">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit} noValidate>
              <div className="text-2xl">Register</div>
              <div className="relative mt-8"></div>
              <Input
                name="email"
                register={register}
                type="email"
                className="mt-8"
                errorMessage={errors.email?.message}
                placeholder="Email"
              />
              <Input
                name="password"
                register={register}
                type="password"
                className="mt-8"
                errorMessage={errors.password?.message}
                placeholder="Password"
                autoComplete='on'
              />
              <Input
                name="confirm_password"
                register={register}
                type="password"
                className="mt-8"
                errorMessage={errors.confirm_password?.message}
                autoComplete='on'
                placeholder="Confirm Password"
              />
              <div className="mt-3">
                <button type="submit"
                  className="w-full rounded-sm bg-red-500 uppercase text-white mt-2 px-3 py-3">Register</button>
              </div>
              <div className="flex items-center justify-center mt-8">
                <span className="text-black-400">Already a member?</span>
                <Link to='/login' className="text-red-400 ml-1">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
