import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black text-white rounded-b-4xl">
        <h1 className="text-xl bold-bolder">Logo</h1>
        <div className="flex items-center gap-10">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </div>
        <button className="bg-blue-600 rounded-xl px-4 py-2">Login</button>
    </nav>
  )
}

export default Navbar
