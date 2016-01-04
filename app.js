/**
 * @file YOG2 框架启动入口
 * @author fis@baidu.com
 */

/*
'use strict';

var yog = require('yog2-kernel');

var app = yog.bootstrap({
    rootPath: __dirname
}, function () {
    console.log('plugins load completed');
});

app.set('port', process.env.PORT || 8085);

var server = yog.server = app.listen(app.get('port'), function () {
    console.log('Yog server listening on port ' + server.address().port);
});

server.on('connection', function (socket) {
    // disable nagle
    socket.setNoDelay(true);
    // keep-alive timeout
    socket.setTimeout(60 * 1000);
});
*/

/*

/!**
 * Created by zhangpeng on 2015/11/27.
 *!/
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');*/

var bodyParser = require('body-parser');
var express = require('express');
var _ = require('underscore');
var path = require('path');
var ejs = require('ejs');
var app = express();
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({extended: true});   // 创建 application/x-www-form-urlencoded 编码解析
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/cinema');     //链接数据库

//app.set('view engine','jade');                //jade模板
app.engine('html',ejs.__express);               //将ejs转换成html格式
app.set('view engine','html');                  //这个的作用是让路由内的网址不用输入html格式
app.use(urlencodedParser);
app.use(express.static(path.join(__dirname,'/')));    //这个是设置默认调用静态模块文件夹路径
app.locals.moment = require('moment');
app.listen(port);

console.log("服务已启动");
var Movie = require('./cinema/server/model/movie');    //模块内为数据库操作

require('./cinema/server/router')(app,Movie,_);
