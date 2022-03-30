const router = require('express').Router({mergeParams:true});

const {getCompany, postCompany} = require("../controllers/companyControllers.js");

router.get('/:name', getCompany);
router.post('/', postCompany);

module.exports = router;