var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================

var app = express(); // Tells node that we are creating an "express" server
var PORT = 9999; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.get('/api/:friends?', function (request, response) {
	// var chosen = request.params.friends;

	// if (chosen) {
	// 	console.log(chosen);

	// 	for (var i = 0; i < friends.length; i++) {
	// 		if (chosen === friends[i].name) {
	// 			response.json(friends[i]);
	// 			return;
	// 		}
	// 	}

	// 	response.json(false);
	// } else {
	// 	response.json(friends);
	// }
});

// // Create New friends - takes in JSON input
app.post('/api/friends', function (request, response) {
	// var newFriends = request.body;
	// newFriends.name = newFriends.name.replace(/\s+/g, '').toLowerCase();

	// console.log(newFriends);

	// friends.push(newFriends);

	// response.json(newFriends);
});

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});