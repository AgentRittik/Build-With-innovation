const UserRepository = require("../Repository/user-repository");

class UserService{
    constructor(){
        this.userRepositiory = new UserRepository();
    }

    async getUserByEmail(email){
        try{
            const user = await this.userRepositiory.findBy({email});
            return user;
        }
        catch(error){
            throw error;
        }
    }

    async createUser(req){
        try{
            const ImageUrl = req.file.location
            const {name , password , email ,role} = req.body;
            if(!(req.file && name && password && email)){
                const error = new Error("some values are missing");
                return Promise.reject(error);
            }
            const Userdata = {
                name : name,
                password : password,
                email : email,
                imageUrl : ImageUrl,
                role : role
            }
            console.log(Userdata);
            const response = await this.userRepositiory.create(Userdata);
            return response;
        }
        catch(error){
            throw error;
        }
    }

    async signin(data){
        try{
            const user = await this.getUserByEmail(data.email);
            console.log(user);
            if(!user){
                throw {
                    message: 'no user found',
                };
            }
            if(!user.comparePassword(data.password)){
                throw {
                    message: 'incorrect password',
                };
            }

            const token = user.genJWT();
            return token;
        }
        catch(error){
            throw error;
        }
    }

}
    
    



module.exports = UserService;