//HTTP Server

var http = require("http");

http.createServer(function(req, resp){
    resp.end("<h1>Hello World</h1")
}).listen(3000);

console.log("HTTP Server started");
