const mysql = require('mysql');
const dotenv = require('dotenv').config()

const connection = mysql.createConnection({
  dialect: 'mysql',
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DB,
  logging: false,
});

const lastFive = function(callback) {
  connection.query(`SELECT * FROM birthdays ORDER BY lookup DESC LIMIT 5`, function(err, results, fields) {
  if (err) {
    console.log(err)
  } else {
    console.log('sending back last 5 to server', results)
    callback(results)
  }
})
}

const save = function(doc, callback) {
  console.log('MYSQL RECEIVED DOC', doc)
  // FIND DATE THE USER TYPED
  connection.query(`SELECT * FROM birthdays WHERE date="${doc.date}"`, function(err, results, fields) {
    if (err) {
      console.log(err)
    } else {
      // console.log('MYSQL RESULTS', results)
      // IF DATE DOESN'T EXIST, SAVE IT, AND SEND BACK THE LAST 5 QUERIES.
      if (results.length === 0) {
        connection.query(`INSERT INTO birthdays (lookup, date, event, db) VALUES ('${doc.lookup}', '${doc.date}', '${doc.event}', 'mysql')`, function(err, results, fields) {
          if (err) {
            console.log(err)
          } else {
            console.log('saved new date to db!', doc.date)
            lastFive(callback)
          }
        })
      } else {
        // IF DATE DOES EXIST, UPDATE THE LOOKUP TIME AND EVENT DESCRIPTION, AND SEND BACK THE LAST 5 QUERIES.
        connection.query(`UPDATE birthdays SET lookup='${doc.lookup}', event='${doc.event}' WHERE date='${doc.date}'`, function(err, results, fields) {
          if (err) {
            console.log(err)
          } else {
            console.log('updated event at date', doc.date)
            lastFive(callback)
          }
        })
      }
    }
  })
}

const selectAll = function(callback) {
  // ON LOAD, SEND BACK LAST 5 QUERIES.
    lastFive(callback)
};

module.exports = {
  selectAll,
  save,
}
