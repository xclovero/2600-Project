const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {GameSchema} = require('./Game.js');

const CompanySchema = new Schema({
    name:{
        type:String, 
        required:true, 
        maxLength: 30
    },
    games: [GameSchema]
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;