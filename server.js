// Week 18 MongoDB - server.js

var express = require ("express");
var hbs = require ("express-handlebars");
var cheerio = require ("cheerio");
var request = require ("request");

var app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));

var mongoose = require ("mongoose");
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/week18scraper");
var db = mongoose.connection;

var News = require ("./models/News.js");

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var PORT = 3000;

app.get("/", function(req, response){
	response.send("index.html");
});

app.get("/scrape", function(req, response){
	var sourceSite = "http://www.site.com";
	request(sourceSite, function(error, res, html){
	var $ = cheerio.load(html);
	})
});

app.get("/news", function(req, response){
	News.
	
	
});

app.listen(PORT, function(){
	console.log("Server is listening on port " + PORT);
});