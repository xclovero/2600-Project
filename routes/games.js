const router = require('express').Router({mergeParams:true});

const {getGames, getOneHighScoreGame, postGame} = require("../controllers/gamesControllers.js");

const validator = require('../validator/validator.js');

router.get('/', getGames);
router.get('/high-score', getOneHighScoreGame);
router.post('/', validator.gameValidator, postGame);

module.exports = router;