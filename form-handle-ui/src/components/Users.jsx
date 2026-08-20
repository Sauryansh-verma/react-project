const Users = ({info, del}) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4 w-50 border border-gray-500 m-4">
      <div className="h-60 rounded-lg overflow-hidden">
        <img className="h-full w-full" src={info.image} alt="" />
      </div>
      <div>
        <h1>{info.name}</h1>
        <p className="text-sm wrap-break-word">{info.email}</p>
      </div>
      <button onClick={() => del(info.id)} className="p-1 bg-red-800 rounded-xl text-white">Delete</button>
    </div>
  )
}

export default Users
