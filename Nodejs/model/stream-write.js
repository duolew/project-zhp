/**
 * Created by zhangpeng on 2015/11/30.
 */
var fs = require("fs");
var data = "我的网址：www.pengweb.net";

//创建一个可吸入的流，写入到文件output.txt中
var writerStream = fs.createWriteStream('output.txt');

//使用UTF8写入数据
writerStream.write(data,'UTF8');   //开始写入

//标记文件末尾
writerStream.end();

//处理流事件   data,end and error
writerStream.on('finish',function(){
    console.log('写入完成');
});

writerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("程序执行完成");