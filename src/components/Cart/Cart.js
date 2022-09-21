import React,{useContext,useState} from 'react'
import './Cart.css';
import Modal from '../UI/Modal';
import Cartcontext from '../../store/Cartcontext';

const Cart = (props) => {

  let [quantity, setQuantity] = useState(1);
   
  const cartCtx = useContext(Cartcontext);
 
    const existingItems = [...cartCtx.items]
    let amt = 0;
  
    cartCtx.items.forEach(item => {
      amt += Number((item.price)*(item.quantity));
    })
  
  

  const addQnty = (item) => {
      console.log('item added', item);
      
      const itemIdx = existingItems.findIndex((i) => i.id === item.id);
      console.log("item id",existingItems[itemIdx].quantity);
      const updatedList= existingItems[itemIdx].quantity++;
      setQuantity(updatedList);
      console.log("updated: ", updatedList);
      console.log('quantity of food in cart',item.quantity);
   
  }
  const removeAddedItem = (item) => {
    
      console.log('removing item' , item); 
      console.log( 'item id is: ',document.getElementById(item.id));
      const itemIdx = existingItems.findIndex((i) => i.id === item.id);
      if(item.quantity > 0){           
        console.log("item quantity",existingItems[itemIdx].quantity);
        const updatedList= existingItems[itemIdx].quantity--;
        setQuantity(updatedList);
        console.log("deleted: ", updatedList);
        }
      if(existingItems[itemIdx].quantity === 0){
        document.getElementById(item.id).remove();
      }
 
  }

   
  
  
    const cartItem = <ul className='cart-items'>{
    cartCtx.items.map((item) => <li className='cartList' key={item.id} id = {item.id}>
        <div >
          <h2 className='item-name'> {item.name}</h2> 
      
          <div className= 'order-qnty'>
            <span>
              {`$${item.price}`}

            </span>
            <span style = {{border:'1px solid black'}} >  {`x ${item.quantity}`} </span>
      
          </div>
        </div>
        <div className='cartListBtn'>
          <button className='btn-primary' onClick= {() => addQnty(item)}> + </button>
          {/* <button className='btn-primary' onClick= {addcartItem}> + </button> */}
          <button className='btn-primary' onClick = {() => removeAddedItem(item)} disabled = {item.quantity === 0 }> - </button>
        </div>
          </li>)
    }
   </ul>



  return (
    <Modal onCloseCartList={props.onCloseCartList}>
        {cartItem}
        <div  className='total'>
            <span>Total Amount</span>
            <span>{amt} </span>
            
        </div>
        <div className='actions'>
            <button className='cls-close' onClick={props.onCloseCartList}  >Cancel</button>
            <button className='cls'>Order</button> 
        </div>
    </Modal>

  )
}

export default Cart