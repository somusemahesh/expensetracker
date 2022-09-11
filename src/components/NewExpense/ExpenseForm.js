import React, { useState } from 'react';
// import Popup from './PopupForm/Popup';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [show,setShow]=useState(false)


  const [userInput,updateUserInput]=useState(
    {
      inputTitle:'',
      inputDate:'',
      inputAmount:'',
    }
  )

  const dateUpdateHandler=(event)=>{
    updateUserInput({
      ...userInput,
inputDate:event.target.value,
    })
  }
  const titleUpdateHandler=(event)=>{
    updateUserInput({
      ...userInput,
inputTitle:event.target.value,
    })
  }


  const amountUpdateHandler=(event)=>{
    updateUserInput({
      ...userInput,
      inputAmount:event.target.value,
    })
  }

  const submitButtonHandler=(event)=>{
    event.preventDefault();
    const expenceData={
      title:userInput.inputTitle,
      amount:userInput.inputAmount,
      date:new Date(userInput.inputDate),
    }

    console.log("Data in Expence form",expenceData);
    props.onSaveData(expenceData)

    updateUserInput({
      inputTitle:'',
      inputAmount:'',
      inputDate:'',
    })
    setShow(!show)

  }

 
return (
 
 <div class="form">
  <div>
    
 
  {  
  
   show?<form onSubmit={submitButtonHandler}>
     
    
  <div class="title">Welcome</div>
  <div class="subtitle">Let's create your expense!</div>
  <div class="input-container ic1">
    <input id="itemname" 
    class="input" 
    type="text" 
    placeholder=" " 
    value={userInput.inputTitle}
    onChange={titleUpdateHandler}/>
    
    <div class="cut"></div>
    <label for="itemname" class="placeholder">Item name</label>
  </div>
  <div class="input-container ic2">
    <input id="amount" 
    class="input" 
    type="number" 
    placeholder=" " 
    value={userInput.inputAmount}
    onChange={amountUpdateHandler}/>
    <div class="cut"></div>
    <label for="amount" class="placeholder">Amount</label>
  </div>
  <div class="input-container ic2">
    <input id="date" 
    class="input" 
    type="date" placeholder=" " 
    value={userInput.inputDate}
    onChange={dateUpdateHandler}/>
    <div class="cut cut-short"></div>
    <label for="email" class="placeholder">Date</label>
  </div>
  <button type="text" class="submit">submit</button>

  </form>:null
}
<button className="addexpense" onClick={()=>setShow(!show)}>Add Expence</button>

  
</div>
    
</div>
  )
};
export default ExpenseForm;
