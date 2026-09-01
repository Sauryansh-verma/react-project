import useAuth from '../hooks/useAuth'
const RegisterPage = () => {
    const {navigate, register, handleSubmit, registerFormSubmit, errors} = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit(registerFormSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
            {...register('name', {
                required: 'Name is required',
                minLength:{
                    value: 3,
                    message: 'Minimum 3 characters are required'
                }
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
            {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter valid email'
                }
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {...register('password', {
                required: 'Password is required',
                minLength: {
                    value: 6,
                    message: 'Minimum 6 characters are required'
                }
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
            <p>Already have an account? <span onClick={() => navigate('/')} className="text-blue-600 cursor-pointer">Login here</span></p>
        </form>
      </div>

    </div>
  )
}

export default RegisterPage