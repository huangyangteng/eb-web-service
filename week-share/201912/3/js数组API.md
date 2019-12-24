## 邬丽娇——3 数组API

### 3.1 功能分类

查找：some、every、includes、indexof、lastIndexOf、find、findindex

删除：pop、shift、slice

添加：push、unshift、concat

数组转化字符串：join、toLocaleString、toString、 JSON.stringify

变换：map 、reduce 、reduceRight 、filter 

遍历：foreach

### 3.2 直接修改原数组的API 

#### 3.2.1 pop()

删除数组末尾的元素，并且返回删除的元素（无参数）

```javascript
var arr = [1,2,3,4];
var res = arr.pop();  

console.log(res); // 返回值为删除的元素，4
console.log(arr); // 返回值为操作后的数组，[1,2,3]
```

#### 3.2.2 push()

添加一个或者多个元素到数组末尾，并且返回数组新的长度

```javascript
var arr = [1,2,3,4];
var res = arr.push(5);  // 在数组末尾添加 5 ；也可以是arr.push(5,6,7,8...)
 
console.log(res); // 返回值为数组长度，5
console.log(arr); // 添加元素后的原数组，[1,2,3,4,5]
```

#### 3.2.3 shift()

删除数组的第一个元素，并返回这个元素（无参数）

```javascript
var arr = [1,2,3,4];
var res = arr.shift();
 
console.log(res); // 返回值为删除的元素，1 
console.log(arr); // 返回值为删除元素后的原数组，[2,3,4] 
```

#### 3.2.4 unshift()

在数组开始处插入一些元素，并返回数组新的长度

```javascript
var arr = [1,2,3,4];
var res = arr.unshift('a'); // 也可以是 arr.unshift('a','b','c'....)
 
console.log(res); // 返回值为数组长度，5
console.log(arr); // 返回值为插入元素后的原数组，[a,1,2,3,4]
```

#### 3.2.5 splice()

从数组中添加/删除一些元素，然后返回被删除的元素（参数：begin, len, item1, item2, item3....

```
               begin   开始操作的位置

               len       删除元素的个数

               item     插入的值
```

```javascript
var arr = [1,2,3,4,5,6]; 
var res = arr.splice(1,2,'a','b');  // 从索引为1的位置开始，删除2位，再插入a，b
 
console.log(res); // 返回值为删除的元素组成的数组，[2,3]
console.log(arr); // 返回值为操作后的原数组，[1,a,b,4,5,6]
```

#### 3.2.6 reverse()

颠倒数组中元素的顺序

```javascript
var arr = [1,2,3,4]; 
var res = arr.reverse(arr);
 
console.log(res); // 返回值为操作后的原数组，[4,3,2,1]
```

#### 3.2.7 sort()

用于对数组的元素进行排序

排序顺序可以是字母或数字，并按升序或降序。

默认排序顺序为按字母升序。

**注意：**当数字是按字母顺序排列时"40"将排在"5"前面。

使用数字排序，你必须通过一个函数作为参数来调用。

函数指定数字是按照升序还是降序排列。

```javascript
// 升序
var arr = [40,100,1,5,25,10];
var res = arr.sort(function(a,b){return a-b});

console.log(res); // 返回值为[1,5,10,25,40,100]

// 降序
var arr2 = [40,100,1,5,25,10];
var res2 = arr2.sort(function(a,b){return b-a});

console.log(res2); // 返回值为[100,40,25,10,5,1]
// 字母升降序
var arr3 = ["Banana", "Orange", "Apple", "Mango"];
arr3.sort();
arr3.reverse(); // [Orange,Mango,Banana,Apple]
```

#### 3.2.8fill() -- ES6新增

将数组指定区间内的元素替换为某个值

#### 3.2.9 copyWithin() -- ES6新增

数组内元素之间的替换

### 3.3 返回新数组的API

#### 3.3.1 concat()

将传入的数组或者元素与原数组合并，组成一个新的数组并返回 

#### 3.3.2 slice()

截取数组中的元素，并返回一个由截取的元素组成的子数组（不对原数组进行修改）

**1个参数时**

```javascript
var arr = [1,2,3,4,5] 
var res = arr.slice(1); // 从索引为1的位置开始，直到结束
 
console.log(arr); // 返回值为原数组，[1,2,3,4,5]
console.log(res); // 返回值为由截取元素组成的子数组，[2,3,4,5]
```

**2个参数时**

