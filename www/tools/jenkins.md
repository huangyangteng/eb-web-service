# 前端使用jenkins进行持续集成（超详细）



> 参考：https://juejin.im/post/5ad1980e6fb9a028c42ea1be

> 例子： 
>
> 1. vue，react以及其他使用webpack进行打包的程序，更改代码后，自动打包，将打包后的文件放到服务器上
> 2. nodejs程序代码修改后，自动发布到服务器，并重启后台服务

[toc]

## 一、为什么需要jenkins

软件开发到一定程度，前端的代码迭代过程一般是这样的：

1 PM提出新的需求-> 2 修改代码-> 3 提交版本管理库(svn|git) -> 4  npm run build打包-> 5 将打包后的文件放到服务器的相应位置

一般4，5步骤都是我们手动完成的，当需求更改频繁时，就需要将这些工作自动化，jenkins便排上了用场



## 二、jenkins下载与执行

### 下载地址

http://mirrors.jenkins.io/war-stable/latest/jenkins.war

### 执行程序

下载完成后放到服务器相应的地址，然后执行`war`包

```shell
java -jar jenkins.war --httpPort=8080
```

执行后，在浏览器输入 `域名:8080` 打开管理界面，假如我的服务器ip是`10.1.62.116`，在浏览器输入`10.1.62.116:8080`
### 问题：jenkins已经离线（需更换源）

在浏览器打开页面后，有可能会提示jenkins已经离线，这是因为国内访问不到jenkins的软件源，需要更新源

步骤：

1. 访问配置地址 浏览器url输入 域名+端口+`/pluginManager/advanced` 域名需要换成自己的
2.  在页面的最底部修改源：https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/current/update-center.json（国内清华大学源）

![image-20191018225206628](https://tva1.sinaimg.cn/large/006y8mN6gy1g82qqesk3ej30vi0rignx.jpg)

## 三、基本操作

### 关闭

关闭程序 在url地址后面添加 `/exit`，例如`10.1.62.116/exit`,然后在显示的页面中点击按钮jenkins服务就会关闭

### 重启

url地址后面添加 `/restart`

### 重载

url地址后面添加`/reload`，就会重载配置



## 三、开始使用

> jenkins是以插件为核心的，需要做什么就去安装相应的插件

## 主界面介绍

首先，看下主界面

![image-20190117102514625](https://ws4.sinaimg.cn/large/006tNc79gy1fz9ddql8b5j31lm0u0wsn.jpg)

## 插件

### 安装插件

我们要做的第一步就是安装插件  左侧菜单中点击系统管理-》插件管理

![image-20190117102611816](https://ws2.sinaimg.cn/large/006tNc79gy1fz9depdaplj31li0u0k90.jpg)



点击`可选插件`,然后搜索我们要安装的插件

* publish over ssh  把npm打包后的文件发送到我们自己的服务器，文件发送完成后还可以执行shell命令

  

![image-20190117102749680](https://ws3.sinaimg.cn/large/006tNc79gy1fz9dgfuhtfj31kw0u0k85.jpg)



选中之后，点击`直接安装`，安装完成后重启

### publish over ssh配置

> 配置参考 https://blog.csdn.net/houyefeng/article/details/51027885

publish over ssh的配置包括两部分，一部分是全局配置，针对所有使用该插件的项目，另一部分是针对每个项目单独进行配置

全局配置：`系统管理->系统配置`

![image-20191020222218172](https://tva1.sinaimg.cn/large/006y8mN6gy1g8513w5lr6j30rs0jewhv.jpg)

单独配置在构建过程中进行具体介绍

## 构建流程

以 vue程序为例，修改代码，提交svn后 自动打包，发布到服务器环境(可有多个)

### new Item
左侧菜单`new Item`新建一个项目
![image-20191022214022986](https://tva1.sinaimg.cn/large/006y8mN6gy1g87b5ur4vyj31de0lkjyh.jpg)

### General 保持默认

### Source Code Management(源码管理)

注意：如果只有`Node`选项，git需要安装`github`插件，svn需要安装`subversion`插件

![image-20191022215215923](https://tva1.sinaimg.cn/large/006y8mN6gy1g87bi6i9b5j31mt0u048k.jpg)



### Build Triggers(触发构建方式)

![image-20191022215532807](https://tva1.sinaimg.cn/large/006y8mN6gy1g87bllce2ij31ge0fm0xm.jpg)



### Build Environment(构建环境)

配置构建环境，进行构建前的准备工作，例如安装jenkins的服务器上没有安装node，可以在此处使用NVM插件，临时安装nodejs环境（ps:为了构建效率，将在本地安装Nodejs环境）

### Build(构建)

![image-20191022220748128](https://tva1.sinaimg.cn/large/006y8mN6gy1g87byc4h8cj31n60swqbz.jpg)

整个构建流程大概是这样的：

1. 检测到svn上代码变，将svn上的最新的代码(包括已更改的和未更改的)复制到jenkins的工作目录下，
2. 使用ssh插件，将`source files`配置的路径匹配到的文件发送到`Remote directory`中
3. 发送文件完毕后，切换到工程目录，执行构建`npm i && npm run build`

#### 注意事项

##### source files的配置规则

* 仅支持相对路径，相对于jenkins当前工作路径，我的项目名就my-test,对应的目录就是 `.jenkins/workspace/my-test`
* 匹配模式使用的ant的匹配模式(http://ant.apache.org/manual/dirtasks.html#patterns)

大概匹配规则如下：

![image-20191022221728905](https://tva1.sinaimg.cn/large/006y8mN6gy1g87c8fjq64j31dw0esgpd.jpg)

上文中`trunk/**`就是将trunk下面所有的文件和文件夹放到目标服务器的对应目录(webapps/my-test-app)，放过去之后的目录结构是这样的 webapps/my-test-app/trunk/xxx...   如果我想去除trunk文件夹，直接将trunk文件夹的内容传输过去，就要使用`Remote prefix` 



### 构建完成



我们的构建到这一步就完成了，点击`保存`，然后在点击侧边栏`Build Now`进行构建，查看构建是否成功





![image-20191022224104475](https://tva1.sinaimg.cn/large/006y8mN6ly1g87cwyknutj31bo0qqak1.jpg)