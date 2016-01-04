/**
 * Created by zhangpeng on 2015/10/19.
 */

require.config({
    paths:{                           //有s不要拼错
        'angular':'../lib/angular',
        'uiRouter':['http://apps.bdimg.com/libs/angular-ui-router/0.2.15/angular-ui-router','../../../../bower_components/angular-ui-router/release/angular-ui-router'],
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'uiRouter':{
            deps:['angular'],       //依赖于angular
            exports:'uiRouter'
        }
        //上边这三行可以简写为
        //'uiRouter':['angular']

    }
});
require(['angular','uiRouter','index'],function(angular,uiRouter,index){
    angular.bootstrap(document,['routerApp']);
});