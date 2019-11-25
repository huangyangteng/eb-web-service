const http=require('http')
const fs=require('fs')

var IMG_PACKAGE_PATH='./img'
var SERVER_HOST='http://10.4.0.147:7777/'



const server=http.createServer((req,res)=>{
    if(req.url=='/upload' && req.method=='POST'){
        var str=''
        req.on('data',buffer=>{
            str+=buffer
        })
        req.on('end',()=>{
            // base64格式的图片需要去除前缀
            var base64Data=str.replace(/^data:image\/\w+;base64,/,'')
            // string需要转成二进制
            var dataBuffer=Buffer.from(base64Data,'base64')
            // 随机产生文件名
            var imgName=(+new Date())+'.png'
            // 拼接图片路径
            var imgPath=IMG_PACKAGE_PATH+'/'+imgName
            // 写入文件 
            fs.writeFile(imgPath,dataBuffer,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(JSON.stringify({
                        data:{
                            url:SERVER_HOST+imgName
                        }
                    }))
                    res.end()
                }
            })
            
        })

    }else{
        fs.readFile(`${IMG_PACKAGE_PATH}/${req.url}`,(err,buffer)=>{
            if(err){
                res.write('404 NOT FOUND')
                res.end()
            }else{
                res.write(buffer)
                res.end()
            }
        })
    }
})

server.listen('7777',()=>{
    console.log('server runing on port 7777')
})