const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name:{
        type:String, 
        required:true, 
        maxLength: 30
    },
    developer:{
        type:String,
        required:true,
        maxLength: 30
    },
    platforms:{
        type:[String], 
        required:true
    },
    score:{
        type:Number,
        required:true
    }
});

const Game = mongoose.model("Game", GameSchema);

module.exports = {Game, GameSchema};