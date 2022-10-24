const router = require("express").Router();

const userRoutes = require("./city-routes");

router.use("/cities", cityRoutes);

module.exports = router;
