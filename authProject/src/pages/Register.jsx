import {useNavigate} from 'react-router'
import {useForm} from 'react-hook-form'
import { useContext } from 'react';
import {Auth} from '../context/AuthContext'

const Register = () => {

  const {registeredUser, setRegisteredUser, setLoggedInUser} = useContext(Auth);

  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onChange'});

  const formSubmit = data => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem('registeredUser', JSON.stringify(arr));
    console.log(arr);
    setLoggedInUser(data);
    localStorage.setItem('loggedInUser', JSON.stringify(data));
    navigate('/main')


    reset();
  }

  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
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
              minLength: {
                value: 3,
                message: 'Minimum 3 characters are required'
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
          <p>Already have an account? <span onClick={() => navigate('/')} className=" cursor-pointer text-blue-600">Login here</span></p>
        </form>
      </div>

    </div>
  )
}

export default Register
