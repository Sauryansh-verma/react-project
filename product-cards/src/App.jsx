import { useState } from "react";
import Login from "./components/Login"
import Register from "./components/Register";
import Usercard from "./components/Usercard";

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState([]);
  let del = (id) => setUsers(users.filter(e => e.id !== id));

  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center gap-5">
       {toggle ? <Login toggle={setToggle}/> : <Register setUsers={setUsers} toggle={setToggle}/>}
       {users.map(val => <Usercard info={val}/>)}
    </div>
  )
}

export default App
