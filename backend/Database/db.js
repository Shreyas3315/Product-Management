const mongoose = require('mongoose');
const connectDatabase = async () =>{
    try {
        mongoose.connect('mongodb://localhost:27017/Products');
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDatabase;