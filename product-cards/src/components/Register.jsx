import { useState } from "react"

const Register = ({setUsers, toggle}) => {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    let handler = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    let formHandle = (e) => {
        e.preventDefault();
        setUsers(prev => [...prev, formData]);
        setFormData({
            name: "",
            email: "",
            password: ""
        })
    }
    
  return (
    <div className="bg-white rounded-2xl w-80 flex flex-col gap-4 p-6">
      <h1>Register</h1>
      <form onSubmit={formHandle} className="flex flex-col gap-4">
        <input required value={formData.name} onChange={handler} name="name" className="p-1 border border-gray-400 rounded" type="text" placeholder="Name"/>
        <input required value={formData.email} onChange={handler} name="email" className="p-1 border border-gray-400 rounded" type="text" placeholder="Email"/>
        <input required value={formData.password} onChange={handler} name="password" className="p-1 border border-gray-400 rounded" type="password" placeholder="Password"/>
        <button className="bg-blue-600 text-white rounded p-1">Submit</button>
      </form>
      <p>Already have an account? <span onClick={() => toggle(prev => !prev)} className="text-blue-600 cursor-pointer">Login here</span></p>
    </div>
  )
}

export default Register
