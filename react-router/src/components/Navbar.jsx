import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
      <nav className='w-full flex justify-between px-6 py-4 items-center'>
        <h1>Logo</h1>
        <div className='flex items-center gap-10'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </div>
        <button>LOGIN</button>
      </nav>
  )
}

export default Navbar
