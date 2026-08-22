import Form from "./components/Form"
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard"

import {useState} from 'react'

const App = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div className="bg-gray-900 text-white h-screen">
      <Navbar setToggle={setToggle}/>
      <div className="h-[70%] flex items-center justify-center w-full">
        {toggle ? <UserCard/> : <Form/>}
      </div>
    </div>
  )
}

export default App
