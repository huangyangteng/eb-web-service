const schedule = require('node-schedule')
const sendEmail = require('./config/sendEmail')

// *  *  *  *  *  *
// ┬ ┬ ┬ ┬ ┬ ┬
// │ │ │ │ │  |
// │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
// │ │ │ │ └───── month (1 - 12)
// │ │ │ └────────── day of month (1 - 31)
// │ │ └─────────────── hour (0 - 23)
// │ └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)


const scheduleCronstyle = ()=>{
    // schedule.scheduleJob('30 01 21 * * 2',()=>{
    //     console.log('scheduleCronstyle:' + new Date())
    //     sendEmail()
    // })
    schedule.scheduleJob('30 * * * * *',()=>{
        console.log('scheduleCronstyle:' + new Date())
        sendEmail('test')
    })
}
scheduleCronstyle()


