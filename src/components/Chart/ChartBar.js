import React from 'react'
import './ChartBar.css'
const ChartBar = (props) => {
  let barHeight='0%';
  if(props.maxValue>0){
    barHeight=Math.round((props.value / props.maxValue) * 100).toString() + '%';
  }

  return (
    <div>

      <div className='chartbar'>
          <div className='chartbarinner'>
              <div className='chartbarfill' style={{height: barHeight}}></div>
          </div>
          <div className='chartlabel'>{props.label}</div>
      </div>
        

    </div>
  )
}
export default ChartBar