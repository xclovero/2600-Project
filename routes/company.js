const router = require('express').Router({mergeParams:true});

const {getCompany, postCompany, getAllCompany} = require("../controllers/companyControllers.js");
const validator = require('../validator/validator.js');

router.get('/', getAllCompany);
router.get('/:name', getCompany);
router.post('/', validator.companyValidator, postCompany);

module.exports = router;