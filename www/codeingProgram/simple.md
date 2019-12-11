# 东信北邮前端面试题（C卷）

> * 时间：60分钟 
> * 注意：
>     * 不会的可以先跳过，主要考察综合能力，不会因为单一方面的薄弱淘汰人
>     * 编程题可以不用手写代码实现，仅提供解题思路即可

## 个人信息

* 姓名：    
* 联系方式：

## 答案写在额外的A4纸上

 1. 什么是盒模型，如何改变盒模型
 2. 如何实现 `右栏固定，左侧自适应`的布局
 3. 如何实现 `左右两栏固定，中间自适应`的布局
 4. 写出下面代码中h1的margin-top为多少px，h2的font-size为多少px
```html
<html>
    <head>
        <style>
            html:{font-size:20px;}
            div: {font-size:30px;}
            h1:{
                font-size:25px;
                margin-top:2em;
            }
            h2:{
                font-size:2rem;
            }
        </style>
    </head>
    <body>
        <div>
            <h1> </h1>
            <h2> </h2>
        </div>
    </body>
</html>
```

5. js的数据类型有哪些；写一个方法，根据传入参数返回数据类型

6. 原型与原型链

```js
function Person(){}
var p1=new Person()
var p2=new Person()
```
问：`new`操作背后经历了哪些过程
7. 判断this指向，flag1和flag2处的this分别指向谁？
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
8. 写一个方法拷贝b对象，使新对象属性的修改不会影响到原来的对象

```js
var b={
    name:'xiaohong',
    job:{
        first:'FE'
    }
}
```

9. 以下代码执行会输出什么？为什么？

```js
for(var i=0;i<10;i++){
   setTimeout(function(){
       console.log(i);
   },0);
}
```

10. 如何获取一个网页有多少种html标签

11. 根据下面html代码，实现`点击li，弹出’123'`

```html
<ul id="list">
    <li>111</li>
    <li>222</li>
</ul>
```

12. 假如上题ul下面的li是根据后台数据渲染的，数量不确定，如何做到点击li，弹出’123’

13. 使用Promise封装下面的ajax请求

```js
$.ajax({url:'/api/user',method:'GET',success(res){},err(err){}})
```

14. 组件编写：实现一个按钮组件
要求：按钮的内容、字体大小、颜色由父组件传入，点击按钮组件时，向父组件发送一个随机数字
15. 平时是如何学习前端，你觉得最有效的学习方式是哪一种？
16. 最近在学习什么？接下来半年打算学习什么？