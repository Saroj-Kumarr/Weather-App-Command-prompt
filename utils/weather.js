const request = require("request");

const getWeatherData = (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f00c38e0279b7bc85480c3fe775d518c`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to forecase service!");
    } else {
      console.log(response.body);
    }
  });
};

module.exports = getWeatherData;
