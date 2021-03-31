import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blurb from './Blurb.jsx';
import List from './List.jsx';

const App = (props) => {
  const [list, setList] = useState([])
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [event, setEvent] = useState('')

  const handleSubmit = (e) => {
    let date = {}
    date.month = month
    date.day = day
    date.lookup = Date.now()
    axios.post('/newDate', date)
    .then(res => {
      console.log('client test', res.data)
      setList(res.data)
      setEvent(res.data[0].event)
    })
  }
  useEffect(() => {
    axios('/lastFiveDates')
    .then(res => {
      setList(res.data)
    })
  }, [])
  return (
    <div>
      <h1>Birthday Fact Finder 🎂</h1>

      <input type="text" name="month" placeholder="Month (January)" onChange={e => setMonth(e.target.value)}/>
      <input type="text" name="day" placeholder="Day (1)" onChange={e => setDay(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>

      <p></p><Blurb event={event}/>

      <List items={list}/>
    </div>
  )
}

export default App;