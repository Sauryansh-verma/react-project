import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      This is HOme
      <button onClick={() => navigate('/details')}>Details pe jaana hai to click karo bhai yr</button>
      <Outlet/>
    </div>
  )
}

export default Home
