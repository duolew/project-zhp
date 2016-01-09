/*
 * Created by zhangpeng on 2015/8/7.
 */
var routerApp = angular.module("routerApp",['ui.router']);
/*
 *由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * run是注入的意思，但是只能运行一次
*/
routerApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state=$state;
    $rootScope.$stateParmas=$stateParams;
});

/*
*
*
*
*
*/
routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');         //设置默认首页
    $stateProvider
        .state('index',{                    //将这个路由名设置成index，只是名字而已，没有太大意义及用处
            url:'/index',                    //设置路由网址为#/index，因为原理是通过哈希和锚点获取地址，所以给加了个#
            views:{
                '':{templateUrl:'tpls/home.html'},
                'main@index':{templateUrl:'tpls/loginForm.html'}    //在home页(准备调用main模块的起始页面)先跳转到index页（这个index是url后边接的网址）的main模块
            }                                                       //在home页跳转到url所指页面，并且用main所指页面进行填充

        })
        .state('booklist',{
            url:'/{bookType:[0-9]{1,4}}',     //正则表达式，0-9取随机数，而{1,4}是说0-0000，整句话就是0-9999内都可以，而这句话就是取出点击bookType后边这个数字
            views:{
                '':{templateUrl:'tpls/bookList.html'},
                'booktype@booklist':{templateUrl:'tpls/bookType.html'},
                'bookgrid@booklist':{templateUrl:'tpls/bookGrid.html'}
            }
        })
        .state('addbook',{
            url:'/addbook',
            templateUrl:'tpls/addBookForm.html'
        })
        .state('bookdetail', {
            url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
            templateUrl: 'tpls/bookDetail.html'
        })
});