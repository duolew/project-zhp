/**
 * Created by zhangpeng on 2015/10/27.
 */
$(document).ready(function(){
    var offsetHeight=document.body.offsetHeight;   //获取当前页面高度
    var offsetWeight=document.body.offsetWidth;   //获取当前页面宽度
    var scrollTop=document.body.scrollTop;          //获取当前页面卷曲上去的高度
    var scaleW=offsetWeight/640;    //以640为基础的设计图
    console.log(offsetHeight);
    console.log(offsetWeight);
    console.log(document.body.scrollTop);
    var gaga=$(".haha").scrollTop();
    console.log(gaga);
    $(".slide").css("height",offsetHeight);
    var w =$("img");
    for(i=0;i< w.length;i++){
        var img =new Image();                   //new 一个image()对象
        img.src=$("img").eq(i).attr("src");     //给这个图片对象设置src地址
        img.width=img.width*scaleW;             //给这些图片设置他现在的宽度值
        img.height=img.height*scaleW;           //给这些图片设置他现在的宽度
        $("img").eq(i).css("width",img.width+"px");     //给他设置现在的宽度值+px
        $("img").eq(i).css("height",img.height+"px");
    }
    //except Firefox
    $(window).on("mousewheel",function(){
       var e=window.event||event||e;
        var dir=e.wheelDelta;
        if(dir==-120){
            $(".slide").addClass("up+1");
        }
    });

    //Firefox
    window.addEventListener("DOMMouseScroll", function(event){
        var e=window.event||event||e;
        var a=e.detail;
        //console.log(a);
    });


});
