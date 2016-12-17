// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/home', function (request, response) {
		response.sendFile(path.join(__dirname + '/../public/portfolio.html'));
	});

	app.get('/menu', function (request, response) {
		response.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/aboutus', function (request, response) {
		response.sendFile(path.join(__dirname + '/../public/work.html'));
	});

	// If no matching route is found default to home
	app.use(function (request, response) {
		response.sendFile(path.join(__dirname + '/../public/portfolio.html'));
	});
};