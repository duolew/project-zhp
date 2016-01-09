/**
 * Created by zhangpeng on 2015/12/3.
 */
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
    res.send("Cookies: ", req.cookies)
})

app.listen(8081)