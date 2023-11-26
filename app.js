const getForecast = require("./utils/forecast");
const getWeatherData = require("./utils/weather");

const address = process.argv[2];

getForecast(address, (lat, lan) => {
  getWeatherData(lat, lan, (description, temperature) => {
    console.log(description, temperature);
  });
});
