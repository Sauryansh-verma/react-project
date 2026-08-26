import CartCard from './components/CartCard';
const CartScreen = ({cartItems}) => {
  return (
    <div className="bg-red-500 h-[100vh]">
        {
            cartItems.map((elem) => {
                return <CartCard product={elem}/>
            })
        }
    </div>
  )
}

export default CartScreen
