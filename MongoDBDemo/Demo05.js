var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var url= "mongodb://localhost:27017/mercury";

var updateByName = function(db, name, callback){
    var collection = db.collection("emp");
    collection.updateOne({
        name: name
    }, {
        $set: {"address.city": "Jercy City"},
        $currentDate: {"lastModified": true}
    }, function(err, result){
        assert.equal(null, err);
        console.log("Update a record");
        callback();
    });
};


MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    updateByName(db, "Alice", function(){
        //console.log(result);
        db.close();
    });
})
