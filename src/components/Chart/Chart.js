import React from 'react'
import ChartBar from '../Chart/ChartBar';
import './Chart.css'
const Chart = (props) => {
    const dataValues=props.expenseDataValues.map((expensedata)=>expensedata.value)
    const maxValues=Math.max(...dataValues);
  return(
    <div className="chart">
        {props.expenseDataValues.map((expensedata) => (
        <ChartBar
          key={expensedata.month}
          value={expensedata.value}
          maxValue={maxValues}
          label={expensedata.month}
        />
      ))}



    </div>
  )
}
export default Chart