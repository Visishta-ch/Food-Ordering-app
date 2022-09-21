import React,{useState} from 'react';
import './App.css';
import Header from './components/Layout/Header'

import Meals  from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {

const[cartStatus, setCartStatus] = useState(false);
const OpenCartHandler = (props) => {
  setCartStatus(true);
  console.log('button clicked');
}
const CloseCartHandler = () => {
  setCartStatus(false);
}
  return (
    <>
    <CartProvider>
      { cartStatus && <Cart onCloseCartList = {CloseCartHandler}/> }     
      <Header onShowCartList={OpenCartHandler}/>

      <Meals/>
    </CartProvider>
    </>
  );
}

export default App;


/*   */