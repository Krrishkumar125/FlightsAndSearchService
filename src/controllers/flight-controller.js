const {FlightService} = require("../services/index");
const {SuccessCodes ,  ServerErrorsCodes} = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        let flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data : flight,
            success : true ,
            message : "Successfully added a flight",
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to add a flight",
            err : error,
        })
    }
}

const get = async (req,res)=>{
    try {
       const flight = await flightService.getFlightData(req.params.id);
       return res.status(SuccessCodes.OK).json({
        data: flight,
        success : true,
        message: "Successfully fetched the flight",
        err : {}
     });
    } catch (error) {
        console.log(ServerErrorsCodes.INTERNAL_SERVER_ERROR);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to add a flight",
            err : error,
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const flights = await flightService.getAllFlightData(req.query);
        res.status(SuccessCodes.OK).json({
               data:flights,
               success:true,
               message: "successfully fetched the flights",
               err:{},
        });
    } catch (error) {
        console.log(error);
        res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to fetch the flights",
            err : error,
        })
    }
}

const update = async (req , res) =>{
    try {
        const response = await flightService.update(req.params.id ,req.body);
        res.status(SuccessCodes.OK).json({
               data:response,
               success:true,
               message: "successfully updated the flights",
               err:{},
        });
    } catch (error) {
        console.log(error);
        res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to update the flights",
            err : error,
        })
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
}