import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown.jsx';
import Blurb from './Blurb.jsx';
import List from './List.jsx';

const App = (props) => {
  const [event, setEvent] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = (month, day) => {
    console.log('month day test', month, day)
    let entry = {}
    entry.month = month
    entry.day = day
    entry.lookup = Date.now()
    axios.post('/newDate', entry)
    .then(res => {
      console.log('client test', res.data)
      setList(res.data)
      setEvent(res.data[0].event)
    })
  }
  useEffect(() => {
    axios('/lastFiveDates')
    .then(res => {
      console.log(res.data)
      setList(res.data)
    })
  }, [])
  return (
    <div>
      <h1>Birthday Fact Finder 🎂</h1>

      Select your birthday:
      <Dropdown handleSubmit={handleSubmit}/>

      <Blurb event={event}/>

      <List list={list}/>
    </div>
  )
}

export default App;