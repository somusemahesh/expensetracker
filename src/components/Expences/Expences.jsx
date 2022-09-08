import React,{useState} from 'react'
// import ExpenseItem from './ExpenseItem/ExpenseItem'
// import ExpenseItem from './ExpenseItem'

// import Card from '/home/mahesh/ReactJs/expencemanager/src/components/UI/Card.jsx'
import ExpenceFilter from './ExpenceFilter'
import Card from '../UI/Card'
// import { ExpenseList } from './ExpenseList'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'

const Expences = (props) => {
  const [filterYear,setFilterYear]=useState('2020');

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
      
      {/* {filterExpences.map((expense)=>
      <ExpenseItem

      key={expense.id}

      title={expense.title}

      amount={expense.amount}

      date={expense.date}

    />
            
      )} */}
      {/* <ExpenseItem
        date={props.data[0].date.toDateString()}
        
        title={props.data[0].title}
        amount={props.data[0].amount}
        title1={props.data[0].title1}
      ></ExpenseItem>
       <ExpenseItem
        date={props.data[1].date.toDateString()}
        title={props.data[1].title}
        amount={props.data[1].amount}
        title1={props.data[1].title1}
      ></ExpenseItem>
       <ExpenseItem
        date={props.data[2].date.toDateString()}
        title={props.data[2].title}
        amount={props.data[2].amount}
        title1={props.data[2].title1}
      ></ExpenseItem> */}
      </Card>


    
    )
}
export default Expences