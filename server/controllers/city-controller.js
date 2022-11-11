const { City } = require("../models");

const cityController = {
  // get all cities
  getAllCities(req, res) {
    City.find({})
      .then((dbCityData) => res.json(dbCityData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one city by id
  getCityById({ params }, res) {
    City.findOne({ _id: params.id })
      .then((dbCityData) => {
        // if none found, send 404
        if (!dbCityData) {
          res.status(404).json({ message: "No city found with this id!" });
          return;
        }
        res.json(dbCityData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get one city by name
  getCityByName({ params }, res) {
    City.findOne({ city: params.city, state: params.state })
      .then((dbCityData) => {
        if (!dbCityData) {
          res.status(404).json({ message: "No city found by this name!" });
          return;
        }
        res.json(dbCityData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getCityByCoords({ params }, res) {
    City.findOne({ lat: params.lat, lon: params.lon })
      .then((dbCityData) => {
        if (!dbCityData) {
          res
            .status(404)
            .json({ message: "No city found with these coordinates!" });
          return;
        }
        res.json(dbCityData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create city (POST)
  createCity({ body }, res) {
    City.create(body)
      .then((dbCityData) => res.json(dbCityData))
      .catch((err) => res.status(400).json(err));
  },

  // update City by id (PUT)
  updateCity({ params, body }, res) {
    City.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbCityData) => {
        if (!dbCityData) {
          res.status(404).json({ message: "No City found with this id!" });
          return;
        }
        res.json(dbCityData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete City by id
  deleteCity({ params }, res) {
    City.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No City found with this id!" });
          return;
        }
        res.json(dbCityData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = cityController;
