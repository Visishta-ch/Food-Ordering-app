import React from 'react'
import './Cart.css';
import Modal from '../UI/Modal';
// import Button from '../UI/Button';
const Cart = () => {
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
          
          {/* <Button title='Cancel'></Button>
          <Button title='Order'></Button> </span> */}

            <button className='cls'>Cancel</button>
            <button className='cls'>Order</button> 
        </div>
    </Modal>

  )
}

export default Cart