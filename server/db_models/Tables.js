const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TablesSchema = new Schema({
    // Bread:{type:Number},
    // Cardboard:{type:Number},
    // Metal_Can:{type:Number},
    // Plastic_Bag :{type:Number}
    data :{type:String}
    
});

module.exports = mongoose.model("Tables",TablesSchema);