import {useForm} from 'react-hook-form';

const Form = () => {
  let {register, handleSubmit, reset, formState: {errors} } = useForm();
  let formSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="flex justify-center flex-col gap-2 w-[16%]">
      <h1 className="text-semibold text-xl text-center text-white">Create User</h1>

      <form onSubmit={handleSubmit(formSubmit)} className="bg-black rounded border border-gray-400 p-6 flex flex-col gap-4">
        <input {...register("name")} className="border border-gray-400 text-white rounded py-1 px-2" type="text" placeholder="Name"/>
        <input {...register("email")} className="border border-gray-400 text-white rounded py-1 px-2" type="email" placeholder="Email"/>
        <input {...register("mobile")} className="border border-gray-400 text-white rounded py-1 px-2" type="number" placeholder="Mobile" />
        <input {...register("image")} className="border border-gray-400 text-white rounded py-1 px-2" type="text" placeholder="Image"/>
        <button className="bg-blue-700 text-white text-white rounded-xl px-2 py-1">Add User</button>
      </form>

    </div>
  )
}

export default Form
