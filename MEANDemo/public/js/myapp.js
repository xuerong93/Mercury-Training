var app = angular.module("mainApp",["ngRoute"]);
app.controller("mainCtrl",["$scope",function($scope){

}]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "./template/home.html"
    }).when("/add", {
        templateUrl: "./template/add.html"
    }).when("/update/:name", {
        templateUrl: "./template/update.html"
    }).otherwise({
        redirectTo: "/"
    });
}]);
