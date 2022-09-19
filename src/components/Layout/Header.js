import React from 'react'
import mealsImage from '../../assets/image1.jpg';
import Summary from '../../components/Meals/Summary';
import CartButton from './CartButton';
import {BiCart} from 'react-icons/bi';

import classes from './Header.module.css'
const Header = (props) => {


  return (
    <>
        <header className={classes.header}>
            <h1>Favor FooDs</h1>
          

            <CartButton  img = <BiCart /> 
                    title='Your Cart' 
                    onClick={props.onShowCartList}
                    value = '0'
                    
                   >
               
        
            </CartButton>
        </header>
        <div className={classes['main-image']}>
            <img src = {mealsImage} alt = 'Meals'/>
            <Summary/>
        </div>
       
    </>
  )
}

export default Header