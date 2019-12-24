## js中减少if-else语句的使用

### 场景一 

![image-20191217124327963](https://tva1.sinaimg.cn/large/006tNbRwgy1g9zmbznaiyj30nh0d9tbh.jpg)

```js
var processMap={
    'A':'业务订购',
    'D':'业务删除',
    'P':'业务暂停',
    'R':'业务恢复',
    'S':''
}
var key='A'
var result=processMap[key]
```

### 场景二

```js
//功能:部分省份打开音频功能
var provinceId=getProvinceId()
if(provinceId==230 || provinceId==325 || provinceId==123 || provinceId==245){
    openAudio()
}
//问题 ，增加一个省份，就要改动代码
```

```js
var provinceId=getProvinceId()
var openAudioList=[230,325,123,245]
if(openAudioList.includes(provinceId)){
    openAudio()
}
```



### 场景三

![image-20191217124633712](https://tva1.sinaimg.cn/large/006tNbRwgy1g9zmf6d8hgj30mu0judk1.jpg)

```js

//优化一、
function doSomething(){}
var powerHandleMap={
    '9':function(){
        //do something
    },
    '1':function(){
        //do something
    },
    '3':function(){
      //xx  doSomething()
    },
    '8':function(){
        //xxdoSomething()
	}
}
var power=$('#power').html()
powerHanleMap[power]()
```

```js
//优化二、
var ruleMap={
    '9':'superAdmin',
    '1':'provinceAdmin',
    '3':'corpAdmin',
}
var hanleMap={
    'superAdmin':function(){},
    'provinceAdmin':function(){}
}
var power=$('#power').html()
var roleName=ruleMap[power]
hanleMap[roleName]()

```

```js
//优化三、
function roleInit(roleId){
    var ruleMap={
        '9':'superAdmin',
        '1':'provinceAdmin',
        '3':'corpAdmin',
    }
    var hanleMap={
        'superAdmin':function(){},
        'provinceAdmin':function(){}
    }
    var roleName=ruleMap[roleId]
    hanleMap[roleName]()
}
var power=$('#power').html()
roleInit(power)
```

