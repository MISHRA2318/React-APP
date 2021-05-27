import { useState } from 'react';
import './Form.css';
import ExpenseForm from './InpExp';
const NewExpense = (props) =>{
     
     const SaveExpenseDate = (enteredExp) =>{
                
        const ExpenseData ={
                   ...enteredExp,
                 id: Math.random().toString()  
        }
        props.AddingExp (ExpenseData);
        setEditing(false);
    }

 
    const [isEditing,setEditing] = useState(false);

     const ExpHandler = () =>{
       setEditing(true)
     }  

     const stopEditingFunction = () =>{
       setEditing(false);
     }
    return <div className="new-expense"> 
     {!isEditing && <button onClick={ExpHandler} >Add New Expense</button>}
     {isEditing && <ExpenseForm onSave={SaveExpenseDate} onCancel={stopEditingFunction}/>}
 
    </div>
}

export default NewExpense;