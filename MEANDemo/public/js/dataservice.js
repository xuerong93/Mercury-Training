//dateservice.js

(function(global) {
    var ds = {};
    ds.empService = function($q, $http) {
        var url ="/rest/es/emp";
        return {
            getAllEmp: function() {
                var defer = $q.defer();
                $http.get(url).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            getOneEmp: function(name){
                var defer =$q.defer();
                $http.get(url + "/" + name).then(function(res) { 
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            insertEmp: function(emp){
                var defer = $q.defer();
                $http.post(url, emp).then(function(res) {
                    defer.resolve(res);
                });
                return defer.promise;
            },
            updateEmp: function(emp) {
                var defer = $q.defer();
                $http.put(url,emp).then(function(res){
                    defer.resolve(res);
                });
                return defer.promise;
            },
            deleteEmp: function(name) {
                var defer = $q.defer();
                $http.delete(url + "/" + name).then(function(res) {
                    defer.resolve(res);
                });
                return defer.promise;
            }
        }
    }
    ds.noConflict = function(){
        return ds;
    };

    global.ds = ds; 
})(window); 
