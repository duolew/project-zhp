/**
 * Created by SZ on 2015/3/19.
 */
$(function (){
    $(window).scroll(function(){
        var menu=$("#menu");
        var items=$("#content").find(".item");   /*其实可以简写成$("#content .item")*/
        var top=$(document).scrollTop();  /*滚动条距离顶部距离*/
        //console.log(top)
        /*console.log(scrollTop);*/
        //var currentId = $(this).attr("id");

        var currentId;

        items.each(function(){
            var m=$(this);
            /*m.offset().top表示当前元素距离顶部的高1*/
            if(top>m.offset().top-300){
                currentId= "#"+m.attr("id");
            }else{
                return false;
            }
           // console.log(currentId);
        });
        var currentLink=menu.find(".current");
        if(currentId!=currentLink.attr("href")){
            currentLink.removeClass();
            menu.find("[href="+currentId+"]").addClass("current")
           // $("#menu [href='+currentId+']").addClass("current")
           // currentId是个变量，两边的加号是把href=currentId（注意：是变量）的当前值连接成一个字符串（即一个具体的值），这样才能获得元素
            //其实就像"name:"+name   name是一个变量，"name:"这个就是一个字符了，如果不带加号就是"name:"name了，所以是不对的
        }

    })
});