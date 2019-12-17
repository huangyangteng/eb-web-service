const dayjs = require('dayjs')

// 每周 星期五 发送邮件
function sendEmail(){
    console.log('发送邮件')
}

// 每隔24小时，判断一下今天是周几 1 2 3 4 5
let nowWeek=dayjs().day()
if(nowWeek==6){
    sendEmail()
    
    console.log('today is Saturday')
}else{
    console.log('today is not Daturday')
}
console.log("TCL: dayjs().day()", dayjs().day())
setInterval(()=>{
    
},
1000)