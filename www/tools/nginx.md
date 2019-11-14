# nginx安装、配置与使用

## 安装

https://www.jianguoyun.com/p/DVw2TvgQ0vvwBxiX7pcC

## Nginx命令行

```shell
# 路径：nginx软件路径/sbin/
#帮助
./nginx -h

#启动
./nginx    

# -s 发送信号
./nginx -s stop # 立即停止 
./nginx -s quit #释放所有依赖后停止
./nginx -s reload #重启

# -t 检测配置文件是否有语法错误
./nginx -t

# -v 打印版本号
./nginx -v
```

## Nginx配置语法

1. 配置文件由指令和指令块构成
2. 每条指令以 ;分号 结尾，指令与参数之间以空格分隔
3. 指令块以 {} 花括号   将多条指令组织在一起
4. include语句允许组合多个配置文件以提升可维护性
5. 使用#添加注释，提高可读性
6. 使用$符号使用变量
7. 部分指令的参数支持正则表达式

## Nginx配置的指令块

* http             http服务
* server          域名
* upstream     上游服务（一般为后台服务）
* location       url表达式

## Nginx配置静态服务器

> * 配置完成后需要重启，./sbin/nginx -s reload
> * 配置文件在`conf/nginx.conf`

![image-20191113095932149](https://tva1.sinaimg.cn/large/006y8mN6ly1g8w6ix30rhj31dd0u0te8.jpg)



## Nginx配置反向代理服务器

![image-20191113102106517](https://tva1.sinaimg.cn/large/006y8mN6ly1g8w75d41qzj31800u0n4o.jpg)

## Nginx配置gzip

> gzip的配置在http模块里面

    gzip  on;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype image/svg+xml image/x-icon video/mp4;