/**
 * Created by SZ on 2015/4/3.
 */
/**
 * Created by SZ on 2015/4/1.
 */

     window.onload=function (){
        //当前高亮的便签，初始值为0
        var index = 0;
        var timer = null;  //给定时器设置个变量，开始初始值是空
        //添加定时器，改变高亮的索引

        var tabstop = document.getElementById("tabs_top");
        var tabli = tabstop.getElementsByTagName("li");
        var content = document.getElementById("content");
        var condiv = content.getElementsByTagName("div");
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




