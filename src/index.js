const bodyParser = require('body-parser');
const express = require('express');
const  {connect} = require('./Config/database');
const ApiRoutes =require('./Routes/index');
const app = express();
const PORT =5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use('/api',ApiRoutes);

// app.use('/', express.static(__dirname + '/Public'));
const setupAndStartServer = ()=>{
    app.listen(PORT , async()=>{
        console.log(`server started at port ${PORT}`);
        await connect();
        console.log("Mongodb connected");
        // const userRepo = new UserRepository();

        // const response = await userRepo.create({email : "rrittik38@gmail.com" , password : "12345678" , role:"admin" , name : "rittik sharma"});
        // console.log(response);
    })
}

setupAndStartServer();