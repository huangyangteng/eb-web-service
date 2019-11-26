# codeReview-20191121-拨测-任务

[toc]

## 样式——添加任务，框框太大太长(分辨率为1280*700时)

![image-20191121103815000](https://tva1.sinaimg.cn/large/006y8mN6ly1g95gm4ebzdj31c00u0akj.jpg)

## 代码规范——路由配置,代码格式统一



![image-20191125110820196](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a3yl82rgj30ve0bjjtj.jpg)

## 代码规范——计算属性，如果不会去更改它的值，就不用设置set

![image-20191125124123858](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a6neeibnj30k90qcadi.jpg)



```js
new Vue({
    computed:{
        taskAreaList(){//这种写法和上面相同
            return this.provinceList
        }
    }
})

```

## 代码冗余——添加任务 Vuex中`mapGetters`和`mapState`的使用方式冗余

![image-20191125124512865](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a6rcptafj30hj0enjt8.jpg)





## 代码优化——添加任务-这里的数据能不能根据data进行渲染

![image-20191125112001425](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a4aphwxlj30ww0jpq9u.jpg)

```js
//代码参考 Test-checkbox.vue
<template>
    <div>
        <CheckboxGroup v-model="checkedDayList">
            <Checkbox v-for="item in periodDayList" :key="item.id" :label="item.id">
                <span>{{item.text}}</span>
            </Checkbox>
        </CheckboxGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            periodDayList: [
                { id: 1, text: '周一' },
                { id: 2, text: '周二' },
                { id: 3, text: '周三' },
                { id: 4, text: '周四' },
                { id: 5, text: '周五' },
            ],
            checkedDayList: []  //选中的项目会出现在checkedDayList中
        }
    }

}
</script>

<style>
</style>
```





## 代码冗余——v-model绑定的数据，视图改变时，状态就会改变

![image-20191125120248439](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a5j8e1ysj30m40hc0vj.jpg)

## 代码优化——重复的逻辑，是否可用一个帮助函数进行取代

![image-20191125120538985](https://tva1.sinaimg.cn/large/006y8mN6ly1g9a5m6o16pj30ov0hldjd.jpg)

```js
function changePeriodType(type){
    //全部置为false
    this.periodDayShow = false
    this.periodWeekShow = false
    this.periodMonthShow = false
    //把传入的值置为true
    this[type]=true
}
changePeriodType('periodMonthShow')
```

















