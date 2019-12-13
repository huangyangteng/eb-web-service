# 媒体产品部资料

[toc]

## 通用

### wifi

```js
账号 EBCD-Bravo/EBCD-Charlie
密码 1082325588
```

### 连接打印机

```js
windows:
连接小的打印机：打开cmd,输入start \\10.4.0.100  ,点击HP LaserJet P2050 Series PcL6 安装即可;　
要连接大的打印机：打开cmd,输入start \\10.4.0.80 ,点击 UNIV_driver 安装里面的应用程序即可
账号　print 密码1234
打印彩色(10.4.0.80)密码 123
mac：
https://jingyan.baidu.com/article/f006222824aebefbd2f0c811.html
```

### 常用网址

* psm地址：https://10.1.1.100:8443/butterfly/client?sys_action=mainform　
    * 账号和密码默认是邮箱前缀
* 禅道地址：http://10.1.63.70/zentaopms/www/index.php?m=ebprojectteam&f=browse&deptID=78
    * 账号默认是姓名全拼，密码123456
* e学堂地址：http://ebupt.21tb.com/login/login.init.do
    * 账号密码默认都是姓名全拼
* 考勤查询地址：http://10.1.1.77/site/login
* 公司内网地址：http://staff.ebupt.net/
* 综合管理部服务接口：http://hrad.ebupt.net/blog/?page_id=24

## 开发

### 服务器地址

```js
#测试服务器1　
host 10.1.63.26　
端口 19222
账号:corpvrbt　　　
密码:1qaz@WSX

#测试服务器2
host　10.1.62.116
端口 19222
账号密码：corpvrbt 1qaz@WSX
账号密码：diyvrbt 1qaz@WSX
```

### 后端电脑IP

```js
黄养滕：10.4.0.147 (MAC) 10.4.0.112（windows）
王泓森：10.4.1.135　
邓俊男：10.4.1.149
左华洋：10.4.0.252
丁健：　10.4.0.125
罗元沙：10.4.1.92
```

###  jenkins持续集成

```js
地址：http://10.1.62.116:8080/
账号：corpvrbt 1qaz@WSX
项目：拨测前端(monitor) 拨测后端（java-monitor） 拨测前端mock接口（node-monitor）
```

### 邮箱地址（发送邮件+约会议室）

```js
"唐子雪"<tangzixue@ebupt.com>;"敬晓丹"<jingxiaodan@ebupt.com>;"段嘉嘉"<duanjiajia@ebupt.com>;"左华洋"<zuohuayang@ebupt.com>;"杨奎"<yangkui@ebupt.com>;"谭勇"<tanyong@ebupt.com>;"罗元沙"<luoyuansha@ebupt.com>;"杨林"<yanglin@ebupt.com>;"丁健"<dingjian@ebupt.com>;"田龙耀"<tianlongyao@ebupt.com>;"吴静"<wujing@ebupt.com>;"邓俊男"<dengjunnan@ebupt.com>;"王煜"<wangyu@ebupt.com>;"王泓森"<wanghongsen@ebupt.com>;"付旭辉"<fuxuhui@ebupt.com>;"杨圆静"<yangyuanjing@ebupt.com>;"李鹏"<lipeng_1@ebupt.com>;"严露"<yanlu@ebupt.com>;"邬丽娇"<wulijiao@ebupt.com>;"姚其岑"<yaoqicen@ebupt.com>;"樊玉玲"<fanyuling@ebupt.com>;"黄养滕"<huangyangteng@ebupt.com>;
```

```js
tangzixue@ebupt.com
jingxiaodan@ebupt.com 
duanjiajia@ebupt.com  
zuohuayang@ebupt.com  
yangkui@ebupt.com     
tanyong@ebupt.com     
luoyuansha@ebupt.com  
yanglin@ebupt.com      
dingjian@ebupt.com    
tianlongyao@ebupt.com 
wujing@ebupt.com      
dengjunnan@ebupt.com  
wangyu@ebupt.com      
wanghongsen@ebupt.com 
fuxuhui@ebupt.com     
yangyuanjing@ebupt.com
lipeng_1@ebupt.com
wulijiao@ebupt.com    
fanyuling@ebupt.com   
huangyangteng@ebupt.com
yanlu@ebupt.com
yaoqicen@ebupt.com
```

## 项目

### 企业视频彩铃管理员网站

* svn地址(后端):http://10.1.1.212/svn/iip/ims-mrbt/ims-mngr-web
* svn地址(前端):http://10.1.1.212/svn/iip/ims-mrbt/ims-mngr-webapp
* 说明：trunk中为最新代码，检出时需要检出trunk中的代码
* 文档：前端文档在前端项目中的README.md文件中
####测试账号

```js
说明：验证码在eclipse的控制台查看　
超管手机号：　15822331581　
省管理员手机号：19653212654
地市管理员手机号：15966362565
普通客户经理：　18844210003
铃音制作商手机号：13775844692　 13775156692　
模板制作商手机号：　13799999999
陕西省管：13290987868

```

### 陕西H5

* 前端代码: http://10.1.1.212/svn/iip/ims-mrbt/qrcode　
* 原型图：https://4ebh50.axshare.com/?tdsourcetag=s_pcqq_aiomsg#g=1&p=%E4%B8%80%E4%BC%81%E4%B8%80%E7%A0%81　
* 设计稿：https://lanhuapp.com/web/#/item/project/board?pid=183bbbe5-14e2-4c11-bb9f-60cf572d6e9c　
* 图标：https://www.iconfont.cn
* 人员安排：前端 李鹏 邬丽娇
    　 　 　 　后端 左华洋 罗元沙

### 铃音模板制作

* 设计图：https://lanhuapp.com/web/#/item/project/board?pid=a1e3047d-bca7-41b0-a925-4c7ac9d51924
* 项目地址：10.1.1.212/svn/iip/ims-mrbt/ims-mrbt-ringtone-video
* 说明：/document 为文档地址
    　 　 /ringtone-video-webpage 为前端地址,其他是后端地址
* 前端人员：黄养滕 邬丽娇
* 后端人员：邓俊男 王泓森

### 拨测

* svn：http://10.1.1.212/svn/iip/vrbt-migu-service-monitor/
* 文档：http://10.1.1.212/svn/iip/vrbt-migu-service-monitor/document
* 原型图：https://www.xiaopiu.com/web/byId?type=project&id=5d88354f80859a36c7b431e2
* 设计稿：https://lanhuapp.com/url/D36dv-5US4C
* 图标：https://www.iconfont.cn

* 人员安排：　http://www.eb-web.club:8888/monitor/staff.html
* 前端进度： http://www.eb-web.club:8888/monitor/
* 演示地址： http://10.1.62.116:22222