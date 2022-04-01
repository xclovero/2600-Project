const {Game} = require("../models/Game.js");
const Company = require("../models/Company.js");

const getGames = (req,res)=>{
    Game.find({}).exec()
    .then(results=>{
        res.status(200).send(results);
    })
    .catch(error=>res.status(500).send(error));
};

const getGamesFromCompany = (req,res)=>{
    Game.find({company:req.params.company}).exec()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(error=>res.status(500).send(error));
}

const getOneHighScoreGame = (req,res)=>{
    Game.aggregate([{$match:{score:{$gte:7}}}, {$group:{_id:null}}]).exec()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(error=>res.status(500).send(error));
};

const postGame = (req,res)=>{
    Company.findOne({"name": req.body.company}).exec()
    .then(company=>{
        console.log(company);
        let game = new Game({
            name: req.body.name,
            developer: req.body.company,
            platforms: req.body.platforms,
            score: req.body.score
        });
        company.games.push(game);
        company.save()
        .then(result=>{
            console.log(result.data);
        })
        .catch(error=>res.status(500).send(error))
        game.save()
        .then(result=>{
            let newGame = ({
                data: game,
                url: `/GameAPI/locations/${game._id}`
            });
            res.set('content-location', `/GameAPI/locations/${game._id}`);
            res.status(201).send(newGame);
        })
        .catch(error=>res.status(500).send(error));
    })
    
};

module.exports = {
    getGames,
    getGamesFromCompany,
    getOneHighScoreGame,
    postGame
}