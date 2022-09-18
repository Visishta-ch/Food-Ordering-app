import React from 'react';
import './App.css';
import Header from './components/Layout/Header'
import MealsList from './components/Meals/MealsList';


function App() {
  return (
    <>
      <Header/>
      <MealsList/>
    </>
  );
}

export default App;
