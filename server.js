// Sajeel Malik
// server.js to initialize server for Mealpal Ratings

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//initialize PORT to connect client and server
var PORT = process.env.PORT || 3000;

//create a pointer to express to run a variety of HTTP server-side methods
var app = express();

app.use(express.static("public"));

//Body Parser JSON formatting
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Initialize and set-up handlebars with "main" as the default
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("");

app.use("/", routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});