const UserService = require('../Service/user-service');
const upload = require('../Config/file-upload-S3');
const userService = new UserService();
const singleUploader = upload.single('image');

const CreateUser = async (req,res)=>{
    try{
        console.log("hi");
        singleUploader(req ,res ,async function(err,data){
            if(err){
                return res.status(500).json({error: err})
            }
            console.log("hello here");
            try {
                // Handle the asynchronous function properly with await
                const response = await userService.createUser(req);
        
                return res.status(201).json({
                  data: response,
                });
            } 
            catch (error) {
                console.error("Error in createUser:", error.message);
                // Handle the error and send an appropriate response
                return res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    catch(error){
        res.status(404).json({
            data : error
        })
    }
}

const login = async(req,res) => {
    try{
        const token  = await userService.signin(req.body);
        return res.status(401).json({
            message: 'sucessfully logged in',
            success : true,
            data : token,
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}

module.exports = {
    CreateUser,
    login
}