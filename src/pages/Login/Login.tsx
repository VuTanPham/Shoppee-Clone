import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Input from "src/components/Input/Input";
import { getRules } from "src/utils/rules";

interface FormData {
  email: string,
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
  })

  const rules = getRules(getValues)

  return (
    <div className='bg-orange'>
      <div className="container">
        <div className="grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit}>
              <div className="text-2xl">Register</div>
              <div className="relative mt-8"></div>
              <Input
                type="email"
                errorMessage={errors.email?.message}
                name="email"
                className="mt-8"
                rules={rules.email}
                placeholder="Email"
                register={register}
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
              <div className="mt-3">
                <button className="w-full rounded-sm bg-red-500 uppercase text-white mt-2 px-3 py-3">Register</button>
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
