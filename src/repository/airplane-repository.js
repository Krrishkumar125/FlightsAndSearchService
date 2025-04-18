const {Airplane} = require("../models/index");

class AirplaneRepository{
    async getAirplane(id){
            try {
                const airplane = await Airplane.findByPk(id);
                return airplane;
            } catch (error) {
                console.log("Error in Repository Layer");
                throw {error};
            }
    }
}

module.exports = AirplaneRepository;