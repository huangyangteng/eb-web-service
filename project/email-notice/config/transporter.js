const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:'qq',
    port:465,
    secureConnection:true,
    auth:{
        user:'3034647379@qq.com',
        pass:'phidispmrlsydcjh'
    }
})
module.exports=transporter