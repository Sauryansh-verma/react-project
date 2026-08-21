import {useRef, useState} from 'react'

const Form = () => {
  let [formData, setFormData] = useState({});
  let formRef = useRef({});

  let submitHandler = e => {
    e.preventDefault();
    let {name, price, category, image} = formRef.current;
    setFormData({
      name: name.value,
      price: price.value,
      category: category.value,
      image: image.value
    })
  }
  return (
    <div className="w-80">
      <form onSubmit={submitHandler} className="bg-white rounded p-4 border border-gray-300 flex flex-col gap-4">
        <input ref={e => formRef.current.name = e} className="p-1 border border-gray-400 rounded" type="text" placeholder="Name"/>
        <input ref={e => formRef.current.price = e} className="p-1 border border-gray-400 rounded" type="text" placeholder="Price"/>
        <div className="flex flex-col gap-2">
          <span>Select Category</span>
          <select ref={e => formRef.current.category = e} className="p-1 border border-gray-400 rounded">
            <option value="Mens">Mens</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <input ref={e => formRef.current.image = e} className="p-1 border border-gray-400 rounded" type="text" placeholder="Image"/>
        <button className="p-1 bg-blue-600 text-white rounded">CREATE</button>
      </form>
      <div>
        <h1>Name: {formData.name}</h1>
        <h1>Price: {formData.price}</h1>
        <h1>Category: {formData.category}</h1>
        <h1>Image: {formData.image}</h1>
      </div>
    </div>
  )
}

export default Form
