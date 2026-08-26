import {createContext, useState} from 'react'

export const MyContext = createContext();

export const ContextProvider = ({children}) => {

  let [isCartOpen, setIsCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState([]);
  let incrementQuantity = (id) => {
    setCartItems(prev => prev.map(val => val.id === id ? {...val, quantity: val.quantity + 1} : val));
  }
  let decrementQuantity = (id) => {
    setCartItems(prev => prev.map(val => val.id === id ? {...val, quantity: val.quantity - 1} : val));
  }

    return (
        <MyContext.Provider value={{isCartOpen, setCartItems, cartItems, setIsCartOpen, incrementQuantity, decrementQuantity}}>
            {children}
        </MyContext.Provider>
    )
} 