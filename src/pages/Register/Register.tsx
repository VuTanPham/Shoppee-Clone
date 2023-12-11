import { Link } from "react-router-dom";
import Input from "src/components/Input/Input";
import { getRules } from "src/utils/rules";
import { useForm } from 'react-hook-form'

interface FormData {
  email: string,
  password: string,
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
    },
    (data) => {
      const password = getValues('password')
    }
  )

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
                rules={rules.email}
                placeholder="Email"
              />
              <Input
                name="password"
                register={register}
                type="password"
                className="mt-8"
                errorMessage={errors.password?.message}
                rules={rules.password}
                placeholder="Password"
                autoComplete='on'
              />
              <Input
                name="confirm_password"
                register={register}
                type="password"
                className="mt-8"
                errorMessage={errors.confirm_password?.message}
                rules={rules.confirm_password}
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
