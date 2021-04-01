import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown.jsx';
import Blurb from './Blurb.jsx';
import List from './List.jsx';
import Title from './Title.jsx';
import styled from 'styled-components';
import Styles, { Container, Column, SelectHeader } from './Styles.js';

const App = (props) => {
  const [event, setEvent] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = (month, day) => {
    let entry = {}
    entry.month = month
    entry.day = day
    entry.lookup = Date.now()
    axios.post('/newDate', entry)
    .then(res => {
      setList(res.data)
      setEvent(res.data[0].event)
    })
  }
  const handleDelete = (date) => {
    axios.delete('/deleteDate', {
      auth: {user: 'root'},
      data: {date},
    })
    .then(res => {
      setList(res.data)
    })
  }
  useEffect(() => {
    axios('/lastFiveDates')
    .then(res => {
      setList(res.data)
    })
  }, [])
  return (
    <Container>
      <Column>

      <Title/>
      <SelectHeader>Select your birthday:</SelectHeader>
      <Dropdown handleSubmit={handleSubmit}/>
      <Blurb event={event}/>
      <List list={list} handleDelete={handleDelete}/>

      </Column>
    </Container>
  )
}

export default App;