const {AirportService} = require("../services/index");

const airportService = new AirportService();

const create = async (req , res) => {
        try {
            const airport = await airportService.create(req.body);
            return res.status(201).json({
                data:airport,
                success:true,
                message:"successfully created an airport",
                err:{}
            })
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                    data: {},
                    success: false,
                    message: "Not able to create the airport",
                    err : error
                });
        }
}


const destroy = async (req , res) => {
        try {
            const response = await airportService.delete(req.params.id);
            return res.status(200).json({
                data:response,
                success:true,
                message:"successfully deleted the airport",
                err:{}
            })
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                    data: {},
                    success: false,
                    message: "Not able to delete the airport",
                    err : error
                });
        }
}

const update = async (req , res) => {
        try {
            const airport = await airportService.update(req.params.id , req.body);
            return res.status(201).json({
                data:airport,
                success:true,
                message:"successfully updated the airport",
                err:{}
            })
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                    data: {},
                    success: false,
                    message: "Not able to update the airport",
                    err : error
                });
        }
}

const get = async (req , res) => {
        try {
            const airport = await airportService.get(req.params.id);
            return res.status(200).json({
                data:airport,
                success:true,
                message:"successfully fetched an airport",
                err:{}
            })
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                    data: {},
                    success: false,
                    message: "Not able to fetch the airport",
                    err : error
                });
        }
}

const getAll = async (req , res) => {
        try {
            const airports = await airportService.create(req.query);
            return res.status(200).json({
                data:airports,
                success:true,
                message:"successfully fetched the airports",
                err:{}
            })
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                    data: {},
                    success: false,
                    message: "Not able to fetch the airports",
                    err : error
                });
        }
}

module.exports={
        create,
        destroy,
        update,
        get,
        getAll
}