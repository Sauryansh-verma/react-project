import { useContext } from 'react'
import CartProductCard from '../components/CartCard'
import { MyContext } from '../context/MyContext'

const CartScreen = () => {
    let {cartItems} = useContext(MyContext);
  return (
    <div className="h-[100vh] grid grid-cols-4 grid-rows-5 gap-4">
        {
            cartItems.map((elem) => {
                return <CartProductCard key={elem.id} product={elem}/>
            })
        }
    </div>
  )
}

export default CartScreen
