import React,{useState} from 'react'
import Cartcontext from './Cartcontext';


const CartProvider = (props) => {
    const [items,setItems] = useState([]);
       
    const addItemToCart = (item) => {
      const existingItems = [...items];
      console.log('clicked id item:',item.id);
      const itemIdx = existingItems.findIndex((i) => i.id === item.id);

      if (itemIdx !== -1) {
      
        
        console.log("already exists");
        alert('item already exists. Please update quantity in cart list')
      
        } else {
            setItems([...items, item]);
          }
     
      console.log('Quantity :', item.quantity );
      // setItems([...items, item])
      // // items.push(item);
      console.log('Inside Cart: Items are', cartListItems)
    }
 
    const removeItemFromCart = (id) => {


        
    }
    
    const cartListItems = {

        items:items,
        addItems: addItemToCart,
        removeItems: removeItemFromCart
    }

  return  <Cartcontext.Provider value={cartListItems}>
    {props.children}
  </Cartcontext.Provider>
  
  }


export default CartProvider