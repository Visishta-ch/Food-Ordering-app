import React,{useContext} from 'react';
import './CartButton.css';
import Cartcontext from '../../store/Cartcontext'

const CartButton = (props) => {

  const cartCtx = useContext(Cartcontext);
  let quantity = 0;
  cartCtx.items.forEach(item => {
  quantity += Number(item.quantity);
})
  return (
    <div>
        <button className='cart-btn' onClick= {props.onClick} >
          {props.img} {props.title} 
         
          <button className='cart-btn-1'>{quantity}</button>  
            
        </button>
    </div>
  )
}

export default CartButton