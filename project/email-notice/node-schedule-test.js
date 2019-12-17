const schedule = require('node-schedule')
const dayjs = require('dayjs')

let arr = []
for (let i = 0; i < 1000; i++) {
    arr.push(i)
}
let j = 0
function getData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(arr[j++])
        }, 1000)
    })
}
// *  *  *  *  *  *
// ┬  ┬  ┬  ┬  ┬  ┬
// │  │  │  │  │  |
// │  │  │  │  │  └ 星期几，取值：0 - 7，其中 0 和 7 都表示是周日
// │  │  │  │  └─── 月份，取值：1 - 12
// │  │  │  └────── 日期，取值：1 - 31
// │  │  └───────── 时，取值：0 - 23
// │  └──────────── 分，取值：0 - 59
// └─────────────── 秒，取值：0 - 59（可选）
// setInterval(()=>{
// getData().then((res)=>{
//     console.log(res)  
// })
// },1000)



schedule.scheduleJob('0 * * * * *', () => {
    let now = dayjs().format('YYYY-MM-DD HH:mm:ss')
    console.log("TCL: now", now)
    getData().then((res) => {
        console.log(res)
    })

})