# 图形界面工具连接数据库(informix)

## 下载软件

下载地址：https://www.dbvis.com/download/10.0

如果下载速度过慢，可在`Download`按钮上右键`复制下载链接`到迅雷中进行下载

## 安装与连接

一路`next`，直到装上,然后启动：

![image-20191112113324054](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v3mce07mj30xv0l3q8a.jpg)

![image-20191112113339749](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v3ml1mrsj30te0kowjk.jpg)

![image-20191112113925759](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v3sl7kv3j30gd0fm76m.jpg)


## 数据库位置

`数据库Name`——》`crbt_jx`——》`jiangxi`——》`TABLE`

![image-20191112114817780](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v41t8gcwj30ho0kxn2p.jpg)



## 连接信息

对照连接信息与下图进行连接

```java
spring.datasource.driver-class-name=com.informix.jdbc.IfxDriver
spring.datasource.url=jdbc:informix-sqli://10.1.69.150:7779/d
spring.datasource.username=jiangxi
spring.datasource.password=1qaz@WSX
```




![image-20191112110824885](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v2wczqxoj30mp0cajsq.jpg)



## 驱动文件下载

https://www.jianguoyun.com/p/DQ3n3D4Q0vvwBxiWk5cC