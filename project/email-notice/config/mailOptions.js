const Tools = require('../util/tools')

let mailOptions = {
    from: '"前端技术分享" <3034647379@qq.com>', // sender address
    to: 'huangyangteng@ebupt.com,hyangteng@gmail.com', // list of receivers
    subject: '前端技术分享', // Subject line
    // 发送text或者html格式
    html: '<h1>下周二进行技术分享，请早点做好准备呦</h1>' // html body
}
let weekShareOption={
    from: '"前端技术分享" <3034647379@qq.com>', // sender address
    to: Tools.getJsonByFile('./data/shareList.json').join(';'),
    subject: '前端技术分享', // Subject line
    // 发送text或者html格式
    html: '<h1>下周二进行技术分享，早点做好准备呦</h1>' // html body
}
let monitorOption={
    from: '"拨测开发日报" <3034647379@qq.com>', // sender address
    to: Tools.getJsonByFile('./data/monitorList.json').join(';'),
    subject: '前端技术分享', // Subject line
    // 发送text或者html格式
    html: '<h1>下周二进行技术分享，早点做好准备呦</h1>' // html body
}
let testOption={
    from: '"拨测开发日报" <3034647379@qq.com>', // sender address
    to: Tools.getJsonByFile('./data/test.json').join(';'),
    subject: '前端技术分享', // Subject line
    // 发送text或者html格式
    html: '<h1>下周二进行技术分享，早点做好准备呦</h1>' // html body
}

let optionMap={
    'monitor':monitorOption,
    'weekShare':weekShareOption,
    'test':testOption
}
function getOption(key){
    return optionMap[key]
}
module.exports=getOption