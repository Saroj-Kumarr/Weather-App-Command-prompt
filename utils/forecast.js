const { response } = require("express");
const request = require("request");

const getForecast = (city) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid={API key}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect with forecast service!");
    } else {
      console.log(response.body);
    }
  });
};

module.exports = getForecast;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// f00c38e0279b7bc85480c3fe775d518c

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
