const express = require('express')
const router = express.Router()

var friends = require('../data/friends.js')

router.get('/api/friends', function(req, res){
  res.send(friends)
})

router.post('/api/friends', function(req, res){
  var data = req.body
})

module.exports = router
