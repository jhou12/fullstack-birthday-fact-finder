import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blurb from './Blurb.jsx';
import List from './List.jsx';

const App = (props) => {
  const [items, setItems] = useState([])
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [event, setEvent] = useState('')

  // look up destructuring e.target.value using hooks
  const handleChange = (e) => {
    if (e.target.name === 'month') {
      setMonth(e.target.value)
    } else {
      setDay(e.target.value)
    }
  }
  const handleSubmit = (e) => {
    let date = {}
    date.month = month
    date.day = day
    date.lookup = Date.now()
    axios.post('/', date)
    .then(res => {
      console.log('client test', res.data)
      setItems(res.data)
      setEvent(res.data[0].event)
    })
  }
  useEffect(() => {
    axios('/items')
    .then(res => {
      setItems(res)
    })
  }, [])
  return (
    <div>
      <h1>Type Your Birthday! 🎂</h1>

      <input type="text" name="month" placeholder="Month (January)" onChange={handleChange}/>
      <input type="text" name="day" placeholder="Day (1)" onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>

      <p></p><Blurb birthday={event} month={month} day={day}/>

      <List items={items}/>
    </div>
  )
}

export default App;