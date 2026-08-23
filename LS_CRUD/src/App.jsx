import { useState } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form';
import UserCard from './components/UserCard';

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []);
  let [updateUser, setUpdateUser] = useState(null);
  
  const del = id => {
    let filterUser = users.filter(elem => elem.id !== id);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  }

  return (
    <div className="bg-gray-900 text-white h-screen">
      <NavBar setToggle={setToggle}/>
      {toggle ? 
      <div className='flex p-4 gap-4'>
        {
          users.map(elem => <UserCard key={elem.id} setUpdateUser={setUpdateUser} setToggle={setToggle} del={del} elem = {elem}/>)
        }
      </div> 
      : <Form setUpdateUser={setUpdateUser} updateUser={updateUser} setToggle={setToggle} users={users} setUsers={setUsers}/>}
    </div>
  )
}

export default App
