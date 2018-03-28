var express = require('express')
var htmlrouter = express.Router()
var path = require('path')

htmlrouter.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "../public/home.html"))
})

htmlrouter.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, "../public/survey.html"))
})

module.exports = htmlrouter