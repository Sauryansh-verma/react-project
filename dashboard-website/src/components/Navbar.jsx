import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { Auth } from '../context/AuthContext'

const Navbar = () => {
    const {setLoggedInUser} = useContext(Auth);
    const logout = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
    }

  return (
    <div className='h-screen flex flex-col p-6 justify-between border-r'>
        <div className='flex flex-col gap-12 justify-end'>
        <h1 className='text-3xl font-medium'>E-comm</h1>
        <div className='flex gap-5 flex-col pl-7'>
            <NavLink className={({isActive}) => isActive ? 'text-red-500 border-b border-black font-medium' : 'border-b text-md pb-1 '} end to={'/main'}>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-red-500 border-b border-black font-medium' : 'border-b text-md pb-1 '} to={'users'}>Users</NavLink>
            <NavLink className={({isActive}) => isActive ? 'text-red-500 border-b border-black font-medium' : 'border-b text-md pb-1 '} to={'products'}>Products</NavLink>
        </div>
        </div>
        <div className='px-8'>
            <button onClick={logout} className='py-2 w-full bg-red-500 text-white rounded-xl'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar