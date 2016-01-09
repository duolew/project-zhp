/**
 * Created by duole on 2015/12/2.
 */
var express = require('express');
var app = express();
app.delete('/', function (req, res) {
    if(err){
        console.log(err);
    }
    console.log("haha")
    res.send('DELETE request to homepage');
});
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})