import { useContext } from 'react'
import CartCard from '../components/CartCard'
import { MyContext } from '../context/MyContext'


const Cart = () => {

  let {cartItems} = useContext(MyContext);

  return (
    <div className='h-screen'>
      {cartItems.map(val => <CartCard product={val}/>)}
    </div>
  )
}

export default Cart
