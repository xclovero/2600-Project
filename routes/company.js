const router = require('express').Router({mergeParams:true});

const {getCompany, postCompany, getAllCompany} = require("../controllers/companyControllers.js");

router.get('/', getAllCompany);
router.get('/:name', getCompany);
router.post('/', postCompany);

module.exports = router;