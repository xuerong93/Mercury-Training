//server.js
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cal = require("./routes/cal");

app.use(express.static(__dirname + "/public"));    //Specify "public" folder for UI files
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/cal", cal);//app.use(path,middleware function);


/*
//next is middleware
app.use(function(req,resp, next){
    resp.writeHead(200, {"Content-Type": "text/html"});
    next();
});
app.get("/", function(req,resp){
    resp.end("<h1>This is Main Page</h1>");
});

app.get("/login", function(req,resp){
    resp.end("<h1>This is login Page</h1>");
});*/

console.log(__dirname);
console.log(__filename);
app.get("/:file", function(req, resp){
    var filename = req.params.file;

    resp.sendFile(__dirname + "/public/" + filename + ".html");
});

app.listen(3000);

console.log("Server started!");
