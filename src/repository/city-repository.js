const {Op} = require('sequelize');


const { city } = require("../models/index.js");



class CityRepository {
  async createCity({ name }) {
    try {
      const City = await city.create({ name });
      return City;
    } catch (error) {
      console.log("Error in repository layer");
      throw {error};
    }
  }
  async deleteCity(cityId) {
    try {
      await city.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Error in repository layer");
      throw {error};
    }
  }
  async updateCity(cityId, data) {
    try {
      const City = await city.update(data, {
        where: {
          id: cityId,
        },
      });
      return City;
    } catch (error) {
      console.log("Error in repository layer");
      throw {error};
    }
  }

  async getCity(cityId) {
    try {
      const City = await city.findByPk(cityId);
      return City;
    } catch (error) {
      console.log("Error in repository layer");
      throw {error};
    }
  }

  async getAllCities(filter){
    try {
      if (filter.name){
        const cities= await city.findAll({
          where: {
            name : {
              [Op.startsWith] : filter.name
            }
          }
        });
        return cities;
      }
      const cities = await city.findAll();
      return cities;
    } catch (error) {
      console.log("Error in repository layer");
      throw {error};
    }
  }
}
module.exports = CityRepository;
