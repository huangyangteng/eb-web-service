const http=require('http')
const multiparty=require('multiparty')
const util=require('util')
const fs=require('fs')


const server=http.createServer((req,res)=>{
    if(req.url=='/upload' && req.method=='POST'){
        var form = new multiparty.Form()
        form.parse(req, function(err, fields, files) {
            console.log(files)
          let oldPath=files.file[0].path
          let ext=files.file[0].originalFilename.split('.').pop()
          let newPath='./img/'+(+new Date())+'.'+ext
          fs.rename(oldPath,newPath,function(err){
              if(err){
                res.write(JSON.stringify({msg:'error'}))
                  res.end()
              }
              res.write(JSON.stringify({
                  code:0,
                  message:'成功',
                  data:{
                      url:'https://t11.baidu.com/it/u=2444732755,3506111265&fm=76'
                  }
              }))
              res.end()
          })
        })

    }else{
        res.write('hello')
        res.end()

    }
})

server.listen('7777',()=>{
    console.log('server runing on port 7777')
})