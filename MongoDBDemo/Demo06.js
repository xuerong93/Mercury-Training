var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var url= "mongodb://localhost:27017/mercury";

var repalceByName =function(db, name, callback){
    var collection=db.collection("emp");
    collection.replaceOne({
        name: name
    }, {
        name: "Steven",
        address: {
            city: "Metuchen",
            state: "NJ"
        },
        age: 21
    }, function(err, result){
        assert.equal(null, err);
        console.log("One record is replaced");
        callback();
    });
};


MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    repalceByName(db, "Steven", function(){
        //console.log(result);
        db.close();
    });
})
