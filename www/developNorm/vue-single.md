# vue单页应用-开发规范

> 开发单页应用时，优先使用ES6语法

## 1. 使用let const代替var

let const具有块级作用域，且声明一次不能再次声明，可以在开发中规避很多错误

## 2. 在this丢失时，使用箭头函数代替普通函数

箭头函数中没有this,this默认使用父级作用域的this(如果有的话)，在一些this丢失的情况下使用箭头函数，可使this指向正确的对象

```js
setTimeout(()=>{
  this.video.len=$('#video')[0].duration
},1000)
```

## 3. 使用箭头函数时，优先使用箭头函数的简写形式

不使用简写时：

```js
var arr=[1,2,3,4,5,6]
arr.filter((item)=>{
  return item>3
})
```

简写规则1：只有一个参数时，小括号可以不写

```js
arr.filter(item=>{
  return item>3
})
```

简写规则2：只有一个返回值时，花括号和return可以不写

```js
arr.filter((item)=>item>3)
```

两条规则可以同时使用

```js
arr.filter(item=>item>3)
```

## 4. 使用解构赋值，精简代码

```js
http.createServer((req,res)=>{
  //正常写法
  let url=req.url
  let header=req.url
  //使用结构赋值
  let {url,header} = req
})
```

## 5. 使用对象的简写形式

简写规则1：key,value相同时，可以只写一个

```js
let username=getUserName()
let password=getPassWord()

let req={
	username:username,
  password:password
}
//简写形式
let req={
  username,
  password
}
```

简写规则2：对象的某个key为函数名

```js
let util={
  getExt:function(){
    
  }
}
//简写形式
let util={
  getExt(){
    
  }
}
```

##  6. 使用Promise+async/await处理异步请求

```js
//模拟异步请求
const GET_USER_INFO=function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                code:'20000',
                info:'success',
                jwt:'',
                data:{
                    userName:'xiaoming',
                    age:11,
                    phone:'122323131'
                }
            })
        },1500)
    })
}
//vue实例
new Vue({
  el:'#app',
  data:{
    userInfo:{}
  },
  methods:{
    async getUserInfo(){
       let userInfo=await GET_USER_INFO()
       this.userInfo=userInfo
    }
  },
  mounted(){
    
  }
})
```

