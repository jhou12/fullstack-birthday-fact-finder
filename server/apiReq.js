const axios = require('axios');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const apiReq = async (req) => {
  try {
    let apiRes = await axios(`http://history.muffinlabs.com/date/${req.month}/${req.day}}`)

    let event = apiRes.data.data.Events[0].text

    let doc = {
        "date": `${months[req.month - 1]} ${req.day}`,
        "event": event,
        "lookup": req.lookup
      }
    return doc
  } catch(e) {
    console.log('invalid entry!',e)
    throw e
  }
}

module.exports = apiReq