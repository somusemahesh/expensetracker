import React from 'react'
import ExpenseItem from './ExpenseItem'
const ExpenseList= (props)=> {
    let filterlist=<h1>Expence Not found</h1>
    if (props.filterdata.length>0) {
        filterlist=props.filterdata.map(expense=>(
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}></ExpenseItem>
        ))

    }
   return (
    <div>
        {filterlist}
    </div>
  )
}
export default ExpenseList
