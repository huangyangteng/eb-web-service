# 基于Vue-Cli3的项目搭建

> 以后台管理系统为例

[toc]

## 初始化项目

```shell
vue create [项目名]
```

在命令行窗口中选择你需要安装的依赖即可

![image-20191214150948810](https://tva1.sinaimg.cn/large/006tNbRwgy1g9w9pkltbuj31d008yn0q.jpg)

## 路由配置

### 一级路由划分

* Home  主页面
* Login  登录页
* Error 错误页(404 Not Found) 

一级路由配置放在`router/index.js` 中,代码如下：

```js
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path:'*',
    component:()=>import('../views/Error/NotFound.vue')
  }
]
```

### 二级路由划分

二级路由主要存在于主页(Home)中，为了方便管理，将二级路由划分出去，分配给该模块的负责人进行管理

假设Home模块下有企业、部门、成员三个模块,新建目录如下：

![image-20191215155101011](https://tva1.sinaimg.cn/large/006tNbRwgy1g9xgilt10pj30t20mu76v.jpg)



每个文件夹目录下都有对应的`index.js`文件，用于导出该模块的路由配置

顺序：企业管理导出企业管理模块的路由 ——》主页导出主页模块的路由 ——》router.js导入所有模块路由



```js
//CorpManage/index.js    企业管理导出企业管理模块的路由
export default [{
    path:'/corp',
    name:'corp',
    component:()=>import('./corpManage'),
    children:[
        //{path:'list',name:'corpList',component:()=>import('.path')},
    ]  
}]
```

```js
//Home/index.js    主页导出主页模块的路由 
import Home from './Home.vue'

import CorpRouter from './CorpManage/index'

const HomeRouter = [{
    path: '/',
    component: Home,
    children: [
        ...CorpRouter
    ]
}]

export default HomeRouter
```

```js
//route.js      router.js统一导入所有模块路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from '../views/Home/index'

Vue.use(VueRouter)

const routes = [
  ...HomeRouter,
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path:'*',
    component:()=>import('../views/Error/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

```

## 引入依赖（UI框架）

注意事项：

1. 大型UI框架需要按需引入，如`iview,elementui,echarts`等
2. UI框架中，只会用到一次的组件，在会用到的文件中单独引入

以引入`iview`UI框架为例,

1. 安装依赖

```shell
npm i view-design -S  # 4.0版本
```

2. 新建文件夹`config/iview-config.js`

```js
//config/iview-config.js
import Vue from "vue"

//引入需要的模块
import {Button,Input,Table} from 'view-design'
//全局注册这些组件
Vue.component("Button", Button)
Vue.component("Input", Input)
Vue.component("Table", Table)
```

3. 在main.js中引入该文件

```js
//main.js
import './config/iview-config'
```



## 数据请求

> 数据请求使用 axios, axios中文文档：https://www.kancloud.cn/yunye/axios/234845

### 安装依赖

```shell
npm i axios -S
```

### 跨域设置

* 开发时 
    * 使用devServer的proxy模块配置接口转发，配置/api前端的url，转发到后台地址
* 部署时
    * 使用nginx做接口转发，配置/api前端的url，转发到后台地址

1. 在config文件夹下新建 host.js，用于区分生产环境和开发环境

```js
//config/host.js
module.exports={
    dev:'http://10.4.0.125:13001/', //开发环境下服务器
    prod:'/api', //生产环境下服务器
}
```

2. 在跟目录下新建vue.config.js,

```js
//vue.config.js
let host = require('./src/config/host')

module.exports = {
    devServer: {//只在开发时有效，打包后失效
        open: true,   //自动打开浏览器
        proxy: {    //配置接口转发    
            '/api': {
                target: host.dev,    //开发环境 后端接口地址
                changeOrigin: true,        
                autoRewrite: true,
                cookieDomainRewrite: true,
                pathRewrite: {             
                    '^/api': ''
                }
            }
        }
    },
}



```

3. axios的baseURL设置成’/api’，这样请求后台接口时就不用每次都添加/api前缀了



### API统一管理

在src目录下，新建api文件夹，用于统一管理所有的数据请求

在api文件夹下新建`http.js`，实例化一个axios的对象，用于统一的的请求拦截

```js
//api/http.js
import axios from "axios"


let instance = axios.create(
    {
        timeout: 1000 * 12,
        baseURL:'/api'        //设置baseURL，区分开发环境和生产环境
    }
)
// 请求拦截
instance.interceptors.request.use(
    config => {
        return config
    },
    error => Promise.error(error))


// 响应拦截
instance.interceptors.response.use(
    // 请求成功
    res => {
         return Promise.resolve(res.data)

    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            alert('服务器开小差了，请稍后刷新页面重试!')
            return Promise.reject(response);
        } else {
            // 处理断网的情况
        }
    })


export default instance;
```

 按照前端模块对接口进行划分，一个模块一个文件夹。

以企业管理 为例，新建 corp.js,将企业管理相关的接口定义在此处

```js
//api/corp.js
import axios from "./http"

const getAll=params=>axios.get('/administrator/export',params)

export default{
    getAll,
}
```

在api文件夹下新建 index.js,用于同一导出所有的api

```js
//api/index.js
import Corp from './corp'
export default {
    Corp
}
```

在main.js中引入api/index.js，并绑定到vue的原型上

```js
//main.js
import API from 'api/index'
Vue.prototype.$API=API
```

调用定义好的api

```js
//CorpManage.vue
export default{
    methods:{
        async getCorpList(){
            let res= await this.$API.Corp.getAll() //
        }
    },
    mounted(){
        this.getCorpList()
    }
}
```



 ## vuex管理全局状态















