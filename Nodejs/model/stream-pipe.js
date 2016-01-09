/**
 * Created by zhangpeng on 2015/11/30.
 */
var fs=require("fs");

//创建一个可读流
var readerStream=fs.createReadStream('input.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容，并将内容写入到output.txt中

readerStream.pipe(writerStream);

console.log("程序执行完成");

