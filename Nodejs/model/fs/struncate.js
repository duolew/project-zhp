/**
 * Created by zhangpeng on 2015/12/1.
 */
var fs = require("fs");
var buf = new Buffer(1024);
fs.ftruncate(fd,10,function(err){
    if(err){
        console.log(err);
    }
    console.log("截取成功")
    console.log('再读取相同文件');
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        if(types>0){
            console.log(buf.slice(0,bytes).toString());
        }

        //关闭文件
        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log("文件已经关闭")
        })
    })
})