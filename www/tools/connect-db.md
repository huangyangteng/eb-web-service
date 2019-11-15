# 图形界面工具连接数据库(informix)

## 下载软件

下载地址：https://www.dbvis.com/download/10.0

如果下载速度过慢，可在`Download`按钮上右键`复制下载链接`到迅雷中进行下载

## 安装与连接

一路`next`，直到装上,然后启动：

![image-20191112113324054](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v3mce07mj30xv0l3q8a.jpg)

![image-20191112113339749](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v3ml1mrsj30te0kowjk.jpg)

![image-20191114130028848](https://tva1.sinaimg.cn/large/006y8mN6ly1g8xhdi6vugj30g80fgq80.jpg)


## 数据库位置

`数据库Name`——》`crbt_jx`——》`jiangxi`——》`TABLE`

![image-20191112114817780](https://tva1.sinaimg.cn/large/006y8mN6ly1g8v41t8gcwj30ho0kxn2p.jpg)



## 连接信息

```java
spring.datasource.driver-class-name=com.informix.jdbc.IfxDriver
spring.datasource.url=jdbc:informix-sqli://10.1.69.150:7779/d
spring.datasource.username=jiangxi
spring.datasource.password=******   //密码问别人
```



## 驱动文件下载

https://www.jianguoyun.com/p/DfStX24Q0vvwBxiG_5kC