const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    onModel: {
        type : String,
        required : true,
        enum : ['User' , 'Admin']
    },
    role : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    },

}, {timestamps : true});

const Role = mongoose.model('Role', roleSchema);

module.exports =  Role;