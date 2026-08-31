import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router'
import { Auth } from '../context/AuthContext';
import {toast} from 'react-toastify'

const Login = () => {
  const navigate = useNavigate();

  const {setLoggedInUser, registeredUser} = useContext(Auth);

  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onChange'});
  const formSubmit = data => {
    setLoggedInUser(data);
    
    let user = registeredUser.find(val => val.email === data.email && val.password === data.password);
    console.log(user);
    
    if(user){
      navigate('/main');
      toast.success('Logged In successfully');
      localStorage.setItem('loggedInUser', JSON.stringify(data));
    }else{
      toast.error('User not found or wrong credentials');
    }
    reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

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


          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
          <p>Don't have an account? <span onClick={() => navigate('/register')} className=" cursor-pointer text-blue-600">Register here</span></p>
        </form>
      </div>

    </div>
  )
}

export default Login