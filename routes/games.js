const router = require('express').Router({mergeParams:true});

const {getGames, getGamesFromCompany, getOneHighScoreGame, postGame} = require("../controllers/gamesControllers.js");

const validator = require('../validator/validator.js');

router.get('/', getGames);
router.get('/:company', getGamesFromCompany);
router.get('/highScore', getOneHighScoreGame);
router.post('/', validator.gameValidator, postGame);

module.exports = router;