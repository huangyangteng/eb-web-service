## this

> JS的this总是指向一个对象，具体指向哪个对象是在代码运行时基于当时的环境动态绑定的

this的指向常见的有四种：

* 作为对象的方法调用
* 作为普通的函数调用
* 构造器调用
* Function.prototype.call 或Function.prototype.apply 调用

###作为对象的方法调用

指向该对象

```js
var person={
    age:11,
    getAge(){
        console.log(this === person) //输出 true
        console.log(this.age)
    }
}
person.getAge()
```

### 作为普通函数调用

指向 全局对象，浏览器中是window,nodejs环境中global

严格模式下指向 undefined

```js
window.name='globalName'
var getName=function(){
    return this.name
}
console.log(getName())   
```

### 构造器使用

当一个函数使用new调用时，该函数就是一个构造器，每个构造器都会返回一个对象，this指向返回的对象

```js
var myClass=function(){
    this.name='sven'
}
var obj=new myClass()
console.log(obj.name)   //sven
```

### Function.prototype.call 或Function.prototype.apply调用

call和apply方法可以动态改变传入函数的this

```js
var obj1={
    name:'xiaoming',
    getName(){
        return this.name
    }
}
var obj2={
    name:'xiaohong'
}
console.log(obj1.getName())
console.log(obj1.getName.call(obj2))
```



### 练习

```js
var vm=new Vue({
    data:{
      userList:[
          
      ]  
    },
    mounted(){
        //--------------- 例子1：
        $.ajax({
            url:'xxx',
            success(){
                console.log(this) //1. 
            }
        })
        
        
        //-------------- 例子2：
        var list=[1,2,3,4]
        list.forEach(function(item,index){
			console.log(this.userList)  //2.            
        })
        //-------------  例子3
        setInterval(()=>{
           console.log(this) 
        },0)
       
    }
})
```

