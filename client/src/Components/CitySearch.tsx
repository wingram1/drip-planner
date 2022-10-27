import React, { useState, useEffect } from "react";

import { getCityWeather } from "../utils/getWeather";

export function CitySearch() {
  // state of search input
  const [inputState, setInputState] = useState("");
  const [inputSubmitted, setInputSubmitted] = useState(false);

  useEffect(() => {
    if (inputSubmitted) {
      console.log("hello");
      console.log(getCityWeather(inputState));
    }
  });

  // handles search submit
  const handleCitySearch = () => {
    setInputSubmitted(true);
  };

  return (
    <form
      id="citySearchForm"
      style={{
        zIndex: "2",
        width: "100%",
        height: "50px",
        border: "1px solid black",
        backgroundColor: "white",
        position: "absolute",
        right: "0",
        top: "0",
      }}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`inputState: ${inputState}`);
        handleCitySearch();
      }}
    >
      <input
        id="citySearch"
        name="citySearch"
        placeholder="Search for a City"
        style={{ width: "85%", height: "90%" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputState(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        form="citySearchForm"
        style={{ width: "13%", height: "90%" }}
      >
        Go!
      </button>
    </form>
  );
}

export default CitySearch;
