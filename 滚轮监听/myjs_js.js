/**
 * Created by SZ on 2015/3/24.
 */
function conlog(even){
    console.log(even);
}
function getByClassName(obj, cls) {
    var elements = obj.getElementsByTagName("*");
    /*获取所有元素,所以获取到的不止有content还有item1.....*/
    var result = [];
    /*定义它是一个数组*/
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className == cls) {
            result.push(elements[i]);
            /*push是向数组末尾添加一个新的元素，这里是将取到的item1....来分别插入进去*/
        }
    }
    return result;

    /*上边的for会产生一个result，这里让他返回给数据*/
}
function hasClass(obj, cls) {//用正则表达式来判断
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));//判断obj里是否含有cls字符
}
function removeClass(obj, cls) {
    if (hasClass(obj, cls)){  //先判断他有没有这个class
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, "");
    }
}
function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;//我自己写成obj.className = cls也能实现
    }
}
window.onload = function () {
    window.onscroll = function () {    /*监听滚动条*/
        var top = document.documentElement.scrollTop + document.body.scrollTop;//肯定有一个取不到值，所以是0，所以不影响结果
        //var top =document.body.scrollTop;
       //    var top =document.documentElement.scrollTop;
        /*不一定所有浏览器都兼容*/
        //conlog(top);
        var menus = document.getElementById("menu").getElementsByTagName("a");
        //var items=document.getElementById("content").getElementsByClassName("item");
        var items = getByClassName(document.getElementById("content"), "item")
        /*为了照顾classname兼容性，上边从新做个声明*/
        var currendId = "";
        for (i = 0; i < items.length; i++) {
            var _item = items[i];
            var _itemTop = _item.offsetTop;
            //currendId = "";

            if (top > _itemTop - 200) {
                currendId = _item.id; //我觉得他这个currendId得到的是div对应的id而jq里的则是href
            } else {
                break;    //跳出for循环，而contion则是跳过当前for进行下一个for
            }

        }
        if (currendId) {
            for (var j = 0; j < menus.length; j++) {
                var _menu = menus[j];
                var _href = _menu.href.split("#");//这个jq获取的是#item，而js获取的则是一大串，所以拆分成一个数组
                if (_href[_href.length - 1 ]!= currendId) {
                    removeClass(_menu,"current");//只要是和currendId不同的，就所有的都去掉current

                } else {
                    addClass(_menu,"current");//只给和currendId相同的，加上current
                }

            }
        }
    }
};