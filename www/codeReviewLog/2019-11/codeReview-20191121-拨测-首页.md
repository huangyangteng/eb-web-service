# codeReview-20191121-拨测-首页

[toc]

## 代码规范——vue属性使用简写形式

![image-20191121095933826](https://tva1.sinaimg.cn/large/006y8mN6ly1g95fhw28olj30uw0dkq60.jpg)

## 代码规范——取有意义的变量名

`items`——》`taskStatList`(任务统计列表)

![image-20191121100031274](https://tva1.sinaimg.cn/large/006y8mN6ly1g95fiuk14cj30h1078dh5.jpg)

## 代码规范——取消所有的分号

![image-20191121100506801](https://tva1.sinaimg.cn/large/006y8mN6ly1g95fnmmd93j30ia0h1abm.jpg)

## 代码——这个代码含义？

![image-20191121100539094](https://tva1.sinaimg.cn/large/006y8mN6ly1g95fo6glq6j30h504ijrm.jpg)
1. 要做什么？？(⊙_⊙)?
2. 为什么要return


```js
//写成非箭头函数的是这样的
window.onresize=function(){
    return (function(){
        window.screenWidth=window.innerWidth
        this.screennWidth=window.screenWidth
    }())
}
```



##  代码——regionWidth属性好像没有必要存在

![image-20191121102016431](https://tva1.sinaimg.cn/large/006y8mN6ly1g95g3efwiaj30wk05dwg7.jpg)




