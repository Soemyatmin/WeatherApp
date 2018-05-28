const yargs = require('yargs');
const axios = require('axios');

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

var address= argv.address;
var geocodeURL = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address);

axios.get(geocodeURL).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Eror('Unable to find that address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var pinCode = 'aabc07ea9be0aadb77fde2eedea6ae53';
  var weatherURL =  'https://api.darksky.net/forecast/' + pinCode + '/' + lat + ',' +lng;
  console.log(response.data);
  return axios.get(weatherURL);
}).then((response) => {
    var fahrenheit_ = response.data.currently.temperature;
    console.log('fahrenheit:', fahrenheit_);
    console.log('centigrade:', (fahrenheit_  - 32 ) * (5/ 9));
}).catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers. ');
  }else {
    console.log(e.mesage);
    console.log('This saying undefined. ');
  }
});
