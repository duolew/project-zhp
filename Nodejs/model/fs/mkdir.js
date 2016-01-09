/**
 * Created by zhangpeng on 2015/12/1.
 */
var fs = require("fs");

console.log("创建目录");
fs.mkdir('./test/h',function(err){    //这个里边就可以创建二级目录
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});