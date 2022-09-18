import React from 'react';
import './CartButton.css';

// import {BiCart} from 'react-icons/bi';


const Button = (props) => {
  return (
    <div>
        <button className='cart-btn' >
          {props.img}  {props.title} 
         
          <button className='cart-btn-1'>{props.value}</button>  
            
        </button>
    </div>
  )
}

export default Button