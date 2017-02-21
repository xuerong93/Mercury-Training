var express = require("express");
var router = express.Router();

var person={
    records: [
        {name: "Alice", city: "Princeton", country: "USA"},
        {name: "Steven", city: "Berlin", country: "Germany"},
        {name: "Bob", city: "Tokyo", country: "Japan"},
        {name: "Linda", city: "Beijing", country: "China"},
        {name: "Alex", city: "Paris", country: "France"},
        {name: "Frank", city: "London", country: "UK"},
        {name: "Tommy", city: "Shanghai", country: "China"}

    ]
};


router.get("/", function(req,res){
    res.json(person.records);
});

router.get("/:index", function(req,res){
    var index = req.params.index;
    res.json(person.records[index]);
});

router.post("/", function(req,res){
    person.records.push(req.body);
    res.json(person.records);
});

router.put("/", function(req, res){
    person.records[0].city="Edison";
    res.json(person.records);
})

module.exports = router;
