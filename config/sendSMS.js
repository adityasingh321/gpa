// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
const axios = require('axios')

const apiKey = process.env.API_KEY;


function sendSMS(otp, number) {

  axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${apiKey}&variables_values=${otp}&route=otp&numbers=${number}`)
  
  // Show response data
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
          
  //   client.messages
  // .create({
  //    body: body,
  //    from: "+18149292762", 
  //    to: number
  //  })
  // .then(message => console.log(message.sid));
}

module.exports = sendSMS