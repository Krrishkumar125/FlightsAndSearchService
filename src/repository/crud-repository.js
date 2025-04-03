class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
        const result = await this.model.create(data);
        return result;
    } catch (error) {
      console.log("error in crud repository layer");
      throw { error };
    }
  }

  async destroy(modelId) {
    try {
        await this.model.destroy({
            where : {
                id:modelId,
            }    
        });
        return true;
    } catch (error) {
      console.log("error in crud repository layer");
      throw { error };
    }
  }

  async update(modelId,data) {
    try {
        const result = await this.model.update(data,{
            where:{
                id:modelId
            },
        })
        return result;
    } catch (error) {
      console.log("error in crud repository layer");
      throw { error };
    }
  }

  async get(modelId) {
    try {
       const result = await this.model.findByPk(modelId);
       return result;
    } catch (error) {
      console.log("error in crud repository layer");
      throw { error };
    }
  }

  async getAll(filter) {
    try {
        const result = await this.model.findAll({
           where:{
            filter,
           }
        })
        return result;
    } catch (error) {
      console.log("error in crud repository layer");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
