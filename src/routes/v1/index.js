const express = require("express");

const { FlightMiddlewares } = require("../../middlewares/index");

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);

router.post( 
    "/flights",
     FlightMiddlewares.validateCreateFlight,
     FlightController.create
    );
router.get("/flights/:id",FlightController.get);
router.get("/flights", FlightController.getAll);
router.patch("/flights/:id" , FlightController.update)

router.post("/airports", AirportController.create);
router.get("/airports/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.patch("/airports/:id", AirportController.update);
router.delete("/airports/:id", AirportController.destroy);

module.exports = router;
