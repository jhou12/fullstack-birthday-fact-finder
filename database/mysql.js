const { Sequelize, DataTypes } = require('sequelize')
const dotenv = require('dotenv').config()

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DB,
  logging: false,
})

sequelize.authenticate()
.then(() => console.log('Sequelize connected.'))
.catch(err => console.log('sequelize connection error:', err))

sequelize.sync()
.then(() => console.log('tables synced.'))
.catch(e => console.log('syncing error:',e))

const Birthday = sequelize.define('Birthday', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  lookup: Sequelize.TEXT,
  date: Sequelize.TEXT,
  event: Sequelize.TEXT,
}, { timestamps: false
})

const lastFive = async () => {
  try {
    let results = await Birthday.findAll({
      raw: true,
      order: [['lookup', 'DESC']],
      limit: 5,
    })
    return results
  } catch(e) {
    console.log('db lastFive error:',e)
    throw e
  }
}

const save = async (doc) => {
  try {
    let find = await Birthday.findOrCreate({
      defaults: doc,
      where: { date: doc.date }
    })
    if (!find[1]) {
      let id = find[0].dataValues.id
      await Birthday.update(
        {lookup: doc.lookup},
        {where: {id}}
        )
    }
    let results = await lastFive()
    return results
  } catch(e) {
    console.log('db save error:',e)
    throw e
  }
}

const del = async (date) => {
  try {
    await Birthday.destroy({ where: date })
    let results = await lastFive()
    return results
  } catch(e) {
    console.log('db delete error:',e)
    throw e
  }
}

module.exports = {
  lastFive,
  save,
  del,
}
