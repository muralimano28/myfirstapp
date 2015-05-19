var express = require("express");

var app = express();

app.get('/',function(req,res){
	res.send("Hello world! Welcome to Express");
});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("The client ip address is "+host+" and port number is "+port+".");
});
