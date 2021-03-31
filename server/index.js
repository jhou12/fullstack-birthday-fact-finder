const express = require('express');
const app = express();
const port = 3000
const axios = require('axios');
// const db = require('../database/mysql.js'); // USE FOR MYSQL
const db = require('../database/mongo.js'); // USE FOR MONGO
const apiReq = require('./apiReq.js')

app.use(express.static('client/dist'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/newDate', async (req, res) => {
  try {
    console.log('server test', req.body)
    let doc = await apiReq(req.body)
    let results = await db.save(doc)
    res.status(200).send(results)
} catch(e) {
  console.log('server post error:',e)
  res.status(404).send()
  }
})

app.get('/lastFiveDates', async (req, res) => {
  try {
    let results = await db.lastFive()
    res.status(200).send(results)
  } catch(e) {
    console.log('server get items error:',e)
    res.status(404).send()
  }
});

app.listen(port, () => {
  console.log(`listening at port ${port}.`);
});

