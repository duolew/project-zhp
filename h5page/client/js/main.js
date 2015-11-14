/**
 * Created by zhangpeng on 2015/10/27.
 */
$(document).ready(function(){
    var offsetHeight=document.body.offsetHeight;   //获取当前页面高度
    var offsetWeight=document.body.offsetWidth;   //获取当前页面宽度
    var scrollTop=document.body.scrollTop;          //获取当前页面卷曲上去的高度
    var scaleW=offsetWeight/640;    //以640为基础的设计图
    var getSlide=document.getElementsByClassName("slide");
    var slideLenght=getSlide.length;
    var eventCommon={
        commonEvent:function(event){
            return event ? event : window.event;
        },
        commonListen:function(element, type, handler){
            if(element.addEventListener){
                element.addEventListener(type, handler, false);        //这个false是不用读全片，只读部分element，具体可以查看addEventListener
            }else if(element.attachEvent){
                element.attachEvent("on" + type, handler);
            }else{
                element["on"+type]=handler;
            }
        },
        commonWhell:function(){
            var browser=navigator.userAgent;
            if(browser.indexOf("Firefox")>=0){
                return "DOMMouseScroll";
            }else{
                return "mousewheel";
            }
        },
        commonWheelDetail:function(event) {
            var browser = navigator.userAgent;
            if (browser.indexOf("Firefox") >= 0) {
                var event = window.event || arguments.callee.caller.arguments[0] || event || e ;
                return -event.detail*40;
            } else {
                return window.event.wheelDelta;
            }
        }
    };
    //自适应页面
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

    //js切换动作
    function jump(){
        var dir=eventCommon.commonWheelDetail();
        i=this.index;
        if(dir==-120){
            if(i<slideLenght-1){
                var x=-parseInt(i+1)+"00%";
                $(".slide").css({transition:"transform 1s ease",transform:"translate3d(0,"+x+",0)"});
            }
        }else{
            if(i>0){
                var y=-parseInt(i-1)+"00%";
                $(".slide").css({transition:"transform 1s ease",transform:"translate3d(0,"+y+",0)"});
            }
        }
    }

    //执行事件
    for(var i=0;i<slideLenght;i++){
        getSlide[i].index=i;
        var _ = this;
        eventCommon.commonListen(getSlide[i],eventCommon.commonWhell(), jump)
    }
});
    //=================================取当前轮播区块遍历方法=================================
    //js写法
    //for(var i=0;i<getSlide.length;i++) {
    //     getSlide[i].index=i;
    //     getSlide[i].onmousewheel=function(){
    //     alert("haha");
    //     console.log(this.index);
    //     }
    //}

    //jQuery初级写法
    //for(var i=0;i<getSlide.length;i++){
    //    $(".slide").eq(i).attr("index",i);
    //    $(".slide").eq(i).on("mousewheel",function(){
    //        console.log($(this).attr("index"));
    //    });
    //}

    //jQuery优化写法
    //$(".slide").each(function(i){
    //    $(this).attr("index",i).on("mousewheel",function(){
    //        console.log($(this).attr("index"));
    //
    //    })
    //})

    //jQuery绑定方法
    //$('.slide').each(function(i){
    // $(this).data('index',i);
    // }).on("mousewheel", function(){
    // console.log($(this).attr("index"));
    // console.log($(this).data('index'));
    // console.log($(this));
    // console.log($(event.target))
    // });

    //====================================不同浏览器滚动监听====================================
    //except Firefox
    //$(window).on("mousewheel",function(){
    //   var e=window.event||event||e;
    //    var dir=e.wheelDelta;
    //    if(dir==-120){
    //        //console.log($(this));
    //    }
    //});

    //Firefox

    //window.addEventListener("DOMMouseScroll", function(event){
    //    console.log(EventUtil.getwheelDetail());
    //    var e=event||e;
    //    var dir=e.detail;
    //    if(dir==-3){
    //    console.log($(this));
    //    }
    //});