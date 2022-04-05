const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name:{
        type:String, 
        required:true, 
        maxLength: 30,
        minLength: 2
    },
    developer:{
        type:String,
        required:true,
    },
    platforms:{
        type:[String], 
        required:true
    },
    score:{
        type:Number,
        required:true,
        max: 10,
        min: 1
    },
    count:{
        type:Number,
        default:1
    }
});

const Game = mongoose.model("Game", GameSchema);

module.exports = {Game, GameSchema};