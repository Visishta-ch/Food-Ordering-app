import React,{useContext} from 'react';

import Input from '../../components/UI/Input';
import classes from './MealItemForm.module.css';
import Cartcontext from '../../store/Cartcontext';

const MealItemForm = (props) => {

    const cartCtx = useContext(Cartcontext);
    // console.log('item rendered',cartCtx)
    const addItemToCart =(e) => {
        const quantity = document.getElementById('amount_' + props.id).value

           e.preventDefault();
        //    cartCtx.items.push(props.item) 
            cartCtx.addItems({...props.item,quantity:quantity} ); 
           console.log('after adding: ' , cartCtx);
    }


  return (
        <form className={classes.form}>
        {/* {console.log('inside status' , cartCtx.items)} */}
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addItemToCart} > + Add</button>
    </form>
  );
};

export default MealItemForm;