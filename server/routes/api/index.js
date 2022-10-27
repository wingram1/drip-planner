const router = require("express").Router();

const cityRoutes = require("./city-routes");

router.use("/cities", cityRoutes);

module.exports = router;
