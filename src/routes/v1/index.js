const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);

router.post("/flights", FlightController.create);
router.get("/flights/:id",FlightController.get);
router.get("/flights", FlightController.getAll);

module.exports = router;
