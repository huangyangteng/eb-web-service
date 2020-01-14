const getOption = require('./mailOptions')
const transporter=require('./transporter')


function sendEmail(type){
    transporter.sendMail(getOption(type),(err,msg)=>{
        if(err){
            console.log(err)
        }else{
            console.log("TCL: sendEmail -> msg", msg)
        }

    })
}
module.exports=sendEmail