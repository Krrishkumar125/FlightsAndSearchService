const {FlightRepository , AirplaneRepository} = require("../repository/index");
const {compareTime} = require("../utils/helper");

class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if (!compareTime(data.arrivalTime , data.departureTime)){
               throw {error : "Arrival Time should not be less than departure"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Error in Service layer");
            throw {error};
        }
    }

    async getFlightData(flightId){
        try {
           const flight = await this.flightRepository.getFlight(flightId);
           return flight;
        } catch (error) {
            console.log("Error in Service layer");
            throw {error};
        }
    }

    async getAllFlightData(data){
        try {
          const flights = await this.flightRepository.getAllFlight(data);
          return flights;
        } catch (error) {
            console.log("Error in Service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;