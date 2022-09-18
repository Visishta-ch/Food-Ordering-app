import React from 'react'
import Button from '../UI/Button';
import './Form.css'

const Form = () => {
  return (
    <>
    <form className='form-item'>
        <label>Amount</label>
        <input type = 'number' value = '1'/> <br/>
        <Button title="+ Add"></Button>
    </form>
    
    </>
  )
}

export default Form