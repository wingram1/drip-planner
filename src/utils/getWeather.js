// function to get city coords for
const getCityWeather = function (city) {
  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},US&appid=9f22897565b785c5e1809cff5dde2ef9`;

  fetch(apiUrl).then((response) => {
    if (response.ok) {
      response.json().then(function (data) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        console.log(`${city} coords: ${lat}, ${lon}`);
        // TODO: call getCoordsWeather(lat, lon);
      });
    }
  });
};

const getCoordsWeather = function (lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=9f22897565b785c5e1809cff5dde2ef9`;

  fetch(apiUrl).then((response) => {
    if (response.ok()) {
      // log to console to view data
      console.log(response.json());
    } else {
      console.log("Error connecting to openweather.com One Call API");
    }
  });
};

module.exports = { getCityWeather, getCoordsWeather };
