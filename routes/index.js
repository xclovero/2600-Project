const router = require('express').Router({mergeParams:true});

const companyRouter = require("./company.js");
const gamesRouter = require("./games.js");

router.use('/company', companyRouter);
router.use('/games', gamesRouter);

module.exports = router;