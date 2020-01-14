const nodemailer = require('nodemailer')
const Tools = require('./util/tools')
const transporter=require('./config/transporter')

let noticeList=Tools.getJsonByFile('./noticeList.json')
console.log("TCL: noticeList", noticeList)

let mailOptions = {
    from: '"前端技术分享" <3034647379@qq.com>', // sender address
    to: 'huangyangteng@ebupt.com,hyangteng@gmail.com', // list of receivers
    subject: '前端技术分享', // Subject line
    // 发送text或者html格式
    html: '<h1>下周二进行技术分享，请早点做好准备呦</h1>' // html body
  }


// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
//     // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
//   })
