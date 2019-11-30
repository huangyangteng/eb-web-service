## 根据端口找到程序的PID

```shell
port=8080
#根据端口号查询对应的pid
pid=$(netstat -nlp | grep :$port | awk '{print $7}' | awk -F"/" '{ print $1 }');

#杀掉对应的进程，如果pid不存在，则不执行
if [  -n  "$pid"  ];  then
    kill  -9  $pid;
fi
```

## java “Hello World”

1. 新建文件`HelloWorld.java`

```java

public class HelloWorld{
    public static void main(String[] args){
        System.out.println("Hello World");
    }
}
```

2. 编译执行java程序

```shell
# 将.java文件编译成字节码 HelloWorld.java -> HelloWorld.class
javac HelloWorld.java
# 执行java字节码文件 java后面不需要添加.class
java HelloWorld
```

## js数组求最大值

```js
var arr=[12,3,2]
var max=Math.max.apply(null,arr)
```

## pm2 管理java进程

新建配置文件  `run_monitor_app.json`

```json
{
    "name": "monitor-app",
    "script": "/home/diyvrbt/local/jdk1.8.0_191/bin/java",
    "args": [
        "-jar",
        "target/ringtone-video-monitor-runtask.jar"
    ],
    "exec_interpreter": "",
    "exec_mode": "fork"
}
```

参数说明

* name 进程名称（显示在pm2 list命令中）
*  script 执行进程名称，如果需要执行PHP脚本则填写php解释器的路径，本文为java
*  args 传给执行进程的参数，多个参数以数组单元分割
*  exec_interpreter NodeJs解析器
*  exec_mode 执行模式[cluster|fork]这个针对NodeJs应用的配置，非NodeJs应用统一fork

常用命令

```shell
# 启动 
pm2 start run_monitor_app.json
# 查看进程
pm2 list
# 查看日志
pm2 log
# 停止
pm2 stop <app_name|id|all>
# 删除
pm2 delete <app_name|id|all>
# 重启
pm2 restart <app_name|id|all>
# 重载
pm2 reload <app_name|id|all>


```

* 

