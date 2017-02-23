var express = require("express");
var router = express.Router();

var heroes={
    records: [
        {"id":11,"name":"Mr. Nice"},
        {"id":12,"name":"Narco"},
        {"id":13,"name":"Bombasto"},
        {"id":14,"name":"Celeritas"},
        {"id":15,"name":"Magneta"},
        {"id":16,"name":"RubberMan"},
        {"id":17,"name":"Dynama"},
        {"id":18,"name":"Dr IQ"},
        {"id":19,"name":"Magma"},
        {"id":20,"name":"Tornado"}
    ]
};


router.get("/", function(req,res){
    res.json(heroes.records);
});

router.get("/:index", function(req,res){
    var index = req.params.index;
    res.json(heroes.records[index]);
});

router.post("/", function(req,res){
    heroes.records.push(req.body);
    res.json(heroes.records);
});

// router.put("/", function(req, res){
//     res.json(heroes.records);
// })

module.exports = router;
