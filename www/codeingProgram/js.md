## js



### js数据类型有哪些



### 如何区分对象与数组



### 调用`new`关键字的过程

### 原型与原型链

```js
function Person(){}
var p1=new Person()
var p2=new Person()
```



画出对象p1,p2,Person的原型指向关系

### 判断this指向

```js
new Vue({
    data:{
        list:[{id:0,name:'xiaoming'},id:1,name:'xiaohong'}]
    },
    mounted(){
		this.list.forEach(function(item){
    		console.log(this)  //flag1
        }) 
        setTimeout(()=>{
            console.log(this)  //flag2
        },1000)
    }
})

```

flag1处的this指向
flag2处的this指向

###  深浅拷贝

#### 问题一

```js
let a = {
    age: 1
}
let b = a
a.age = 2
console.log(b.age) // 2
```

写一个方法，拷贝a对象



#### 问题二

```js
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
```

写一个方法，拷贝a对象

### Promise

#### 基本使用：使用Promise封装下面的数据请求方法

```js
$.ajax({
    url:'/user/list',
    success(){
    },
    error(){}
})
```

#### 进阶：Promise与async和await方法结合如何使用

