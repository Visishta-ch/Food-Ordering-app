import React from 'react';
import './App.css';
import Header from './components/Layout/Header'
import MealsList from './components/Meals/MealsList';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Cart/>        
      <Header/>
      <MealsList/>
    </>
  );
}

export default App;
