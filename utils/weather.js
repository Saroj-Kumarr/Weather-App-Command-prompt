const request = require("request");

const getWeatherData = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}appid=f00c38e0279b7bc85480c3fe775d518c`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to forecase service!");
    } else {
      callback(response.body.weather[0].description, response.body.main.temp);

      console.log(response.body);
      console.log(response.body.weather[0].description);
      console.log(response.body.main.temp);
    }
  });
};

getWeatherData();

module.exports = getWeatherData;
