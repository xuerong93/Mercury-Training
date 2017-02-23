var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var url= "mongodb://localhost:27017/mercury";

var deleteOneRecord =function(db, name, callback){
    var collection=db.collection("emp");
    collection.deleteOne({
        name: name
    }, function(err, result){
        assert.equal(null, err);
        console.log("One record is deleted");
        callback();
    });
};


MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    deleteOneRecord(db, "Steven", function(){
        //console.log(result);
        db.close();
    });
})
