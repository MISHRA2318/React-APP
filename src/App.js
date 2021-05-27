import { useState } from 'react';
import SecondExp from './Components/ExpenseItem2';
import NewExpense from './Components/Forms/Forms';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
const[expenses,newExpenses] = useState(DUMMY_EXPENSES); 

    const addExpenseHandler = (expense) =>{
           newExpenses((prevExp)=>{
             return [expense,...prevExp]
           });
    };
  
  return (
    <div>
    <NewExpense AddingExp={addExpenseHandler} />
    <SecondExp items={expenses} />
     </div>
  );
 }

export default App;
