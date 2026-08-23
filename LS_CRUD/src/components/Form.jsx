import {useForm} from 'react-hook-form';
import { nanoid } from 'nanoid'

const Form = ({users, setUsers, setToggle, updateUser, setUpdateUser}) => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    mode: "onChange",
    defaultValues: updateUser
  });
  const formSubmit = data => {
    if(updateUser){
      setUsers(prev => {
        return prev.map(val => {
          return val.id === updateUser.id ? {...data, id: nanoid()} : val;
        });
      });
      setUpdateUser(null);
    }else{
      let arr = [...users, {...data, id: nanoid()}];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle(prev => !prev);
  }
  return (
    <div className="flex justify-center flex-col gap-2 items-center h-[80%] ">
      <h1 className="text-semibold text-xl text-center text-white">Create User</h1>

      <form onSubmit={handleSubmit(formSubmit)} className="bg-black rounded border border-gray-400 w-[19%] min-w-3xs p-6 flex flex-col gap-4">
        <div>
          <input 
          {...register("name", {
            required: "name is required",
            minLength: {
              value: 3,
              message: "minimum 3 digits are required"
            }
          })} 
          className="border w-full border-gray-400 text-white rounded py-1 px-2" 
          type="text" 
          placeholder="Name"
          />
          {errors.name && <p className='text-sm mt-1 text-red-500'>{errors.name.message}</p>}
        </div>
        <div>
          <input 
          {
            ...register("email",{
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "please enter a valid email"
              }
            })
          }
          className="border w-full border-gray-400 text-white rounded py-1 px-2" 
          type="email" 
          placeholder="Email"
          />
          {errors.email && <p className='text-sm mt-1 text-red-500'>{errors.email.message}</p>}
        </div>
        <div>
          <input 
          {
            ...register("mobile", {
              required: "mobile is required",
              minLength: {
                value: 10,
                message: "minimum 10 digits are required"
              },
              maxLength: {
                value: 10,
                message: "maximum 10 digits are required"
              }
            })
          } 
          className="border w-full border-gray-400 text-white rounded py-1 px-2" 
          type="number" 
          placeholder="Mobile" 
          />
          {errors.mobile && <p className='text-sm mt-1 text-red-500'>{errors.mobile.message}</p>}
        </div>
        <div>
          <input 
          {
            ...register("image", {
              required: "image is required"
            })
          } 
          className="border w-full border-gray-400 text-white rounded py-1 px-2" 
          type="text" placeholder="Image"
          />
          {errors.image && <p className='text-sm mt-1 text-red-500'>{errors.image.message}</p>}
        </div>
        <button className="bg-blue-700 text-white text-white rounded-xl px-2 py-1">"Add User"</button>
      </form>

    </div>
  )
}

export default Form
