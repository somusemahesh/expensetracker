import React from 'react'
import './ExpenceFilter.css'
// import '/home/mahesh/ReactJs/expencemanager/src/components/Expences/ExpenceFilter.css'
const ExpenceFilter = (props) => {
  const dropdown = (event) => {

    props.ExpenceFilter(event.target.value);
    // console.log(event.target.value)

};

  return (
    <div className="filter">
        <div className="filterfirstblock">
          <p>Filter By Year</p>
        </div>
        <div className="filtersecondblock">
        <select className='selectyears' name="years" value={props.selected} onChange={dropdown}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
  
        </div>

    </div>
  )
}

export default ExpenceFilter