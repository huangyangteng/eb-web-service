# svn版本管理

> 前端一般使用可视化工具+编辑器插件来进行svn协作，一般情况下是使用可视化工具进行检出代码，合并分支,创建tag等操作;使用编辑器插件进行日常开发工作，如加入版本库、提交变更，查看文件变更等。

## svn教程

https://www.runoob.com/svn/svn-tutorial.html

## 可视化工具


* Tortoisesvn 使用教程（windows）：https://www.runoob.com/svn/tortoisesvn-intro.html
* CornerStone使用教程 (Mac) : https://segmentfault.com/a/1190000018026591

## 编辑器插件

* [vscode 点击查看](vscode-svn.html)
* eclipse（暂无）

## svn协作流程

trunk中为本周要上线的代码，如果有新需求提出，要求下周上线，则需要创建新的分支，需求完成后与trunk中代码对比进行合并

## svn提交规范

1. 先更新代码(update)，再提交(commit)
2. 每次提交代码时写清楚  提交人：提交原因(尽量不换行，vscode的svn插件查看log信息只能显示单行)
3. 不要把不需要的文件传到svn服务器上，不需要的文件可以设置为ignore