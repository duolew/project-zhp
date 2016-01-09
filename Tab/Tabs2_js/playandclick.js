/**
 * Created by SZ on 2015/4/1.
 */
window.onload = function () {
    //当前高亮的便签，初始值为0
    var index = 0;
    var timer = null;  //给定时器设置个变量，开始初始值是空
    //添加定时器，改变高亮的索引

    var tabstop = document.getElementById("tabs_top");
    var tabli = tabstop.getElementsByTagName("li");
    var content = document.getElementById("content");
    var condiv = content.getElementsByTagName("div");
    //遍历每一个页签，通过for循环
    for(var i=0;i<tabli.length;i++){
        tabli[i].id=i;
        tabli[i].onmouseover=function(){
            clearInterval(timer);//记得记得记得一定要清除这个定时器
            for(j=0;j<tabli.length;j++){
                tabli[j].className="";
                condiv[j].className="tabs_content"
            }
            tabli[this.id].className="select";
            condiv[this.id].className="tabs_content_show"
            index=this.id;   //这里是让他复位到鼠标经过标签来往下循环1
        }
        tabli[i].onmouseout=function(){
            timer = setInterval(function () {
                index++;
                //console.log(index)
                //console.log()来打印一下index++，来查看一下，从0一直往下走，所以要判断下让他只能增到4！所以做个判断用if
                if (index >= tabli.length) {   //让index永远在0-4之间变动
                    index = 0;
                }
                //console.log(index)           上边是让index只在0-4间切换

                for (j = 0; j < tabli.length; j++) {   //循环起来，全部清除掉他们的样式
                    tabli[j].className = "";
                    condiv[j].className = "tabs_content"
                }
                //这里再给鼠标当前值添加classname
                tabli[index].className = "select";//这里的tabli[that.id]写成that也行
                //下边这个可以做一下测试来验证一下this.id,console.log(this.id),这个会是undefind，是取不到值的，可以测试是this还是id取不到，最后得到是this得不到，他是指向window的
                condiv[index].className = "tabs_content_show";
                //上边那个index如果换成id的话 就更好理解了

            }, 1000)
        }
    }
    timer = setInterval(function () {
        index++;
        //console.log(index)
        //console.log()来打印一下index++，来查看一下，从0一直往下走，所以要判断下让他只能增到4！所以做个判断用if
        if (index >= tabli.length) {   //让index永远在0-4之间变动
            index = 0;
        }
        //console.log(index)           上边是让index只在0-4间切换

        for (j = 0; j < tabli.length; j++) {   //循环起来，全部清除掉他们的样式
            tabli[j].className = "";
            condiv[j].className = "tabs_content"
        }
        //这里再给鼠标当前值添加classname
        tabli[index].className = "select";//这里的tabli[that.id]写成that也行
        //下边这个可以做一下测试来验证一下this.id,console.log(this.id),这个会是undefind，是取不到值的，可以测试是this还是id取不到，最后得到是this得不到，他是指向window的
        condiv[index].className = "tabs_content_show";
        //上边那个index如果换成id的话 就更好理解了

    }, 1000)

}