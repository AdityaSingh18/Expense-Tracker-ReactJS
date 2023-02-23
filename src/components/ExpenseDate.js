import './ExpenseDate.css'
function ExpenseDate(props){
    const month = props.date.toLocaleString('eng-US',{month:'long'})
    const day = props.date.toLocaleString('eng-US',{day:'2-digit'})
    const year = props.date.getFullYear()

    return (
        <div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{day}</div>
        <div className='expense-date__day'>{year}</div>
      </div>
    )
}

export default ExpenseDate;