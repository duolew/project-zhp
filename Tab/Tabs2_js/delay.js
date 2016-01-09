/**
 * Created by SZ on 2015/4/1.
 */
window.onload=function(){
    var tabstop=document.getElementById("tabs_top");
    var tabli=tabstop.getElementsByTagName("li");
    var content=document.getElementById("content");
    var condiv=content.getElementsByTagName("div");
    var timer=null;  //给定时器设置个变量，开始初始值是空
    //console.log(tabli)
    for(i=0;i<tabli.length;i++){
        //建立一个索引，这是一个闭包，当调用匿名函数的时候，函数中使用的i其实是已经循环完毕的i，也就是i的上界
        //这个索引的index其实也可以是id，加上索引后，查看html的时候可以看到所有的li下都会设置排序的id了
        tabli[i].id=i;
        //console.log(i)   这个可以看到是一个数组0到4
        //先都清空所有的classname
        tabli[i].onmouseover=function(){
            //先清除定时器
            clearTimeout(timer);
            var that = this;//看下一条的说明
            var timer=setTimeout(function(){  //其实setTimeout前是省略掉了一个window的，所以下边this指向的也是window，却找不到this对象，里边的this找不到对象的话，可以在外层来给他引入一个this，所以声明that
                for (j = 0; j < tabli.length; j++) {
                    tabli[j].className = "";
                    condiv[j].className = "tabs_content"
                }
                //这里再给鼠标当前值添加classname
                tabli[that.id].className = "select";//这里的tabli[that.id]写成that也行
                //下边这个可以做一下测试来验证一下this.id,console.log(this.id),这个会是undefind，是取不到值的，可以测试是this还是id取不到，最后得到是this得不到，他是指向window的
                condiv[that.id].className = "tabs_content_show";
                //上边那个index如果换成id的话 就更好理解了
            },2000)
        }

    }

}