const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    ProductName : {
        type:String,
        required:true
    },
    ProductID : {
        type:String,
        required:true,
        unique:true
    },
    Price : {
        type:Number,
        required:true
    },
    Category : {
        type:String,
        required:true
    },
    Stock : {
        type:Number,
        required:true
    }
});
module.exports = mongoose.model('Product',productSchema);