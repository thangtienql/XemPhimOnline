const {CategoryDB} =require('./SchemaDB')
class DatabaseApp {
    constructor(){

    }

    async getAllCategorys(){
        return await CategoryDB.find({});
    }
    
    async updateCategory(){

    }
}