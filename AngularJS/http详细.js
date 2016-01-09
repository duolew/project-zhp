/**
 * Created by zhangpeng on 2015/8/26.
 */
var Myapp =angular.module("Myapp",[]);

Myapp.controller("Login",function($http,$scope){
    $scope.phone='';
    $scope.sendCaptcha=function(){
        $http.post("response/sendCaptcha.json",{telephone:$scope.phone}
        ).success(function(data){
                if(data==2){
                    alert("haha")
                }
            }
        )
    }
    $scope.btn_verify=function(){
        alert("22");
    }
})

Myapp.directive('sendcaptcha',function(){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
            element.bind('click',function(){
                scope.sendCaptcha();
            })
        }
    }
})


Myapp.directive('verify',function(){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
            element.bind('click',function(){
                scope.btn_verify();
            })
        }
    }
})


/* ====================================== 第一次尝试=======================================

Myapp.service("getResule",function($http,$q){
    this.verificationResule=function(){
        var deffered=$q.defer();
        $http.get("response/checkCaptcha_1.json")
            .success(function(data){
                deffered.$$resolve(data)
            }).error(function(err){
                deffered.$$reject(err)
            })
    }
})

Myapp.controller('Login',function($scope,$http,getResult){
    $scope.getVerification=function(){
        $http.post('response/sendCaptcha.json',{phone:user.phone})
            .success(alert("验证码发送成功")).error(alert("发送失败"));
        $http.post('response/checkCaptcha.json',{phone:user.phone,verification:user.verification})
            .success(alert("登陆成功")).error(alert("登陆失败"));
    }
    getResult.verificationResule().then(
        function(data){
            //登陆成功
        },
        function(err){
            //登陆失败
        }
    )
})*/

/*
=========================================post发送数据后返回===========================================

Myapp.controller("Login",function($http,$scope){
    $scope.phone='';
    $http.post("response/sendCaptcha.json",{telephone:$scope.phone}
    ).success(function(data){
            if(data==2){
                $scope.hint1="haha"
            }
        }
    )
})*/


/*
==========================================get接收数据=================================================

function customerController($scope,$http){
    $http.get("Customers_JSON.php")
        .success(function(response){
            $scope.names = response;
        });
}*/


/*

 ==========================================get接收json数据源码=================================================

Myapp.service("Myservice",function($http,$q){
    this.userDate=function(){
        var deferred =$q.defer();
        $http({
            method:'GET',
            url:'response/phone.json'
        }).success(function(data){
            deferred.$$resolve(data)
        }).error(function(err){
            deferred.$$reject(err)
        });

        return deferred.promise


    }

});

Myapp.controller("Myctrl",function($scope,Myservice){

    Myservice.userDate().then(
        function(data){
            $scope.loginData=data;
        },
        function(err){
            console.log(err)
        })

});


 <tr ng-repeat="x in loginData | orderBy:'Country'">     <!--这个是按国家的字母顺序开始排列从A-Z-->
 <td>{{x.telephone}}</td>
 <td>{{x.verification}}</td>
 </tr>

*/
