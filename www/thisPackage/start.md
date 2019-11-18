# 如何为资料库增加内容

## 第一步 下载`typora`编辑器

进入官网地址下载：https://www.typora.io/

编辑器帮助文档（在需要时查看）：https://www.typora.net/support/

## 第二步 学习下`markdown`的语法(10分钟)

https://www.jianshu.com/p/191d1e21f7ed

## 第三步 加入github仓库,并拉取

> 前端成员已发送加入仓库的邀请.此外，如果想要加入仓库发送github账号至huangyangteng@ebupt.com
>
> 也可以提出pull request https://juejin.im/post/5b5d50bd5188251b3e646c5c

* 仓库地址：https://github.com/huangyangteng/eb-web-service

## 第四步 用typora编辑器打开该仓库下的index.md

打开侧边栏，选择对应的文件夹，新建你要增加的文件，例如`svn基础教程`，可以新建在`tools`文件夹下，然后开始编写

![image-20191114130749455](https://tva1.sinaimg.cn/large/006y8mN6ly1g8xhl3fzfgj309v0jzq5k.jpg)

### typora主题设置

目前本项目使用的是`vue-dark`主题，更换主题方式 https://www.typora.net/212.html

`vue-drak`主题文件地址：https://www.jianguoyun.com/p/DXtw5-gQ0vvwBxist5sC

### 设置图片路径

如果你要插入图片，优先使用图床功能：

Mac版的typora内置了图床上传功能，启用教程：https://sspai.com/post/36275

Windows版的typora没有图床功能，解决方案：https://www.typora.net/612.html



# 第五步 导出html

> typora支持导出多种格式，pdf,html,word等

编写完成后，`文件->导出->html`，导出在`dist`目录下即可

## 第六步 建立跳转链接

导出后，需要索引到对应的html,在index.md中新增

![image-20191114131237706](https://tva1.sinaimg.cn/large/006y8mN6ly1g8xhq3ptruj30jv091ab0.jpg)

## 第七步 提交

将index.md导出为index.html，覆盖掉dist之前的文件，然后github提交

提交后1min左右就可以在[这里](http://10.1.62.116:8888/)看到最新内容