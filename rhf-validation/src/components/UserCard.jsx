const UserCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-xl bg-black">
      <div className="h-50 w-40 overflow-hidden rounded-xl">
        <img className="h-full w-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
      </div>
      <div>
        <h1 className="font-medium text-lg text-white">Name</h1>
        <p>Email</p>
      </div>
      <div className="flex gap-4 justify-center">
        <button className="px-3 py-1 rounded-md font-medium bg-yellow-900">Update</button>
        <button className="px-3 py-1 rounded-md font-medium bg-red-900">Delete</button>
      </div>
    </div>
  )
}

export default UserCard
