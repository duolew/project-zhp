/**
 * Created by zhangpeng on 2015/10/8.
 */
$(document).ready(function(){
    $("input[name='phone']").on('input',function(){
        var userName=$("#userName").val();
        var password=$("#password").val();
        /*if(typeof(userName)=='string'){
            alert("haha")
        }*/
        if(userName.length!=6){
            //console.log($(".alert span:eq(0)").text());
            $(".alert span:eq(0)").html("<i>hoho</i>");
        }else{
            $(".alert span:eq(0)").html(" ");
        }
        $('.alert').slideDown(300).delay(3000).slideUp(300);

    });

    $("#sendCaptcha").on('click',function(){
        var userName=$("#userName").val();
        $.ajax({
            url:"response/sendCaptcha.json",
            dataType:"json",
            type:"post",
            data:{telphone:userName},
            success:function(data){
                if(data==2){
                    var count = 60;
                    curCount=count;
                    $("#sendCaptcha").attr("disabled","true");
                    $("#sendCaptcha").css("background","#dddddd");
                    $("#sendCaptcha").html(curCount+"秒后重试");
                    setInterval(SetRemainTime,"1000")
                }
            }
        })
    })
});

function SetRemainTime(){
    if(curCount==0){
        window.clearInterval();
        $("#sendCaptcha").attr("disabled","false");
        $("#sendCaptcha").css("background","#888888");
        $("#sendCaptcha").html("请重新发送验证码");
    }else{
        curCount--;
        $("#sendCaptcha").attr("disabled","true");
        $("#sendCaptcha").css("background","#dddddd");
        $("#sendCaptcha").html(curCount+"秒后重试");

    }
}