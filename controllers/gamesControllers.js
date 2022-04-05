const {Game} = require("../models/Game.js");
const Company = require("../models/Company.js");

const getGames = (req,res)=>{
    Game.find({}).exec()
    .then(results=>{
        res.status(200).send(results);
    })
    .catch(error=>res.status(500).send(error));
};

const getOneHighScoreGame = (req,res)=>{
    Game.find({score:{$gte:7}}).exec()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(error=>res.status(500).send(error));
};

const postGame = (req,res)=>{
    if (res.locals.errors != null) {
        res.send(res.locals.errors);
    } else {
        Game.findOne({"name": req.body.name}).exec()
        .then(result=>{
            if (result != undefined) {
                let count = result.count + 1;
                let score = Math.floor((result.score * result.count + req.body.score) / count);
                let platforms = result.platforms;
                req.body.platforms.forEach(platform=>{
                    if (!platforms.includes(platform)){
                        platforms.push(platform);
                    }
                });
                Game.updateOne({"name": req.body.name}, {"$set": {"score": score, "count": count, "platforms": platforms}})
                .catch(error=>console.log(error));
                Company.updateOne({"name": req.body.developer, "games.name": req.body.name}, {$set: {"games.$.score": score, "games.$.count": count, "games.$.platforms": platforms}})
                .catch(error=>console.log(error));
            } else {
                Company.findOne({"name": req.body.developer}).exec()
                .then(company=>{
                    let game = new Game({
                        name: req.body.name,
                        developer: req.body.developer,
                        platforms: req.body.platforms,
                        score: req.body.score
                    });
                    company.games.push(game);
                    company.save()
                    .then(result=>{
                        console.log(result.data);
                    })
                    .catch(error=>console.log(error));
                    game.save()
                    .then(result=>{
                        let newGame = ({
                            data: game,
                            url: `/GameAPI/locations/${game._id}`
                        });
                        res.set('content-location', `/GameAPI/locations/${game    ._id}`);
                        res.status(201).send(newGame);
                    })
                    .catch(error=>console.log(error));
                })
            }
        })
        
    }
    
};

module.exports = {
    getGames,
    getOneHighScoreGame,
    postGame
}