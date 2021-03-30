const express = require('express');
const app = express();
const port = 3000
const axios = require('axios');
// const db = require('../database/mysql.js'); // USE FOR MYSQL
const db = require('../database/mongo.js'); // USE FOR MONGO


app.use(express.static(__dirname + '/../client/dist'));
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

// refactor to async await
app.post('/', async (req, res) => {
  try {
  // console.log('server test', req.body)
  let cased = req.body.month.toLowerCase()
  if (months[cased]) {
    let apiRes = await axios(`http://history.muffinlabs.com/date/${months[cased]}/${req.body.day}}`)

    let event = apiRes.data.data.Events[0].text
      let doc = {"date": `${cased} ${req.body.day}`, "event": event, "lookup": req.body.lookup}

      let results = await db.save(doc)
      res.status(200).send(results)
  } else {
    res.status(404).send('Invalid Entry!')
  }
  } catch(e) {
    console.log('server post error:',e)
  }
})

// MYSQL ONLOAD
// app.get('/items', function (req, res) {
//   db.selectAll(function(data) {
//     res.send(data)
//   })
// });

// MONGO ONLOAD
app.get('/items', function (req, res) {
  db.selectAll(function(err, data) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send(data)
    }
  })
});

app.listen(port, function() {
  console.log(`listening at port ${port}.`);
});

