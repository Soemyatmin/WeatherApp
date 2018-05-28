const yargs = require('yargs');

const geoCode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

console.log(argv);

geoCode.geocodeAddress(argv.a, (errorMessage, results) =>{
    if(errorMessage){
      console.log(errorMessage);
    }else{
      weather.getWeather(results.latitude, results.longitude, (weatherError, weatherResult) =>{
          if(weatherError){
            console.log(weatherError);
          }else{
            console.log(weatherResult.fahrenheit , weatherResult.centigrade);
          }
      });
    }
});
