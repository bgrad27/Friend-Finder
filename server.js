var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");

var app = express();

app.listen(3100, function(){
    console.log('Listening on port 3100')
});