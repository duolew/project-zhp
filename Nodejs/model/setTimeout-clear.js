/**
 * Created by zhangpeng on 2015/12/1.
 */
function printHello(){
    console.log("hello world")
}
var t = setTimeout(printHello,2000);

clearTimeout(t);
t;