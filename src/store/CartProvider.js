import React,{useState} from 'react'
import Cartcontext from './Cartcontext';

const CartProvider = (props) => {
    const [items,setItems] = useState([]);

    
    const addItemToCart = (item) => {
      setItems([...items, item])
      // items.push(item);
      console.log('Inside Cart: Items aare', cartListItems)
    }

    const removeItemFromCart = (id) => {

    }

    const cartListItems = {

        items:items,
        totalAmount:0,
        addItems: addItemToCart,
        removeItems: removeItemFromCart
    }

  return  <Cartcontext.Provider value={cartListItems}>
    {props.children}
  </Cartcontext.Provider>
  
}

export default CartProvider