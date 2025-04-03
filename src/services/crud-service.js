class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Error in crud service layer");
            throw {error};
        }
    }

    async delete(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Error in crud service layer");
            throw {error};
        }
    }

    async update(id,data){
        try {
            const result = await this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("Error in crud service layer");
            throw {error};
        }
    }

    async get(id){
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log("Error in crud service layer");
            throw {error};
        }
    }

    async getAll(filter){
        try {
            const result = await this.repository.getAll(filter);
            return result;
        } catch (error) {
            console.log("Error in crud service layer");
            throw {error};
        }
    }
}

module.exports = CrudService;