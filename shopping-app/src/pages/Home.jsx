import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { MyContext } from '../context/MyContext'

const Home = ({productsData}) => {
  let {cartItems} = useContext(MyContext);

  return (
    <div className='grid grid-cols-5 gap-4'>
      {
        productsData.map((val) => {
          let item = cartItems.find((elem) => elem.id === val.id);

            return <ProductCard key={val.id} product={val} item={item}/>
        })
      }
    </div>
  )
}

export default Home
