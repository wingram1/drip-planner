const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const CitySchema = new Schema(
  {
    city: {
      type: String,
      required: "There must be a city name.",
      trim: true,
    },
    state: {
      type: String,
      required: "There must be a state name.",
      trim: true,
    },
    lat: {
      type: Number,
      required: "Latitude coordinate required.",
    },
    lon: {
      type: Number,
      required: "Longitude coordinate required.",
    },
    daily: {
      type: Array,
      required: "48-hour forecast required.",
    },
    hourly: {
      type: Array,
      required: "8-day forecast required.",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const City = model("City", CitySchema);

module.exports = City;
