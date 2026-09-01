import React from 'react'
import { useContext } from 'react'
import {Auth} from '../context/AuthContext'
import {Navigate, Outlet} from 'react-router'

const PublicRoute = () => {
    const {loggedInUser} = useContext(Auth);

    if(loggedInUser) {
        return <Navigate to={'/main'}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute
