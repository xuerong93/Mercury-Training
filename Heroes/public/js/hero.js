var app = angular.module("mainApp",["ngRoute"]);
app.controller("mainCtrl", ["$scope", "$http", "$injector", function($scope, $http, $injector){
    $scope.getRemoteData = function(){
        var url = "http://sample-env.3vfxhpyrbb.us-west-2.elasticbeanstalk.com/rest/heroes";
        $injector.invoke(function($http){
            $http.jsonp(url).then(function(res){
                console.log(res.data);
                $scope.heroes = res.data;
            })
        });

        $scope.gotoDetail = function($routeProvider){
            $routeProvider.when("/detail",{
                templateUrl: "../html/heroDetail.html",
                controller: heroDetailCtrl
            })
        }
    }
}]);

app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/dashboard",{
        templateUrl: "../html/dashboard.html",
        controller: dashboardCtrl
    }).when("/heroes",{
        templateUrl: "../html/heroes.html",
        controller: heroesCtrl
    }).when("/detail",{
        templateUrl: "../html/heroDetail.html",
        controller: heroDetailCtrl
    }).otherwise({
        redirectTo:"/dashboard"
    })
}]);

app.controller("dashboardCtrl", function(){

});
app.controller("heroesCtrl", function(){

});
app.controller("heroDetailCtrl", function(){

});
