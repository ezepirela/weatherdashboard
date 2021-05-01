const	express	=	require('express'),
		Router		=	express.Router(),
		controllers	=	require('../Controllers/mainController');
Router.post('/city',controllers.getWeatherByCity);
Router.post('/latlong', controllers.GetWeatherByLatLon);

module.exports = Router; 