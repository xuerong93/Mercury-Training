var app = angular.module("mainApp",["ngRoute"]);
app.controller("mainCtrl",["$scope", function($scope){

}]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "template/home.html",
        controller: "homeCtrl"
    }).when("/add", {
        templateUrl: "template/add.html",
        controller: "addCtrl"
    }).when("/update/:name", {
        templateUrl: "template/update.html",
        controller: "updateCtrl"
    }).otherwise({
        redirectTo: "/"
    });
}]);

app.factory("es", ["$q","$http", ds.empService]);

app.controller("homeCtrl", ["$scope", "es", "$location", function($scope, es, $location){
    es.getAllEmp().then(function(data) {
        $scope.empList = data;
    });

    $scope.doUpdate =function(name) {
        $location.path("/update/" + name);
    };

    $scope.doDelete = function(index) {
        var name = $scope.empList[index].name;
        es.deleteEmp(name).then(function(result){
            $scope.empList.splice(index,1);
        });
    };
}]);



app.controller("addCtrl", ["$scope", "es", "$location", function($scope, es, $location) {
    $scope.doSubmit = function() {
        es.insertEmp($scope.emp).then(function() {
            $location.path("/");
        })
    };
    $scope.doClear =function() {
        $scope.emp = {};
    }
}]);

app.controller("updateCtrl", ["$scope", "es", "$location", "$routeParams", function($scope, es, $location, $routeParams) {
    var name = $routeParams.name;
    es.getOneEmp(name).then(function(data) {
        $scope.emp = data;
        delete $scope.emp._id;    //the input data is first  put into database and has _id, _id can not be repalced,so deleteit and update other information
        $scope.originalEmp = angular.copy($scope.emp);
    });

    $scope.doSubmit = function() {
        es.updateEmp($scope.emp).then(function() {
            $location.path("/");
        })
    };
    $scope.doClear =function() {
        $scope.emp = $scope.originalEmp;
    }
}]);
