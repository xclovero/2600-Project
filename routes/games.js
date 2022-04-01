const router = require('express').Router({mergeParams:true});

const {getGames, getGamesFromCompany, getOneHighScoreGame, postGame} = require("../controllers/gamesControllers.js");

router.get('/', getGames);
router.get('/:company', getGamesFromCompany);
router.get('/highScore', getOneHighScoreGame);
router.post('/', postGame);

module.exports = router;