// import logo from "./logo.svg";
import React,{useState} from "react"
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
// import ExpenceHeader from "./components/ExpenceHeader/ExpenceHeader";
import Expences from "/home/mahesh/ReactJs/expencemanager/src/components/Expences/Expences.jsx";
import NewExpense from "/home/mahesh/ReactJs/expencemanager/src/components/NewExpense/NewExpense.js"

const dummyexpence=[
{id: "e1",
title: "Book stand",
title1:"Book Store",
amount: 2599,
date: new Date(2020, 7, 14),
},
{ 
id: "e2", 
title: "New TV",
title1:"Electronics Store",
amount: 7999,
date: new Date(2021, 2, 12) },
{
id: "e3",
title: "car shop",
amount: 2999,
title1:"bike shop",
date: new Date(2021, 2, 28),
},
{
id: "e4",
title: "New Desk (Wooden)",
amount: 4599,
date: new Date(2021, 5, 12),
}];


const App = () => {
  
    const [expences,setExpences] = useState(dummyexpence);

    const addExpensehandler = (expence) =>{

    setExpences((prevExpences)=>{

        return[expence, ...prevExpences];

      });
    }
    
  return (
    <div className="App">
      <div className="container">
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expences data={expences}></Expences>
        
      </div>

  
    </div>
    
   
  );
}

export default App
