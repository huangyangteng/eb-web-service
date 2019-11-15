# svn版本管理

> 前端一般使用可视化工具+编辑器插件配置来进行svn协作，一般情况下是使用可视化工具检出代码，合并分支，使用编辑器插件进行常规操作，如加入版本库、提交变更，查看文件变更。

## svn教程

https://www.runoob.com/svn/svn-tutorial.html

## 可视化工具


* tortoisesvn 使用教程（windows）：https://www.runoob.com/svn/tortoisesvn-intro.html
* CornerStone使用教程 (Mac) : https://segmentfault.com/a/1190000018026591

## 编辑器插件

* [vscode](vscode-svn.html)
* eclipse（no）

## svn协作流程

1. trunk中为即将要上线的代码，如果有新需求需要创建新的分支，需求完成后与trunk中代码进行合并

## svn提交规范

1. 先更新代码(update)，再提交(commit)
2. 每次提交代码时写清楚  提交人：提交原因(尽量不换行，vscode的svn插件只能查看一行log)
3. 不要把不需要的文件传到svn服务器上，不需要的文件可以设置为ignore