```javascript
var arr = [1,2,3,4,5] 
var res = arr.slice(1，4); // 从索引为1的位置开始，直到位置为4时结束，不包括4
 
console.log(arr); // 返回值为原数组，[1,2,3,4,5]
console.log(res); // 返回值为由截取元素组成的子数组，[2,3,4]
```

语法：array.slice(start, end)

作用：slice() 方法可**从已有的数组中返回选定的元素**。

slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

**注意：** slice() 方法不会改变原始数组。

`补：所有主要浏览器都支持slice()。`

#### 3.3.3 join()

将数组中的所有元素连接成一个字符串

#### 3.3.4 indexOf()

用于查找元素在数组中第一次出现时的索引，如果没有，则返回-1

**1个参数时**

```javascript
var arr = [1,2,3,'a','b',4,5,6,'a']; 
var res = arr.indexOf('a'); // 从头开始搜索，遇到 a 即停止搜索

console.log(res); // 返回值为该元素索引，3
```

**2个参数时**

```javascript
var arr = [1,2,3,'a','b',4,5,6,'a']; 
var res = arr.indexOf('a',4); // 从索引为4的位置开始搜索

console.log(res); // 返回值为该元素索引，8
```

若数组中不存在该元素，则返回-1

```javascript
var arr = [1,2,3,'a','b',4,5,6,'a']; 
var res = arr.indexOf(9); // 9不在数组中，所以搜索不到

console.log(res); // 返回值为-1
```



#### 3.3.5 lastIndexOf()

用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1

#### 3.3.6 includes() -- ES7新增

 用来判断当前数组是否包含某个指定的值，如果是，则返回 true，否则返回false 

#### 3.3.7 toSource() -- 未入标准

返回数组的源代码，目前只有 Firefox 实现了它

### 3.4 数组遍历方法

#### 3.4.1 forEach()

指定数组的每项元素都执行一次传入的函数，返回值为undefined

#### 3.4.2 map()

`map` 作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后放入到新的数组中。

```javascript
[1, 2, 3].map(v => v + 1) // -> [2, 3, 4]
```

语法：array.map(function(currentValue,index,arr), thisValue)

map的回调函数接受三个参数，分别是当前索引元素，索引，原数组

作用：遍历数组,返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

| 参数                              | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| function(currentValue, index,arr) | 必须。函数，数组中的每个元素都会执行这个函数                 |
| thisValue                         | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。 如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。 |

| 参数         | 描述                         |
| :----------- | :--------------------------- |
| currentValue | 必须。当前元素的值           |
| index        | 可选。当前元素的索引值       |
| arr          | 可选。当前元素属于的数组对象 |

**注意：** map() 不会对空数组进行检测。

**注意：** map() 不会改变原始数组。

#### 3.4.3 filter()

遍历数组，返回由满足条件的元素组成的新数组。

```javascript
let array = [1, 2, 4, 6]
let newArray = array.filter(item => item !== 6)
console.log(newArray) // [1, 2, 4]
```

和 `map` 一样，`filter` 的回调函数也接受三个参数，用处也相同。

#### 3.4.4 every()

使用传入的函数测试所有元素，每一个元素经传入的函数处理都返回true该方法才返回true,否则返回false（验证

是否每一个元素都满足测试函数）

#### 3.4.5 some()

使用传入的函数测试所有元素，只要有一个元素经传入的函数处理返回true该方法就返回true,否则返回false（验

证是否有元素都满足测试函数）

#### 3.4.6 reduce()

接收一个方法作为累加器，数组中的每个值(从左至右) 开始合并，最终为一个值

```javascript
const arr = [1, 2, 3]
// 接受两个参数，分别是回调函数和初始值
const sum = arr.reduce((acc, current) => acc + current, 0)
console.log(sum) // 6
```



#### 3.4.7 reduceRight()

接收一个方法作为累加器，数组中的每个值(从右至左) 开始合并，最终为一个值

#### 3.4.8 find() -- ES6新增

返回数组中第一个满足条件的元素（如果有的话）， 如果没有，则返回 undefined

#### 3.4.9 findIndex() -- ES6新增

返回数组中第一个满足条件的元素的索引（如果有的话）， 如果没有，则返回 -1

#### 3.4.10 keys() -- ES6新增

返回一个数组索引的迭代器

#### 3.4.11 values() -- ES6新增

返回一个数组迭代器对象，该对象包含数组中每个索引的值

#### 3.4.12 entries() -- ES6新增

返回一个数组迭代器对象，该对象包含数组中每个索引的键值对

