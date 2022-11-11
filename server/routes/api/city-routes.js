const router = require("express").Router();

const {
  getAllCities,
  getCityById,
  getCityByName,
  getCityByCoords,
  createCity,
  updateCity,
  deleteCity,
} = require("../../controllers/city-controller");

// set up GET all and POST at /api/cities
router.route("/").get(getAllCities).post(createCity);

// set up GET by city/state
router.route("/city/:city,:state").get(getCityByName);

// set up GET by coords
router.route("/coords/:lat,:lon").get(getCityByCoords);

// set up GET one, PUT, and DELETE at /api/cities/:id
router.route("/:id").get(getCityById).put(updateCity).delete(deleteCity);

module.exports = router;
