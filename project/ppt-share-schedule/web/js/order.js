const  dayjs =require('dayjs') 
var SHARE_LIST=[
    {id:'dingjian',name:'丁健',date:'2019-11-20',remain:'3'},
    {id:'yanlu',name:'严露',date:'2019-11-20',remain:'3'},
    {id:'tanyong',name:'谭勇',date:'2019-11-20',remain:'3'},
    {id:'tianlongyao',name:'田龙耀',date:'2019-11-20',remain:'3'},
    {id:'luoyuansha',name:'罗元沙',date:'2019-11-20',remain:'3'},
    {id:'wangyu',name:'王煜',date:'2019-11-20',remain:'3'},
    {id:'huangyangteng',name:'黄养滕',date:'2019-11-20',remain:'3'},
    {id:'zuohuayang',name:'左华洋',date:'2019-11-20',remain:'3'},
    {id:'yangkui',name:'杨奎',date:'2019-11-20',remain:'3'},
    {id:'yanglin',name:'杨林',date:'2019-11-20',remain:'3'},
    {id:'yaoqicen',name:'姚其岑',date:'2019-11-20',remain:'3'},
    {id:'wujing',name:'吴静',date:'2019-11-20',remain:'3'},
    {id:'dengjunnan',name:'邓俊男',date:'2019-11-20',remain:'3'},
    {id:'lipeng_1',name:'李鹏',date:'2019-11-20',remain:'3'},
    {id:'yangyuanjing',name:'杨圆静',date:'2019-11-20',remain:'3'},
    {id:'fuxuhui',name:'付旭辉',date:'2019-11-20',remain:'3'},
    {id:'wulijiao',name:'邬丽娇',date:'2019-11-20',remain:'3'},
    {id:'wanghongsen',name:'王泓森',date:'2019-11-20',remain:'3'},
]
var START_TIME='2019-12-30'

SHARE_LIST.forEach(item=>{
    item.date=START_TIME
    START_TIME=dayjs(START_TIME).add(7,'day').format('YYYY-MM-DD')
})
console.log("TCL: SHARE_LIST", SHARE_LIST)
