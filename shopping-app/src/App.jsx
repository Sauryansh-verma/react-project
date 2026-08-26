import { useEffect, useState } from "react"
import axios from 'axios';
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Cart from './pages/Cart'
import {MyContext} from './context/MyContext';
import { useContext } from "react";


const App = () => {
  let [productsData, setProductsData] = useState([]);
  const getProductsData = async () => {
    try{
      setProductsData( ((await axios.get('https://fakestoreapi.com/products')).data));
    }catch(error){
      console.log(`error in data getting ${error}`);
    }
  }

  useEffect(() => {
    getProductsData();
  }, [])

  let {toggle} = useContext(MyContext);

  return (
    <div className=" p-5 bg-black flex flex-col gap-6">
      <Navbar/>
      {
        toggle ? <Cart/> : <Home productsData={productsData}/>
      }
    </div>
  )
}

export default App
