const Form = ({toggle}) => {
  return (
    <div className="bg-white rounded-2xl w-80 flex flex-col gap-4 p-6">
      <h1>Login</h1>
      <form className="flex flex-col gap-4">
        <input className="p-1 border border-gray-400 rounded" type="text" placeholder="Email"/>
        <input className="p-1 border border-gray-400 rounded" type="text" placeholder="Password"/>
        <button className="bg-blue-600 text-white rounded p-1">Submit</button>
      </form>
      <p>Didn't have an account? <span onClick={() => toggle(prev => !prev)} className="text-blue-600 cursor-pointer">Register here</span></p>
    </div>
  )
}

export default Form
