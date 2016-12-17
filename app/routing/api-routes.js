
var foodtruckData = require('../data/foodtruck.js');


module.exports = function (app) {
	

	app.get('/home', function (request, response) {
		response.json(foodtruckData);
	});

	

	app.post('/home', function (request, response) {
		
			foodtruckData.push(request.body);
			
	});

	
};
