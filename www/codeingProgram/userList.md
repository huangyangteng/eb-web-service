# 学生列表

有一个学生数组，每个学生有名字、年龄、性别、成绩

```js
const userList=[

    {id:0,name:'xiaoming',age:12,sex:0,grade:80,locationId:12},

    {id:1,name:'xiaohong',age:18,sex:1,grade:50,locationId:14},

    {id:2,name:'xiaolv',age:9,sex:0,grade:0,locationId:17},

    {id:3,name:'xiaohei',age:8,sex:1,grade:100,locationId:12},

    {id:4,name:'xiaoqaing',age:13,sex:0,grade:59,locationId:19},

    {id:5,name:'xiaozi',age:13,sex:1,grade:99,locationId:17},

    {id:6,name:'xiaolan',age:14,sex:0,grade:89,locationId:19},

    {id:7,name:'xiaofen',age:13,sex:1,grade:79,locationId:14},

    {id:8,name:'xiaoceng',age:10,sex:0,grade:0,locationId:16},

    {id:9,name:'xiaoqing',age:12,sex:1,grade:69,locationId:14},

]

```





##  判断是否全部及格（大于60分为及格）

```js
let pass=userList.every(item=>item.grade>60)

console.log("TCL: pass", pass)

```

## 计算平均分

```js

```



## 找出班级年龄最大的人



```js
let ageList=userList.map(item=>item.age)

let maxAge=Math.max.apply(null,ageList)

console.log("TCL: maxAge", maxAge)

```







## 根据年龄排序,但是不能影响原数组



```js
let sortedList=JSON.parse(JSON.stringify(userList))

sortedList.sort((r1,r2)=>{

    return r1.age-r2.age

})

```





## 写一个分班函数，根据 当前班(1班，2班)   每班多少人 来获得某班的成员

```js
function getCurPerson(userList,cur,size){
   
	return userList.slice(cur*(size-1), cur*size)
    
}

```



