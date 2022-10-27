const express = require("express");
const mongoose = require("mongoose");
const { fetch } = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/drip-planner",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// log mongo queries being executed
mongoose.set("debug", true);

// copied straight from frontend
const denverLat = 39.7392,
  denverLon = 104.9903;

const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${denverLat}&lon=${denverLon}&units=imperial&appid=9f22897565b785c5e1809cff5dde2ef9`;

fetch(forecastUrl).then((response) => {
  if (response.ok) {
    response.json().then((data) => {
      console.log(data);
      // return all weather data
      // setWeather(data);
    });
  } else {
    // show error message as content
    setWeather(null);
    throw new Error();
  }
});

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
