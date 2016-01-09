/**
 * Created by 鹏 on 2015/3/7.
 */

window.onload=function(){
        var gettab=document.getElementById("tab");
        var gettabul=gettab.getElementsByTagName("ul")[0];  //如果不通过gettab来找ul，那就要以全篇代码ul组成数组，太麻烦
        var gettabulli=gettabul.getElementsByTagName("li");
        var getdiv=gettab.getElementsByTagName("div");

            for (var i = 0; i < gettabulli.length; i++) {    //不管三七二十一，先让他循环起来
                gettabulli[i].index=i;      //这句话我现在理解为，取出一个值，下边也保持一致使用这时候取出的值（索引目录）
                gettabulli[i].onmouseover=function(){    //上边取好值后，开始讨论取这个值时候li产生的现象
                    for(n=0;n<gettabulli.length;n++) {   //其实这个就是格式化，让3个选项卡都变成一样的，之后再下边再设置被点击的那个！！
                        gettabulli[n].className = "";
                        getdiv[n].className = "hide";
                    }

                this.className="on";                       //取这个值得时候，就是鼠标在当前值上头，li的样式
                getdiv[this.index].className="txt";        //取这个值得时候，div的样式
                }
              }


}
