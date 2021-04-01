import React, { useState } from 'react';
import DropdownMonth from './DropdownMonth.jsx'
import DropdownDay from './DropdownDay.jsx'
import styled from 'styled-components';
import Styled, { SelectContainer, MonthStyled, DayStyled, FindMyFact } from './Styles.js';

const Dropdown = (props) => {
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const months = ['Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['Day']
  for (let i = 1; i <= 31; i++) {
    days.push(i)
  }
  const onSubmit = () => {
    props.handleSubmit(month, day)
  }
  return (
    <SelectContainer>
      <MonthStyled
      value={month}
      onChange={e => setMonth(e.target.value)}
      >
        {months.map((month,index) =>
        <DropdownMonth
        text={month}
        value={index}
        key={index}/>
        )}
      </MonthStyled>

      <DayStyled
      value={day}
      onChange={e => setDay(e.target.value)}
      >
        {days.map((day,index) =>
        <DropdownDay
        value={day}
        key={index}
        />
        )}
      </DayStyled>

      <FindMyFact onClick={onSubmit}>Find my fact!</FindMyFact>
    </SelectContainer>
  )
}

export default Dropdown;