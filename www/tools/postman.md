# postman使用教程

## 1.安装

软件地址：https://www.jianguoyun.com/p/Dd_duuYQ0vvwBxjv0pcC

官网地址：https://www.getpostman.com/

安装完成后注册，然后登陆

## 2. 界面简介

请求方法

* get 参数在Params中填写
* post
  * form-data                                      发送文件类型的数据
  * x-www-form-urlencoded              发送urlencoded类型的数据(name=13&age=11)
  * raw->application/json                  发送json类型的数据

![image-20190724111323995](http://ww3.sinaimg.cn/large/006tNc79ly1g5ar9pd9rlj31ch0mk486.jpg)

## 3. 环境变量

postman内部可以设置环境变量，设置的环境变量在整个接口请求流程中均可用

### 应用场景：

* 接口的基础地址(ip:端口)会因环境不同而不同，可用环境变量储存基础地址
* 每次发送请求时都会验证token，因此可在登录后使用环境变量储存token，每次发送请求时携带token

### 设置环境变量

* 显式设置环境变量，适用于场景一，我们可以增加一个环境变量集合，增加一个url的环境变量，读取时使用{{url}}进行读取，切换环境时，切换环境变量即可

![image-20191112212320624](https://tva1.sinaimg.cn/large/006y8mN6gy1g8vko6gq2tj31z00ruai2.jpg)

* 使用postman内置语法设置环境变量，用于场景2。登录后，把token储存环境变量{{jwt}}，每次请求头中添加该环境变量即可

![image-20191112212908203](https://tva1.sinaimg.cn/large/006y8mN6gy1g8vku5lhg1j31i00q242p.jpg)

![image-20191112213001682](https://tva1.sinaimg.cn/large/006y8mN6gy1g8vkv2wsloj31iq0u0jv8.jpg)

## 4. 配置返回的数据格式默认为JSON

![image-20190724112001119](http://ww3.sinaimg.cn/large/006tNc79ly1g5argl7dawj30s60jntbw.jpg)

![image-20190724112259687](http://ww3.sinaimg.cn/large/006tNc79ly1g5arjooitsj315m0ne10h.jpg)

## 5. 进阶教程

[最强PostMan使用教程（1）-PostMan详细介绍](https://blog.csdn.net/u013613428/article/details/51557804)

[最强PostMan使用教程（2） - 在test suite中运行test case](https://blog.csdn.net/u013613428/article/details/51557914)

[最强PostMan使用教程（3）- script](https://blog.csdn.net/u013613428/article/details/78238043)

[最强PostMan使用教程（4）- 使用Postman的模拟服务模拟（mock）后端](https://blog.csdn.net/u013613428/article/details/82053793)

[最强PostMan使用教程（5）- 工作协同：使用Postman生成接口文档和示例](https://blog.csdn.net/u013613428/article/details/82120152)

补充：

[Postman请求自动获取token](https://blog.csdn.net/xiaobuding007/article/details/79671188)