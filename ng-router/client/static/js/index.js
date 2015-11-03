
/**
 * Created by zhangpeng on 2015/10/12.
 */
define(['angular','uiRouter'],function(){

    var routerApp=angular.module("routerApp",['ui.router']);

    routerApp.run(function($rootScope,$state,$stateParams){
        $rootScope.$state=$state;
        $rootScope.$stateParmas=$stateParams;
    });
    routerApp.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('first',{    //这里是个模块名，也方便ui-sref链接到这个名字
                url:'/login',   //这个就是跟在#后边的地址
                /*templateUrl:'home.html'                   这个是一级路由用法下边是二级路由的用法*/
                views: {       //因为有二级的路由，所以要用view，这两个路由组成一个对象放在一个{}内
                    '':{templateUrl:'../widget/message/home.html'},          //这是第一层的路由主界面模板，所以后边不用名字和路由名字。如果加名字begin，那么就要设置ui-view="begin"来实现多个路由显示来进行区分
                    'main@first':{templateUrl:'../widget/message/loginForm.html'}  //这个一般是同一页面有两个ui-view时候用，但是都是第一级路由，所以会覆盖掉之前的显示，但是没有跳转，就是一直在login页呢
                }
            })
            .state('second',{
                url:'/booklist',
                views:{
                    '':{templateUrl:'../widget/message/bookList.html'}
                }
            })
            .state('second.third1',{       //这个是二级路由，只有这样命名才能让第一层和第二层同时出现，而不覆盖掉第一层的东西
                url:'/third1',
                views:{
                    '':{templateUrl:'../widget/message/third1.html'}
                }
            })
            .state('second.third2',{
                url:'/third2',
                views:{
                    '':{templateUrl:'../widget/message/third2.html'}
                }
            })
            .state('second.third3',{
                url:'/third3',
                views:{
                    '':{templateUrl:'../widget/message/third3.html'}
                }
            })
            .state('zhengze',{
                url:'/zz',
                views:{
                    '':{templateUrl:'../widget/message/zhengze.html'}
                }
            })
            .state('zz',{
                url:'/{zhz:[0-9]{1,4}}',
                views:{
                    '':{templateUrl:'../widget/message/zz.html'}     //如果内容模板相同，那么只用一个模板就可以了，如果模板不同，还是不用正则的好
                }
            })
    });
})

