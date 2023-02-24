import React from 'react';
import ExpenseDetails from './ExpenseDetails';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
 const clickedHandler =()=>{
  console.log('Clicked')
 }

 const deleteHandler = ()=>{
  console.log('Expense Deleted')
 }
  return (
    
    <Card className='expense-item'>
      
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickedHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
