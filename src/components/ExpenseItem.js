import ExpenseDate from './ExpenseDate'; 
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';


function ExpenseItem(props){

    return (
        <div className='expense-item'>
         <ExpenseDate date={props.date}/>
          <div>{props.LocationOfExpenditure}</div>

          <div className='expense-item_description'>
            <ExpenseDetails title={props.title} amount={props.amount}/>
          </div>
        </div>
      );
}

export default ExpenseItem;