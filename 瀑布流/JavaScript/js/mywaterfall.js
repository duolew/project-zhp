/**
 * Created by SZ on 2015/5/11.
 */
window.onload=function(){
    var dataimg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]}
    mywaterfall();
    window.onscroll=function(){
        if(getnewpic()) {

            for (i = 0; i < dataimg.data.length; i++) {

                var addbox = document.createElement("div");
                addbox.className = "box";
                wrap.appendChild(addbox);
                var addpic = document.createElement("div");
                addpic.className = "pic";
                addbox.appendChild(addpic);
                var addimg = document.createElement("img");
                addimg.src = "./images/"+dataimg.data[i].src;
                addpic.appendChild(addimg);
            }
            mywaterfall();
        }
    };

};

//下边是实现新增加的位置摆放，并更新列高
//下边是1.先来判断一个的宽，然后算出一行放几个。2.新建一个数组，来存放每一列的列高。3.分别讨论小于一行，和大于一行的情况。4.大于一行的时候来取出第一排的最小值，用Math.min.apply(null,arr)；5.算出第一行最小值所在的列数。6.摆放好新一个的位置。7.改变新一列的值。
function mywaterfall(){
    var wrap=document.getElementById("wrap");
    var box=wrap.getElementsByClassName("box");
    var width=document.body.clientWidth;
    var boxwidth=box[0].clientWidth;
    var num=Math.floor(width/boxwidth);
    var arr=[];//一定要放在最外层，这样就是全局的了
    for(i=0;i<box.length;i++){
        var boxHeight=box[i].offsetHeight;
        if(i<num){
            arr.push(boxHeight);//这里是把取出的高度推到arr数组里边
            //arr[i]=boxHeight;
            //console.log(arr);

        }else{

            var min=Math.min.apply(null,arr);
            var index=getminindex(arr,min);  //下边进行了封装，记得传参
            box[i].style.position="absolute";
            box[i].style.top=min+"px";
            box[i].style.left=box[index].offsetLeft+"px";
            arr[index]+=box[i].offsetHeight;
            //arr[index]=arr[index]+box[i].offsetHeight;
            //其实这里可以写成arr[index]=arr[index]+box[i].offsetHeight;可以理解为修改原数组里的arr[index]，变为arr[index]+box[i].offsetHeight，并且推送给数组，并将原来的index位置的数改成新的。
            //console.log(addbox);
        }

    }
    //console.log(arr);
}
//来判断最小列数的判断
function getminindex(arr,min){
    for (var j in arr) {
        if (arr[j] == min) {
            return j;
        }
    }
}
//这个是用来判断鼠标是否已经滑到最底下那张图片
function getnewpic(){
    var wrap=document.getElementById("wrap");
    var box=wrap.getElementsByClassName("box");
    var lastimg=box[box.length-1].offsetTop;
    var lastscreen=document.documentElement.clientHeight;
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    return (lastimg>scrolltop+lastscreen)?true:false;
}

//console.log(getnewpic());