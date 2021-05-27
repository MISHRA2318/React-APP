import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';


const ExpenseList = (props) =>{
    
    if (props.it.length === 0) {
     return     <h2 className='expenses-list__fallback'>No Expenses Found</h2>
}

return (
<ul className='expenses-list'>
                {props.it.map((expense)=>(
                <ExpenseItem
                key={expense.id}
                title ={expense.title}
                amount = {expense.amount}
                date = {expense.date}/>
          ))}
</ul>
);
}

export default ExpenseList;