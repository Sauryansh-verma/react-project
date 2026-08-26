const Navbar = ({setIsCartOpen}) => {
  return (
    <div className="py-3 px-6 bg-black rounded-4xl flex justify-between items-center">
      <div className="h-15 w-15 rounded-full">
        <img className="h-full w-full object-cover rounded-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
      </div>
      <div className="flex justify-between font-medium w-[10%] text-white items-center">
        <p onClick={() => {setIsCartOpen(false)}} className="cursor-pointer">HOME</p>
        <p onClick={() => {setIsCartOpen(true)}} className="cursor-pointer">CART</p>
      </div>
      <button className="py-2 px-3 text-lg cursor-pointer font-medium rounded-xl bg-blue-700 text-white">Create user</button>
    </div>
  )
}

export default Navbar
