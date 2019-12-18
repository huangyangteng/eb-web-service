const fs=require('fs')
module.exports={
    getJsonByFile(path){
        return JSON.parse(fs.readFileSync(path).toString())
    },
    writeJsonToFile(path,json){
        fs.writeFileSync(path,JSON.stringify(json))
    }
}