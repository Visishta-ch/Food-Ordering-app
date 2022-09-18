import React from 'react'
import './MealsList.css';

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
           <h3>{item.name}</h3>  
           <p className="list"> {item.description} </p>
           <p className="num" >${item.price}</p>
        </li>)}
     </ul>

      

        
    </div>


  )
}

export default MealsList