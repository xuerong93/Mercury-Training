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

 module.exports = ed;
