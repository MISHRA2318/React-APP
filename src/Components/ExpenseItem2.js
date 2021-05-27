
import './ExpenseItem2.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList'
import ExpenseChar from './Expensechart';
import { useState } from 'react';



function SecondExp(props){
  
      const [Prev,New_y] = useState('2020');

     const FilterHandler=(SelctedYear)=>{
           New_y(SelctedYear);
     }


     /*{}  this  is done because we have to render the list of data dynamically */
   
   const FilteredYear = props.items.filter((expense) =>(
                 expense.date.getFullYear().toString()===Prev
                  )
   );

 
   
     return(
         
        <div>
           
        <div className="expenses"> 
        <ExpensesFilter 
        Sel={Prev}  
        onHandle={FilterHandler}/>
        <ExpenseChar expenses={FilteredYear}/>
     <ExpenseList it={FilteredYear}/>
        
      </div>
      </div>
     );

}

export default SecondExp;



// {FilteredYear.length===0 && <p>No Expense Found</p>}  this && operator is just shortcut of javascript
//  this method is called ternary operator
