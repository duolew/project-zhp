/**
 * Created by SZ on 2015/4/1.
 */
window.onload=function(){
    var tabstop=document.getElementById("tabs_top");
    var tabli=tabstop.getElementsByTagName("li");
    var content=document.getElementById("content");
    var condiv=content.getElementsByTagName("div");
    //console.log(tabli)
    for(i=0;i<tabli.length;i++){
        //建立一个索引，这是一个闭包，当调用匿名函数的时候，函数中使用的i其实是已经循环完毕的i，也就是i的上界
        //这个索引的index其实也可以是id，加上索引后，查看html的时候可以看到所有的li下都会设置排序的id了
        tabli[i].index=i;
        //console.log(i)   这个可以看到是一个数组0到4
        //先都清空所有的classname
        tabli[i].onmouseover=function(){
            for(j=0;j<tabli.length;j++){
                tabli[j].className="";
                condiv[j].className="tabs_content"
            }
        //这里再给鼠标当前值添加classname
        this.className="select";
        condiv[this.index].className="tabs_content_show";
            //上边那个index如果换成id的话 就更好理解了
        }

    }

}