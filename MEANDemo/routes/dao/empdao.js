//empdao.js

var ed = {};
ed.getAllEmp =function(db, callback){
    var collection = db.collection("emp").find();
    var array = [];
    collection.each(function(err, doc){
        
        if(doc!=null){
            //console.log(doc);
            array.push(doc);
        }else{
            callback(array);
        }
    });
 }

 ed.getEmpByName = function(db, name, callback){
    var collection =db.collection("emp").find({"name": name});
    var array = [];
    collection.each(function(err, doc){
       
        if(doc!=null){
            //console.log(doc);
            array.push(doc);
        }else{
            callback(array);
        }
    });
 };

 ed.insertEmp = function(db, emp, callback){
    var collection = db.collection("emp");
    collection.insertOne(emp, function(err, result){
        callback(result);
    });
 };

ed.updateEmp = function(db, emp, callback) {
     var collection = db.collection("emp");
     collection.replaceOne({
        name: emp.name
     },emp, function(err, result){
        callback(result);
     });
};

ed.deleteEmp = function(db, name, callback) {
    var collection= db.collection("emp");
    collection.deleteOne({
        name: name
    }, function(err, result){
        callback(result);
    });
};

 module.exports = ed;
