const getForecast = require("./utils/forecast");
const getWeatherData = require("./utils/weather");

const address = process.argv[2];

getForecast(address, (lat, lan) => {
  getWeatherData(lat, lan, (description, temperature, country, state) => {
    console.log(" ");
    console.log("weather : " + description);
    console.log("temp : " + temperature);
    console.log("country : " + country);
    console.log("state: " + state);
    console.log(" ");
  });
});
