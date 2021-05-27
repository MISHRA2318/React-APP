import { useState } from 'react';
import './InpExp.css';

const ExpenseForm = (props) =>{
    
   const [prevTitle,newTitle] =  useState('');
   const [Amount,newAmt] =  useState('');
   const [entDate,newdate] =  useState('');

   const titlechangeHandler = (event) => {
        newTitle(event.target.value);
   };


   const AmountchangeHandler = (event) => {
    newAmt(event.target.value);
};

const datechangeHandler = (event) => {
    newdate(event.target.value);
};

const SubmitHandler = (event) =>{
    event.preventDefault();

    const expenseData =  {
        title : prevTitle,
        amount: +Amount,
        date :  new Date(entDate),
    }

  props.onSave(expenseData);
    newTitle('');
    newAmt('');
    newdate('');

}

    //  ,
    //  
    //  
 


    return  (
        <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={prevTitle} onChange={titlechangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={Amount} onChange={AmountchangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={entDate} onChange={datechangeHandler}/>
            </div>
        </div>

        <div className="new-expense__actions ">
            <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expenses</button>
            </div>
    </form>
    );
 
}

export default ExpenseForm;