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

//�±���ʵ�������ӵ�λ�ðڷţ��������и�
//�±���1.�����ж�һ���Ŀ�Ȼ�����һ�зż�����2.�½�һ�����飬�����ÿһ�е��иߡ�3.�ֱ�����С��һ�У��ʹ���һ�е������4.����һ�е�ʱ����ȡ����һ�ŵ���Сֵ����Math.min.apply(null,arr)��5.�����һ����Сֵ���ڵ�������6.�ڷź���һ����λ�á�7.�ı���һ�е�ֵ��
function mywaterfall(){
    var wrap=document.getElementById("wrap");
    var box=wrap.getElementsByClassName("box");
    var width=document.body.clientWidth;
    var boxwidth=box[0].clientWidth;
    var num=Math.floor(width/boxwidth);
    var arr=[];//һ��Ҫ��������㣬��������ȫ�ֵ���
    for(i=0;i<box.length;i++){
        var boxHeight=box[i].offsetHeight;
        if(i<num){
            arr.push(boxHeight);//�����ǰ�ȡ���ĸ߶��Ƶ�arr�������
            //arr[i]=boxHeight;
            //console.log(arr);

        }else{

            var min=Math.min.apply(null,arr);
            var index=getminindex(arr,min);  //�±߽����˷�װ���ǵô���
            box[i].style.position="absolute";
            box[i].style.top=min+"px";
            box[i].style.left=box[index].offsetLeft+"px";
            arr[index]+=box[i].offsetHeight;
            //arr[index]=arr[index]+box[i].offsetHeight;
            //��ʵ�������д��arr[index]=arr[index]+box[i].offsetHeight;�������Ϊ�޸�ԭ�������arr[index]����Ϊarr[index]+box[i].offsetHeight���������͸����飬����ԭ����indexλ�õ����ĳ��µġ�
            //console.log(addbox);
        }

    }
    //console.log(arr);
}
//���ж���С�������ж�
function getminindex(arr,min){
    for (var j in arr) {
        if (arr[j] == min) {
            return j;
        }
    }
}
//����������ж�����Ƿ��Ѿ��������������ͼƬ
function getnewpic(){
    var wrap=document.getElementById("wrap");
    var box=wrap.getElementsByClassName("box");
    var lastimg=box[box.length-1].offsetTop;
    var lastscreen=document.documentElement.clientHeight;
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    return (lastimg>scrolltop+lastscreen)?true:false;
}

//console.log(getnewpic());