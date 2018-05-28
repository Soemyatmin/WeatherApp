const request = require ('request');
var pinCode = 'aabc07ea9be0aadb77fde2eedea6ae53';

var getWeather = (lat, lng, callback) =>{
  request({
    url : 'https://api.darksky.net/forecast/' + pinCode + '/' + lat + ',' +lng,
    json : true
  }, (error, response, body) => {
    if (response.statusCode === 200 ){
      var fahrenheit_ = body.currently.temperature;
      callback(undefined , {
        fahrenheit: fahrenheit_,
        centigrade:(fahrenheit_  - 32 ) * (5/ 9),
      });
    }else {
      callback('Temperature Error');
    }
  });
};

module.exports. getWeather =  getWeather;
