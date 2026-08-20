const Usercard = ({info}) => {
  return (
    <div className="bg-white border border-gray-400 rounded-2xl h-fit p-4 flex flex-col gap-4 w-60">
        <div >
            <img className="h-60 w-62 rounded" src="https://images.unsplash.com/photo-1779896412393-25bb58f05547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div>
            <h1 className="text-lg font-medium">Name: {info.name}</h1>
            <p className="w-10">Email: {info.email}</p>
        </div>
        <button className="bg-blue-600 rounded p-1 text-white">Delete</button>
    </div>
  )
}

export default Usercard
