import { useState } from "react"
import Register from "./components/Register"
import Users from "./components/Users";

const App = () => {
  let [users, setUsers] = useState([]);

  let del = id => {
    setUsers(users.filter(elem => elem.id !== id));
  }
  return (
    <div className="bg-gray-200 p-4 h-screen">
        <Register setUsers={setUsers}/>
      <div className="flex flex-wrap gap-4">
        {users.map((e) => {
          return <Users info = {e} del={del}/>
        })}
      </div>
    </div>
  )
}

export default App
