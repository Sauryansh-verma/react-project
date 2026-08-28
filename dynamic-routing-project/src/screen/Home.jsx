import axios from 'axios'

const Home = () => {
  const getProduct = async () => {
    let data = await axios.get('https://fakestoreapi.com/products');
    console.log(data.data);
  }
  getProduct();
  return (
    <div>
      This is Home
    </div>
  )
}

export default Home
