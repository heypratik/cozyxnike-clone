import React, {createContext, useContext, useState} from "react";

const ShopContext = createContext()

export const StateContext =({children}) => {

    const [qty, setQty] = useState(1)
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    function addQty() {
        setQty(prevQty => prevQty + 1)
    }

    function reduceQty() {
        if (qty === 1) {
            return 
        } else {
            setQty(prevQty => prevQty - 1)
        }
    }

    function onAdd(product, quantity) {

        setTotalPrice(prevToal => prevToal + product.price * quantity)

        setTotalQuantity(prevToal => prevToal + quantity)

        const exists = cartItems.find((item) => item.slug === product.slug)
        if (exists) {
                setCartItems(cartItems.map((item) => 
                    item.slug === product.slug ? {...exists, quantity: exists.quantity + quantity} : item
                ))
        } else {
            setCartItems([...cartItems, {...product, quantity: quantity}])
        }
    }

    function onRemove(product) {

        setTotalPrice(prevToal => prevToal - product.price)
        
        setTotalQuantity(prevToal => prevToal - 1)

        const exists = cartItems.find((item) => item.slug === product.slug)
        if (exists.quantity === 1) {
            setCartItems(cartItems.filter(item => item.slug !== product.slug))
        } else {
            setCartItems(cartItems.map((item) => item.slug === product.slug ? {...exists, quantity: exists.quantity -1} : item ))
        }

    }

    return (
        <ShopContext.Provider value={{qty, addQty, reduceQty, onAdd, cartItems, setShowCart, showCart, onRemove, totalQuantity, totalPrice, setQty}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContext