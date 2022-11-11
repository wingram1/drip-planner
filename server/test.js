const fetch = require("node-fetch");

// copied straight from frontend
const denverLat = 39.7392,
  denverLon = 104.9903;

const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${denverLat}&lon=${denverLon}&units=imperial&appid=9f22897565b785c5e1809cff5dde2ef9`;

fetch(forecastUrl).then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      console.log(data.daily);
      // return all weather data
      // setWeather(data);
    });
  } else {
    // show error message as content
    console.log("error fetching data");
    throw new Error();
  }
});
