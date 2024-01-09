import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Input from "src/components/Input/Input";
import { Schema, schema } from "src/utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { login } from "src/apis/auth.api";
import { isAxiosUnprocessableEntity } from "src/utils/utils";
import { ResponseApi } from "src/types/utils.type";

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ResponseApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    }
    )

  })
  return (
    <div className='bg-orange'>
      <div className="container">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit}>
              <div className="text-2xl">Login</div>
              <div className="relative mt-8"></div>
              <Input
                type="email"
                errorMessage={errors.email?.message}
                name="email"
                className="mt-8"
                placeholder="Email"
                register={register}
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
              <div className="mt-3">
                <button className="w-full rounded-sm bg-red-500 uppercase text-white mt-2 px-3 py-3">Login</button>
              </div>
              <div className="flex items-center justify-center mt-8">
                <span className="text-black-400">Don't have an account?</span>
                <Link to='/register' className="text-red-400 ml-1">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
