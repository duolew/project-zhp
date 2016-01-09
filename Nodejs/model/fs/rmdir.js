/**
 * Created by zhangpeng on 2015/12/1.
 */
var fs = require("fs");

console.log("准备删除目录");
fs.rmdir("./test1/1",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir("./test1",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});