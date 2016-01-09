/**
 * Created by 鹏 on 2015/3/16.
 */
$(function () {
    $(document).ajaxStart(function () {   //jquery1.8以上只能绑定到$(document)上,要放在return false前边，要不然会出现警告
        $("#tip").html("留言发送中..");
    });
    $(document).ajaxStop(function () {
        $("#tip").html("留言成功!");
    });
    $("textarea").on("focus", function () {
        $("textarea").val("");
        /*当光标放到输入框的时候，令输入框为空*/
    });
    $("#name").on("focus", function () {
        $("#name").val("");
        /*当光标放到输入框的时候，令输入框为空，所以“”不能省*/
    });
    //添加点击事件

    $("#sendBtn").on("click", function () {
        var $sendTxt = $("textarea").val();
        var $name = $("#name").val();
        var $message = getTime() + " " + $name + "说" + $sendTxt + "</br>";
        var $content = $(".contentList").html() + $message;  //这句的意思是读取当前有的数据，之后再加上新的输入内容
        if ($sendTxt != "请输入您要留言的内容" && $name != "姓名" && $sendTxt != "" && $name != "") {  //这里最好都考虑进去
            $.ajax({
                url: "",
                data: $content + new Date(),  //这里加 new Date()的作用是，设置随机数，避免缓存，重新加载
                success: function (data) {
                    $(".contentList").html($content);
                    $("#txtSpan,#nameSpan").html("");
                }
            });
            return false;            //记得加这句，这句是让他停止往下运行，判断结束，要不然的话判断语句第一次不起作用
        } else if ($sendTxt != "" && $name == "") {
            alert("昵称不能为空!");
            return false;
        } else if ($sendTxt == "" && $name != "") {
            alert("留言内容不能为空!");
            return false;
        } else if ($sendTxt == "请输入您要留言的内容" || $name == "姓名") {
            alert("留言内容或姓名不能为空!");
            return false;
        } else {
            alert("留言或昵称不能为空!");
            return false;

        }
    });
});

function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = year + "/" + month + "/" + day + " " + hour + ":" + minutes + ":" + seconds;
    return time;                               //返回时间
}