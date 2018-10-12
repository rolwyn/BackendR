var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    sequelize = require('sequelize'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    mysql = require('mysql');
    // bcrypt = require('bcrypt');

// Initializations
var app = express();

// Home Route.
app.get('/', function(request, response) {
    response.send("Successfully connected to Server!");
});

// Starts the Server.
app.listen('4000', function() {
    console.log("Listening to Port 4000");
});

// Parsing the urlencoded and json
app.use(bodyParser.urlencoded({extended : false})); // If Extended is false, you cannot post Nested Object
app.use(bodyParser.json());

// Morgan http logger
app.use(morgan('dev'));

// Setting up Passport
app.use(passport.initialize()); // Passport is an Authentication middleware for Express

// Static files directory if needed
// app.use(express.static(__dirname + '../WebProject'));