import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({children}) => {
    let [toggle, setToggle] = useState(false);
    let [cartItems, setCartItems] = useState([]);

    const incrementProduct = (id) => {
        setCartItems(
            cartItems.map((val) => {
                return val.id === id ? {...val, quantity: val.quantity + 1} : val;
            })
        )
    }
    const decrementProduct = (id) => {
        setCartItems(
            cartItems.map((val) => {
                return val.id === id ? {...val, quantity: val.quantity - 1} : val;
            })
        )
    }
    return <MyContext.Provider value={{toggle, setToggle, cartItems, setCartItems, incrementProduct, decrementProduct}}>{children}</MyContext.Provider>
}