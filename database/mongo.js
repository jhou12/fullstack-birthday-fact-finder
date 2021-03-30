const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB}`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongoose connected.'));

const itemSchema = mongoose.Schema({
  date: String,
  event: String,
  lookup: Number,
});

const Birthday = mongoose.model('Item', itemSchema);

let save = async (doc) => {
  try {
    await Birthday.findOneAndUpdate({"date": doc.date}, doc, {upsert: true, useFindAndModify: false})
    let results = await Birthday.find({}).sort({'lookup': -1}).limit(5)
    let formatted = results.map(date => {
      return date._doc
    })
    console.log('db test', formatted)
    return formatted
  } catch(e) {
    console.log('db save error:',e)
  }
}

let selectAll = async () => {
  try {
    let results = await Birthday.find({}).sort({'lookup': -1}).limit(5)
    return results
  } catch(e) {
    console.log('db selectAll error:',e)
  }
}

module.exports = {
  selectAll,
  save,
}