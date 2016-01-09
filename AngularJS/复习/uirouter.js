/**
 * Created by zhangpeng on 2015/12/18.
 */
/*
var app = angular.module("app",[]);
app.directive("enter",function(){
    return {
        restrict:"AE",
        link:function(scope,element,attrs){
            element.on("click",function(){
                attrs.css("color","red")
            })
        }
    }
})*/
var routerApp = angular.module('app',['ui.router']);
    routerApp.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('first',{
                url:'/login',
                views:{
                    '':{templateUrl:'../home.html'},
                }
            })
    })