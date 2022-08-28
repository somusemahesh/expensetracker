import React, { useState } from 'react';
// import ExpenseDate from "../../ExpenseDate/ExpenseDate";
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
import Card from '/home/mahesh/ReactJs/expencemanager/src/components/UI/Card.jsx'
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  
return (


  <Card className='expense-item'>
    <div className="itemcontainer">
      <div className="itemdate">
        <ExpenseDate date={props.date} />
      </div>
      <div className='itemtitle'>
        <p>{title}</p>
      </div>
    
      <div className="itemprice ">
      ${props.amount}
      </div>
      <div className="itembutton">
        <button onClick={clickHandler} className="clickme">Change me</button>
  
      </div>
      
    </div>
  </Card>
  );
}

export default ExpenseItem
