# vscode svn相关插件

[toc]

## 下载

svn插件需要依赖本地装有svn server端，

程序下载地址：

https://www.jianguoyun.com/p/DSpZVGgQ0vvwBxji7ZkC

下载完成后安装，然后再安装vscode的插件

vscode插件下载地址：

https://marketplace.visualstudio.com/items?itemName=johnstoncode.svn-scm

或者在编辑器中搜索 svn,下载作者是 Chris Johnston的svn插件

![image-20191115124516971](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ymkh7lgwj30zs0eq77h.jpg)

## 使用说明

以拨测前端项目为例，首先使用 `tortoisesvn`检出拨测前端项目

### 检出项目

首先，新建文件夹 `monitor-web`,进入文件夹，右键`svn checkout`,填入项目信息

* url:http://10.1.1.212/svn/iip/vrbt-migu-service-monitor/ringtone-video-monito-web/trunk

点击ok

![image-20191115130314481](https://tva1.sinaimg.cn/large/006y8mN6ly1g8yn34fep4j30gi0craaw.jpg)



检出完成后，把项目拖进vscode进行编辑

### 注意事项

vscode根据项目下的.svn文件，进行版本管理的，把项目拖入vscode时不要一次拖入多个，一个svn项目拖入一个vscode窗口

### 常用操作

#### 1. 查看文件变更历史

![image-20191115130803551](https://tva1.sinaimg.cn/large/006y8mN6ly1g8yn84rgklj30wu0lsq80.jpg)



#### 2. 加入暂存区(set changeList)

在svn中，有一个`（变更列表）changeList`的概念，可以将不同的任务的代码变更统一到一起，例如：

![image-20191117215707687](https://tva1.sinaimg.cn/large/006y8mN6gy1g91dr8r6clj30d70az3zi.jpg)



在根目录下新建 `test-svn`文件夹，在文件夹下新建`test.html`，在侧边栏就会显示更改

![image-20191115131118145](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ynbizhx6j30mk0ldmyj.jpg)

加入暂存区后，刚才的文件就会出现在 `Changes`区域

![image-20191115142500790](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ypg75wppj30fa09hwey.jpg)

### 3.  修改暂存区的内容

修改暂存区的内容，此次变更也会在暂存区出现，例如修改下`README.md`文件，并保存

![image-20191115142703487](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ypibzhusj30np08vq4d.jpg)

### 4.0  将暂存区的内容加入`changeList`

鼠标移动到文件改动上，右键选择`set changeList`，根据功能，将代码加入不同的变更列表

代码不加入changeList也可以正常提交，加入只是为了区分任务,，分功能点进行提交

### 4.1  提交暂存区的内容到版本库

![image-20191115142830213](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ypju3oqej30dn0gjdgw.jpg)



点击commit之后，会提示填写提交信息，格式：提交人：此次提交内容



![image-20191115143000646](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ypleqetdj30im0b70t7.jpg)

### 5. 查看日志

![image-20191115143231640](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ypo0x9zoj30fl0rcwij.jpg)

### 6. 删除文件

删除文件后，vscode会提示是否在svn版本库中进行删除，点击Yes,然后提交变更就可以删除该文件

![image-20191115143450514](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ypqfwlc1j30wp0s2afd.jpg)

![image-20191115143557790](https://tva1.sinaimg.cn/large/006y8mN6ly1g8yprlqbypj30s70cw3zm.jpg)

### 7. 解决冲突

两个人同时修改一个文件时就会出现冲突，svn插件在发生冲突时会让你选择应用哪个更改，一般操作是先对比，然后根据实际情况决定应用哪个更改