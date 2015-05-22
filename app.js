//OFFICER OF STUDENT ACTIVITIES
//15FOR2015
//Code developed by Patrick Wee

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//I. APP.JS SETUP
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//******* SETUP Information *******
//1. Define the packages that we need!

var express = require('express');
var Request = require('request');
var bodyParser = require('body-parser');

//2. Instantiate that package!
var app = express();

//3. Tell App.Js where things are

// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));
// Set EJS as templating language
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.engine('.css', require('ejs').__express);
app.set('view engine', 'html');

// Enable json body parsing of application/json
app.use(bodyParser.json());





//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//II. DESTINATIONS
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.get("/", function(request,response){
	console.log("In main route");
	response.render("index");
});

//CATCH ALL ROUTE--IN CASE ANYTHING GOES WRONG
app.get("*", function(request,response){
	response.render("index");
});




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//V. LAUNCH INFO
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var port = process.env.PORT || 8000;
app.listen(process.env.PORT || 8000);
//app.listen(3000);
console.log('Express started on port 8100');

