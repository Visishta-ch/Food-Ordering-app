import React,{useState} from 'react';
import './App.css';
import Header from './components/Layout/Header'
import MealsList from './components/Meals/MealsList';
import Cart from './components/Cart/Cart';

function App() {

const[cartStatus, setCartStatus] = useState(false);
const OpenCartHandler = (props) => {
  setCartStatus(true);
}
const CloseCartHandler = (props) => {
  setCartStatus(false);
}
  return (
    <>
      { cartStatus && <Cart onCloseCartList = {CloseCartHandler}/> }     
      <Header onShowCartList={OpenCartHandler}/>
      <MealsList/>
    </>
  );
}

export default App;


/*   */