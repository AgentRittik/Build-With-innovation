const User = require("../models/user");


class UserRepository{

    async create(data){
        try{
            const result  = await User.create(data);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id){
        try{
            const result  = await User.findByIdAndDelete(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    
    async get(id){
        try{
            const result  = await User.findById(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(){
        try{
            const result  = await User.find({});
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    
    async findBy(data){
        try{
            console.log(data);
            const response = await User.findOne(data);
            return response;
        }
        catch(error){
            throw error;
        }
    }

    async update(id ,data){
        try{
            const result  = await User.findByIdAndUpdate(id , data , {new : true}); // because in currently scenario wee needed the updated result
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = UserRepository;