import React,{useContext} from 'react'
import './Cart.css';
import Modal from '../UI/Modal';
import Cartcontext from '../../store/Cartcontext';


const Cart = (props) => {

  const cartCtx = useContext(Cartcontext);
   
  //  const cartItem = <ul className='cart-items'>{[{id:'c1',name:'Chicken Dum Biriyani',amount:2,price:26.24}]
  //   .map((item) => <li style= {{fontFamily:'cursive', fontSize:'20px'}}>{item.name} </li>)
  //   }
  
    const cartItem = <ul className='cart-items'>{
    cartCtx.items.map((item) => <li style= {{fontFamily:'cursive', fontSize:'20px'}}> {item.name} Qnty: {item.quantity} </li>)
    }
    
    
    </ul>
  return (
    <Modal onCloseCartList={props.onCloseCartList}>
        {cartItem}
        <div  className='total'>
            <span>Total Amount</span>
            <span>26.24</span>
        </div>
        <div className='actions'>
            <button className='cls-close' onClick={props.onCloseCartList} >Cancel</button>
            <button className='cls'>Order</button> 
        </div>
    </Modal>

  )
}

export default Cart