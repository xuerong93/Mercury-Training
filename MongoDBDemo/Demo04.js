var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var url= "mongodb://localhost:27017/mercury";

var findAllInNJ =function(db, callback) {
    var collection = db.collection("emp").find({"address.state": "NJ"});
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

var findByAge =function(db, callback) {
    var collection = db.collection("emp").find({"age": {"$gt": 28}});
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
    // findAllInNJ(db, function(result){
    //     console.log(result);
    //     db.close();
    // });
    findByAge(db, function(result){
        console.log(result);
        db.close();
    });
})
