import { useContext } from "react"
import { Auth } from "../context/AuthContext"
import {Navigate, Outlet} from 'react-router'

const AuthProtected = () => {
    const {loggedInUser} = useContext(Auth);

    if(!loggedInUser){
        return <Navigate to={'/'}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthProtected
