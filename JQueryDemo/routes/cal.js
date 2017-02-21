// Provide Service by Js
var express = require("express");
var router = express.Router();

router.get("/add/:x/:y",function(req,resp){       ///add? x=1&y=2 -> req.query.x   "/add", obj -> req.body
    var x = req.params.x * 1;
    var y = req.params.y * 1;
    setTimeout(function(){
        resp.end(x + y + "");
    },1000);
    //resp.end(x + y + "");
});

router.get("/multiply/:x/:y", function(req,resp){
    var x = req.params.x - 0;
    var y = req.params.y - 0;
    setTimeout(function(){
        resp.end(x * y + "");
    },2000);
    //resp.end(x * y + "");
});

router.post("/add",function(req,resp){       ///add?x=1&y=2 -> req.query.x   "/add", obj -> req.body
    var x = req.body.x * 1;
    var y = req.body.y * 1;
    setTimeout(function(){
        resp.end(x + y + "");
    },1000);
    //resp.end(x + y + "");
});

router.post("/multiply", function(req,resp){
    var x = req.body.x - 0;
    var y = req.body.y - 0;
    setTimeout(function(){
        resp.end(x * y + "");
    },2000);
    //resp.end(x * y + "");
});


module.exports = router;
