# vue多页开发规范

[toc]

## 1. 不要使用任何ES6的新语法，除非引入了相关的polyfill

使用ES6的新语法，如``、对象简写等，都会造成IE浏览器页面报错

## 2. Vue配置项中只放核心业务逻辑

`new Vue(options)`,`options`中只放一些核心的业务逻辑，一些辅助逻辑分离出去，做成帮助函数。辅助的逻辑举例：收到请求后的数据转换，请求接口时的参数拼接等

```js
//分离辅助的逻辑放在APP_HELP的
var APP_HELP=(function(){
  var Format={
    formatTime:function(){},
    formatStatus:function(){},
  }
  return {
    formatData(data){
      //对数据做一些转换操作
      data.forEach(function(item){
        item.time=Format.formatTime(item.time)
        item.statusText=Format.formatStatus(item.status)
      })
     
    }
  }
}())
// 核心业务逻辑
var APP=new Vue({
  data:{
    userList:[]
  },
  methods:{
    renderView:function(){
			API.getTaskList(function(res){
				APP.userList=APP_HELP.formatData(res.data)        
      })      
    },
  }
})
```

## 3. 保存vue的实例对象，用于防止vue实例对象中this丢失的情况

```js
var TASK_APP=new Vue({
  methods:{
    renderView:function(){
      //do something
    }
  },
  mounted:function(){
    TASK_APP=this
    setTimeout(function(){//在回调函数中，this会变为window,使用TASK_APP代替this
      TASK_APP.renderView()
    },1000)
  }
})
```

## 4. 复杂的逻辑可委托给外部对象执行

如果业务逻辑特别复杂，可委托给外部对象进行处理

```js
var TASK=(function(){
  return {
    add:function(){
      
    },
    edit:function(){
      
    }
  }
}())

var APP=new Vue({
  methods:{
    addTask:function(taskInfo){ //将增加任务委托给外部对象
      TASK.add(taskInfo)
    },
    editTask:function(taskInfo){ //将编辑任务委托给外部对象
       TASK.edit(taskInfo)
    }
  },
  mounted:function(){
    
  }
})
```



## 5. 统一管理项目中的显示隐藏状态

项目中如果显示隐藏的状态过多(大于3个)，可以统一管理

```js
//如果切换状态的操作过多，可以把切换状态的逻辑提出去
var STATUS_MANAGE=(function(){
  return {
    showLoading:function(){
      APP.status.isLoading=true
    },
    hideLoading:function(){
       APP.status.isLoading=false
    },
    showSubmiting:function(){},
    hideSubmiting:function(){}
  }
}())

var APP=new Vue({
  data:{
    status:{//状态统一放到status对象中
      isLoading:false,
      isSubmiting:false
    }
  },
  mounted:function(){
    APP=this
  }
})
```

## 6. 统一管理项目中的配置项

使用的ui框架的组件往往有很多配置项，可以统一在config中进行管理

```js
new Vue({
  data:{
    config:{
      duration:3,//iview 全局通知关闭时长
      modalClosable:false,//iview modal是否显示关闭按钮
    }
  }
})
```

## 7. 同一类型的数据使用对象进行管理

同一类型的数据，例如用户信息，任务信息，企业信息等等，可以用一个对象统一进行管理

```js
new Vue({
  data:{
    user:{
      name:'',
      password:'',
      sex:'',
      age:10,
    }
  }
})
```

