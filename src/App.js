// import logo from "./logo.svg";
import React,{useState} from "react"
import "./App.css";
import { Profiler } from "react";
// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
// import ExpenceHeader from "./components/ExpenceHeader/ExpenceHeader";
// import Expences from "/home/mahesh/ReactJs/expencemanager/src/components/Expences/Expences.jsx";
import Expences from "./components/Expences/Expences";
// import NewExpense from "/home/mahesh/ReactJs/expencemanager/src/components/NewExpense/NewExpense.js"
import NewExpense from "./components/NewExpense/NewExpense"
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
date: new Date(2020, 5, 12),
}];


const App = () => {
  
    const [expences,setExpences] = useState(dummyexpence);

    const addExpensehandler = (expence) =>{

    setExpences((prevExpences)=>{

        return[expence, ...prevExpences];

      });
    }
    
  const callbackFunction=(id,phase,actualDuration,baseDuration,startTime,commitTime,interaction)=>{
    console.log("ID:"+id+"Phase is:"+phase)
    console.log("Actual duration is:"+actualDuration+"Base Duration:"+baseDuration)
    console.log("Start Time:"+startTime+"Commit Time"+commitTime)

}
  return (
    <div className="App">
      <div className="container">

     <Profiler id ="NewExpense" onRender={callbackFunction}>
      <NewExpense onAddExpense={addExpensehandler}/>
      </Profiler>
      <Profiler id="expensedata" onRender={callbackFunction}>
      <Expences data={expences}></Expences>
      </Profiler>
      </div>

  
    </div>
    
   
  );
}

export default App
