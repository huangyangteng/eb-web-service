## 黄养滕——发布订阅模式

### 简介

### 现实中的发布-订阅模式

### 最简实现

```js
//实现 
//1. 指定好发布者（比如售楼处）
//2. 给发布者添加一个缓存列表，用户存放回调函数以便通知订阅者(售楼处的花名册)
//3. 最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数

var salesOffices={}  //定义售楼处

salesOffices.clientList=[]  //缓存列表，存放订阅者的回调函数

salesOffices.listen=function(fn){//增加订阅者
    this.clientList.push(fn)
}
salesOffices.trigger=function(){//发布消息
    for(var i=0,fn;fn=this.clientList[i++];){
        fn.apply(this,arguments)
    }
}
// --------------------测试

//小明调用函数，订阅消息
salesOffices.listen(function(price,squareMeter){//小明订阅消息
    console.log("TCL: price", price)
    console.log("TCL: squareMeter", squareMeter)
})

//小红调用函数，订阅消息
salesOffices.listen(function(price,squareMeter){//小红订阅消息
    console.log("TCL: price", price)
    console.log("TCL: squareMeter", squareMeter)
})

//售楼处发布消息
salesOffices.trigger('180万',80)
salesOffices.trigger('250万',120)
```

### 改进

上述代码存在问题：订阅者收到了发布者发布的所有消息，对于小明来说，他想买80平的，120平的消息也推送过来了

改进：增加key，让订阅者只收到自己感兴趣的消息

```js
//实现 
//1. 指定好发布者（比如售楼处）
//2. 给发布者添加一个缓存列表，用户存放回调函数以便通知订阅者(售楼处的花名册)
//3. 最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数

var salesOffices={}  //定义售楼处

salesOffices.clientList=[]  //缓存列表，存放订阅者的回调函数

salesOffices.listen=function(key,fn){//增加订阅者
    if(!this.clientList[key]){//如果没订阅过此类消息，给该类消息创建一个缓存列表
        this.clientList[key]=[]
    }
    this.clientList[key].push(fn)
}
salesOffices.trigger=function(){//发布消息
    var key=Array.prototype.shift.call(arguments) //取得消息类型（第一个参数）
    var fns=this.clientList[key]
    if(!fns || fns.length==0){//如果没有订阅消息，则返回
        return false
    }
    for(var i=0,fn;fn=fns[i++];){
        fn.apply(this,arguments) //arguments是发布消息时附送的参数
    }
}
// --------------------测试

salesOffices.listen('squareMeter80',function(price){//小明订阅消息
    console.log("TCL: price", price)
})

salesOffices.listen('squareMeter120',function(price){//小红订阅消息
    console.log("TCL: price", price)
})

salesOffices.trigger('squareMeter80','200万')
salesOffices.trigger('squareMeter120','300万')
```

### 通用实现

假设小明又去了另一个售楼处买房子，那个这段代码就需要在另一个售楼处对象上重写一次，如何让所有的对象都拥有发布订阅功能呢？

```js
//1. 把发布订阅功能提取出来，放到一个单独的对象内
var event={
    clientList:[],
    listen:function(key,fn){
        if(!this.clientList[key]){
            this.clientList[key]=[]
        }
        this.clientList[key].push(fn)
    },
    trigger:function(){
        var key=Array.prototype.shift.call(arguments)
        var fns=this.clientList[key]
        if(!fns || fns.length==0){
            return false
        }
        for(var i=0,fn;fn=fns[i++];){
            fn.apply(this,arguments)
        }
    }
}
//2. 给所有的对象动态安装发布-订阅功能
var installEvent=function(obj){
    for(var i in event){
        obj[i]=event[i]
    }

}
var salesOffices={}  //定义售楼处
installEvent(salesOffices)
// --------------------测试

//小明订阅
salesOffices.listen('squareMeter80',function(price){//小明订阅消息
    console.log("TCL: price", price)
})


salesOffices.listen('squareMeter120',function(price){//小红订阅消息
    console.log("TCL: price", price)
})

salesOffices.trigger('squareMeter80','200万')
salesOffices.trigger('squareMeter80','180万')
salesOffices.trigger('squareMeter120','300万')
```



### 实际应用



