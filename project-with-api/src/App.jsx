import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from './components/NavBar';
import ProductCard from './components/ProductCard';
import CartScreen from './pages/CartScreen';
import {useContext} from 'react'
import {MyContext} from './context/MyContext'

const App = () => {
  let [productsData, setProductsData] = useState([]);
  let {isCartOpen, cartItems} = useContext(MyContext);

  const getProductsData = async () => {
    try{
      setProductsData((await axios.get('https://fakestoreapi.com/products')).data);
    }catch(error){
      console.log("error in api", error)
    }
  }
  useEffect(() => {
    getProductsData();
  }, []);

  
  return (
    <div className='h-screen flex flex-col gap-6 p-2'>
      <Navbar/>
      {
      isCartOpen ? <CartScreen/> : 
      <div className='grid grid-cols-5 gap-4'>
        {productsData.map((val) => { 
          let isInCart = cartItems.find((elem) => elem.id === val.id); 

          return <ProductCard key={val.id} product={val} isInCart={isInCart}/>
        })}
      </div>
      }
    </div>
  )
}

export default App
