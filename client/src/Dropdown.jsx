import React, { useState } from 'react';
import DropdownMonth from './DropdownMonth.jsx'
import DropdownDay from './DropdownDay.jsx'

const Dropdown = (props) => {
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const months = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['Day']
  for (let i = 1; i <= 31; i++) {
    days.push(i)
  }
  const onSubmit = () => {
    // console.log(month, day)
    props.handleSubmit(month, day)
  }
  return (
    <div>
      <select
      value={month}
      onChange={e => setMonth(e.target.value)}
      >
        {months.map((month,index) =>
        <DropdownMonth
        text={month}
        value={index}
        key={index}/>
        )}
      </select>

      <select
      value={day}
      onChange={e => setDay(e.target.value)}
      >
        {days.map((day,index) =>
        <DropdownDay
        value={index}
        key={index}
        />
        )}
      </select>

      <button onClick={onSubmit}>Find my fact!</button>
    </div>
  )
}

export default Dropdown;