import React from 'react'
import './MealsList.css';
import Form from './Form.js'

const dummyList = [
    {   id: 1,
        name: 'Chicken Dum Biriyani',
        description:'South Indian Style',
        price: 30
    },
    {   id: 2,
        name: 'Mughlai Chicken Biriyani',
        description:'North Indian Dish',
        price: 40
    }
];
const MealsList = (props) => {

  return (
    <div className='container'>
    
     <ul>
        {dummyList.map((item) => <li className='list-item'>
        <Form/>
           <h3>{item.name}</h3>  
           <p className="list-description"> {item.description} </p>
           <p className="list-price" >${item.price}</p>
           
        </li>)}

     </ul>

      

        
    </div>


  )
}

export default MealsList