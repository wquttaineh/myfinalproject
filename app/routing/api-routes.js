
var friendsData = require('../data/friends.js');


module.exports = function (app) {
	

	app.get('/home', function (request, response) {
		response.json(friendsData);
	});

	

	app.post('/home', function (request, response) {
		
			friendsData.push(request.body);
			
	});

	
};
