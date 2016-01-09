/**
 * Created by zhangpeng on 2015/11/30.
 */
var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为input.txt
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));

console.log("文件解压成功");