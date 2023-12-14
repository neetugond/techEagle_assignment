const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phone: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    address: String,
    
    userType: {
        type: String,
        enum: ['customer', 'manager'],
        required: true
    },
});

const UserModel=mongoose.model("User",userSchema)

module.exports={
    UserModel
}