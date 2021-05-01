const 	request 	= require('request'),
		util 		= require('util'),
		get 		= util.promisify(request.get),
		HttpError 	= require('../Models/HttpError');
const convertToObject = item => {
    let data;
    JSON.parse(item).forEach(element => data = element.woeid);
    return data;
}
const controllers =  {
	getWeatherByCity: async (req, res, next) =>{
		const {city} = req.body
	    try {
	        const req = await get(`https://www.metaweather.com/api/location/search/?query=${city}`)
	        const woeid = convertToObject(req.body);
	        const weather = await get(`https://www.metaweather.com/api/location/${woeid}`)
	        const weatherData = JSON.parse(weather.body)
	        res.json({clima: weatherData.consolidated_weather});
	    }catch(e){
            return next(new HttpError('could not find that city. Please try again', 500));
	    }
	},
	GetWeatherByLatLon: async (req, res) => {
		const {latitude, longitude} = req.body
	    try {
	        const req = await get(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`);
	        const data = JSON.parse(req.body);
	        const woeid = data[0].woeid;
	        const weather = await get(`https://www.metaweather.com/api/location/${woeid}`);
	        const weatherData = JSON.parse(weather.body);
	        res.json({clima: weatherData.consolidated_weather});
	    }catch(e){
	        console.log('error');
	    }
	}
}
module.exports = controllers;
