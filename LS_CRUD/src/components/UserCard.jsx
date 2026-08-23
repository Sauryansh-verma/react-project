const UserCard = ({elem, del, setUpdateUser, setToggle}) => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-xl bg-black">
      <div className="h-50 w-40 overflow-hidden rounded-xl">
        <img className="h-full w-full" src={elem.image} alt="" />
      </div>
      <div>
        <h1 className="font-medium text-lg text-white">{elem.name}</h1>
        <p className="text-sm">{elem.email}</p>
      </div>
      <div className="flex gap-4 justify-center">
        <button onClick={() => {
          setUpdateUser(elem);
          setToggle(prev => !prev);
        }}  className="px-3 py-1 rounded-md font-medium bg-yellow-900">Update</button>
        <button onClick={() => del(elem.id)}  className="px-3 py-1 rounded-md font-medium bg-red-900">Delete</button>
      </div>
    </div>
  )
}

export default UserCard
