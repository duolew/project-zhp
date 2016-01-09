/**
 * Created by zhangpeng on 2015/12/22.
 */
var httpApp = angular.module('app',[]);
httpApp.controller('httpCtrl',function($scope,$http){
    $http.post('data.json',{id:$scope.id,name:$scope.name})
        .success(function(data){
            $scope.user = data;  //传到$scope内，以后用
        }).error();
})

