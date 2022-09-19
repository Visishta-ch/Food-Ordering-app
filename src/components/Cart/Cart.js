import React from 'react'
import './Cart.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
   
   const cartItem = <ul className='cart-items'>{[{id:'c1',name:'Chicken Dum Biriyani',amount:2,price:26.24}]
    .map((item) => <li>{item.name}</li>)
    }
    
    </ul>
  return (
    <Modal>
        {cartItem}
        <div  className='total'>
            <span>Totoal Amount</span>
            <span>26.24</span>
        </div>
        <div className='actions'>
            <button className='cls-close' onClick={props.onCloseCartList}>Cancel</button>
            <button className='cls'>Order</button> 
        </div>
    </Modal>

  )
}

export default Cart