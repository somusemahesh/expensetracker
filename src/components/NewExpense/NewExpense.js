import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//child to parent component communication 


//after step3 pass probs in NewExpense

const NewExpense = (props) => {
  
  const onSaveExpenseDataHandler = (enteredExpenseData)=>{

    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()

    }

    console.log("FROM NewExpense",expenseData)
    props.onAddExpense(expenseData)

  }

   //step 1 : child to parent component communication
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
