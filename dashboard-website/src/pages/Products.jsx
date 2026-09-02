import { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosInstance'
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try{
      let data = await axiosInstance.get('/products');
      setProducts(data.data);
      setIsLoading(false);
    }catch(error){
      console.log('error while products api', error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  if(isLoading) return <div className='flex items-center justify-center font-bold text-2xl h-full'>Loading...</div>
  return (
    <div className='grid grid-cols-5 gap-4'>
      {
        products.map(val => <ProductCard product={val}/>)
      }
    </div>
  )
}

export default Products
