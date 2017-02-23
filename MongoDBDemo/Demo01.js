var assert = require("assert");
var MongoClient = require("mongodb").MongoClient;

var url= "mongodb://localhost:27017/mercury";

MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("Connected to ds successfully!");
    db.close();

})
