import Form from "./components/Form"
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard"

import {useState} from 'react'

const App = () => {

  let [users, setUsers] = useState([]);
  const del = id => {
    setUsers(users.filter((elem, index) => index !== id));
  }
  let [upUser, setUpUser] = useState({});
  const updateUser = (elem) => {
    setUpUser(elem);
  }
  
  let [toggle, setToggle] = useState(false);
  
  return (
    <div className="bg-gray-900 text-white h-screen">
      <Navbar setToggle={setToggle} setUpUser={setUpUser}/>
      <div className="h-[70%] flex items-center justify-center gap-4 w-full">
        
        {toggle ? users.map((elem, index) => {
          return <UserCard key={index} id={index} setToggle={setToggle} del={del} elem={elem} updateUser={updateUser}/>
        }) : <Form upUser={upUser} setToggle={setToggle} setUsers = {setUsers}/>}
      </div>
    </div>
  )
}

export default App
