var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var url= "mongodb://localhost:27017/mercury";

var findAll =function(db, callback) {
    var collection = db.collection("emp").find();
    var array = [];
    collection.each(function(err, doc){
        assert.equal(null, err);
        if(doc!=null){
            //console.log(doc);
            array.push(doc);
        }else{
            callback(array);
        }
    });
}

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    findAll(db, function(result){
        console.log(result);
        db.close();
    });
})
