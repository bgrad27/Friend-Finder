var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require('./app/routing/apiRoutes');
var htmlrouter = require('./app/routing/htmlRoutes');


var app = express();

var port = process.env.PORT || 3100


//Make an array to save user responses

// var userResponse = [
//     {
//         name: username,
//         photo: "url",
//         scores: [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
//     }
// ]

//Run a for loop through your the array of friends
//for(var i = 0; i < friends.length; i++){
//     return friends[i];
// }



//compare each individual response in the userResponse scores array([0],[1],[2]...) against the premade friends
//diff?

//Take sum of difference between userGuess and all friends
//lowest sum is suggested friend





//I'm trying to attempt to connect the survey.html to the host page

// app.get('/survey', function(req, res){
//     res.sendFile(path.join(__dirname, "survey.html"));
// })

app.use('/', routes)
app.use('/', htmlrouter)




app.listen(port, function(){
    console.log('Listening on port 3100')
});

