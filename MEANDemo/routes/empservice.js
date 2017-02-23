var express = require("express");
var router = express.Router();
var ed = require("./dao/empdao");
var MongoClient =require("mongodb").MongoClient;
var url ="mongodb://localhost:27017/mercury";

router.get("/emp", function(req, res){
    MongoClient.connect(url, function(err,db){
        ed.getAllEmp(db, function(result){
            res.json(result);
            db.close();
        });
    });
});

router.get("/emp/:name", function(req,res){
    var name =req.params.name;
    MongoClient.connect(url, function(err, db){
        ed.getEmpByName(db, name, function(result){
            if(result.length==0) res.json([]);
            else res.json(result[0]);
            db.close();
        });
    });
});

router.post("/emp", function(req, res){
    var emp = req.body;
    MongoClient.connect(url, function(err, db){
        ed.insertEmp(db, emp, function(result) {
            res.json(result);
            db.close();
        });
    });
});

router.put("/emp", function(req, res){
    var emp = req.body;
    MongoClient.connect(url, function(err, db){
        ed.updateEmp(db, emp, function(result) {
            res.json(result);
            db.close();
        });
    });
});

router.delete("/emp/:name", function(req, res){ 
    var name = req.params.name;
    MongoClient.connect(url, function(err,db){
        ed.deleteEmp(db, name, function(result){         
            res.json(result);
            db.close();
        });
    });
});


module.exports = router;
