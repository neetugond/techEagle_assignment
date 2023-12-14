const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(
            "mongodb+srv://ngond92:2B1Ixzf401r3xbX7@cluster0.jdmrvzh.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log('MongoDB connected')

    }catch(err) {
        console.log(err.message)
        
    }
}
module.exports = connectDB;