const express = require('express');
const app = express();
const port = 3000
const axios = require('axios');
const db = require('../database/mysql.js'); // USE FOR MYSQL
// const db = require('../database/mongo.js'); // USE FOR MONGO

app.use(express.static('client/dist'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const months = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
}

app.post('/newDate', async (req, res) => {
  try {
  let cased = req.body.month.toLowerCase()
  if (months[cased]) {
    let apiRes = await axios(`http://history.muffinlabs.com/date/${months[cased]}/${req.body.day}}`)
    let event = apiRes.data.data.Events[0].text
      let doc = {
        "date": `${cased} ${req.body.day}`,
        "event": event,
        "lookup": req.body.lookup
      }
      let results = await db.save(doc)
      res.status(200).send(results)
  } else {
    res.status(404).send('Invalid Entry!')
  }
  } catch(e) {
    console.log('server post error:',e)
  }
})

app.get('/lastFiveDates', async (req, res) => {
  try {
    let results = await db.lastFive()
    res.status(200).send(results)
  } catch(e) {
    console.log('server get items error:',e)
  }
});

app.listen(port, () => {
  console.log(`listening at port ${port}.`);
});

