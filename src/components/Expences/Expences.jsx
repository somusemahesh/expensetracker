import React,{useState} from 'react'
// import ExpenseItem from './ExpenseItem/ExpenseItem'
// import ExpenseItem from './ExpenseItem'
import './Expences.css'

// import Card from '/home/mahesh/ReactJs/expencemanager/src/components/UI/Card.jsx'
import ExpenceFilter from './ExpenceFilter'
import Card from '../UI/Card'
// import { ExpenseList } from './ExpenseList'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'

const Expences = (props) => {
  const [filterYear,setFilterYear]=useState('2022');

  const filterHandler =(selectYear) => {

    setFilterYear(selectYear);

  };
  const filterExpences =props.data.filter((expense) =>{

    return (expense.date.getFullYear().toString() === filterYear)

  });



  return (
    
      <Card className="expences">
       
      <ExpenceFilter 
      selected={filterYear} 
      ExpenceFilter={filterHandler}/>
      <ExpenseChart expenseData={filterExpences}/>
      <ExpenseList filterdata={filterExpences}>

      </ExpenseList>
      
      </Card>


    
    )
}
export default Expences