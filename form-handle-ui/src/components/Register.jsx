import { useState } from "react"

const Register = ({setUsers}) => {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
        id: ""
    });

    let handler = e => {
        let {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    let submitHandler = e => {
        e.preventDefault();
        setUsers((prev) => {
            return [...prev, formData]
        });
        setFormData({
            name: "",
            email: "",
            password: "",
            image: "",
            id: ""
        });
    }
  return (
    <div className="bg-white p-5 rounded-2xl gap-4 flex flex-col w-65">
      <h1 className="font-medium text-lg">Register</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4 items-center">
        <input required value={formData.name} onChange={handler} className="py-1 pl-4 border-2 border-gray-400 rounded-xl" type="text" name="name" placeholder="Name"/>
        <input required value={formData.email} onChange={handler} className="py-1 pl-4 border-2 border-gray-400 rounded-xl" type="email" name="email" placeholder="Email"/>
        <input required value={formData.password} onChange={handler} className="py-1 pl-4 border-2 border-gray-400 rounded-xl" type="password" name="password" placeholder="Password"/>
        <input required value={formData.image} onChange={handler} className="py-1 pl-4 border-2 border-gray-400 rounded-xl" type="text" name="image" placeholder="Image URL"/>
        <input required value={formData.id} onChange={handler} className="py-1 pl-4 border-2 border-gray-400 rounded-xl" type="text" name="id" placeholder="id"/>
        <button className="py-1.5 px-15 bg-blue-600 rounded-full w-fit text-white">Submit</button>
      </form>
    </div>
  )
}

export default Register
