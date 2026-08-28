import axios from "axios";
import { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from '../components/ProductCard'
import { Outlet } from "react-router";

const Home = () => {
  let { setProductsData, productsData } = useContext(MyStore);

  const getProduct = async () => {
    try{
      let data = await axios.get("https://fakestoreapi.com/products");
      setProductsData(data.data);
    }catch(error){
      console.log(`error while api calling: ${error}`);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
  <div className="grid grid-cols-6 gap-4 p-4">
    {
      productsData.map(val => <ProductCard key={val.id} product={val} />)
    }
  </div>);
};

export default Home;
