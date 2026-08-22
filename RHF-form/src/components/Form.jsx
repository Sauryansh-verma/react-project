import {useForm} from 'react-hook-form';
 
const Form = () => {
  let {register,handleSubmit, reset, formState: {errors}} = useForm();
  console.dir(register)

  return (
    <div className="w-80">
      <form onSubmit={handleSubmit((date) => {
        console.log(date);
        reset();
      })} className="bg-white rounded p-4 border border-gray-300 flex flex-col gap-4">
        <input {...register("Product Name")} className="p-1 border border-gray-400 rounded" type="text" placeholder="Name"/>
        <input {...register("Price")} className="p-1 border border-gray-400 rounded" type="text" placeholder="Price"/>
        <input {...register("Category")} className="p-1 border border-gray-400 rounded" type="text" placeholder="Category"/>
        <input {...register("Image")} className="p-1 border border-gray-400 rounded" type="text" placeholder="Image"/>
        <button className="p-1 bg-blue-600 text-white rounded">CREATE</button>
      </form>
    </div>
  )
}

export default Form
