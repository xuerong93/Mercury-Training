var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var url= "mongodb://localhost:27017/mercury";

var insertOneEmp =function(db, callback) {
    var collection = db.collection("emp");
    collection.insertOne({
        name: "Steven",
        age: 51,
        address: {
            city: "Greenbel",
            state: "MD"
        }
    },function(err, result){
        assert.equal(null, err);
        console.log("Insert a record in emp");
        callback(result);
    });
}

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    insertOneEmp(db, function(result){
        //console.log(result);
        db.close();
    });
})
