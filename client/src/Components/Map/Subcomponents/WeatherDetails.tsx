import React, { useState, useEffect } from "react";
import LocaleChart from "./LocaleChart";

export function WeatherDetails(props: any) {
  const [weather, setWeather] = useState(null);

  const [displayedData, setDisplayedData] = useState("hourly");

  const { selectedPosition, searchedCity } = props;

  // run fetch request once on individual popup render
  useEffect(() => {
    //
    if (!selectedPosition && searchedCity) {
      console.log("Searching for searchedCity " + searchedCity);
    }

    const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedPosition[0]}&lon=${selectedPosition[1]}&units=imperial&appid=9f22897565b785c5e1809cff5dde2ef9`;
    console.log(forecastUrl);

    fetch(forecastUrl).then((response: any) => {
      if (response.ok) {
        console.log(typeof response);
        response.json().then((data: any) => {
          console.log(data);
          // return 8-day forecast
          //   TODO: structure the data so it isn't a big blob
          setWeather(data);
        });
      } else {
        // show error message as content
        setWeather(null);
        throw new Error();
      }
    });
  }, []);

  return (
    <>
      {!weather ? (
        <p>Loading...</p>
      ) : (
        <div style={{ width: "100%" }}>
          <h4>You have clicked coordinates {selectedPosition}</h4>
          <LocaleChart weatherData={weather} displayedData={displayedData} />
          <button style={{ margin: "0 auto" }}>Start Trip</button>
          <button
            onClick={(e) => {
              console.log("button clicked, toggling displayedData");
              displayedData === "hourly"
                ? setDisplayedData("daily")
                : setDisplayedData("hourly");
              console.log(displayedData);
            }}
          >
            {displayedData === "hourly" ? "8-Day Forecast" : "48-Hour Forecast"}
          </button>
        </div>
      )}
    </>
  );
}

export default WeatherDetails;
