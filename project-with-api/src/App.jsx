import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from './components/NavBar';
import ProductCard from './components/ProductCard';
import CartScreen from './pages/CartScreen';

const App = () => {
  let [productsData, setProductsData] = useState([]);
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState(["hello"]);
  console.log(cartItems);

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
      <Navbar setIsCartOpen={setIsCartOpen}/>
      {
      isCartOpen ? <CartScreen cartItems={cartItems}/> : 
      <div className='grid grid-cols-5 gap-4'>
        {productsData.map((val) => {
          return <ProductCard key={val.id} product={val} setCartItems={setCartItems}/>
        })}
      </div>
      }
    </div>
  )
}

export default App
