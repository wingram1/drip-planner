import React, { useState, useEffect } from "react";
import LocaleChart from "./LocaleChart";

export function WeatherDetails(props: any) {
  const [content, setContent] = useState(<p>Loading...</p>);

  const { selectedPosition } = props;

  // run fetch request once on individual popup render
  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedPosition[0]}&lon=${selectedPosition[1]}&units=imperial&appid=9f22897565b785c5e1809cff5dde2ef9`;

    fetch(apiUrl).then((response: any) => {
      if (response.ok) {
        console.log(typeof response);
        response.json().then((data: any) => {
          console.log(data.hourly);
          console.log(data.daily);

          // return 8-day forecast
          //   TODO: structure the data so it isn't a big blob
          setContent(
            <div style={{ width: "100%" }}>
              <LocaleChart weatherDataDaily={data.daily} weatherDataHourly={data.hourly} />
              <button style={{ margin: "0 auto" }}>Start Trip</button>
            </div>
          );
        });
      } else {
        // show error message as content
        setContent(<p>Error connecting to openweather.com One Call API</p>);
        throw new Error();
      }
    });
  }, []);

  return <>{content}</>;
}

export default WeatherDetails;
