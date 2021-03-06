//server.js
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var es =require("./routes/empservice");


app.use(express.static(__dirname + "/public"));    //Specify "public" folder for UI files
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/rest/es",es);


app.get("/:file", function(req, resp){
    var filename = req.params.file;

    resp.sendFile(__dirname + "/public/" + filename + ".html");
});

app.listen(3000);

console.log("Server started!");
