const Company = require("../models/Company.js");

const getCompany = (req,res)=>{
    console.log(req.params.name);
    Company.findOne({name:req.params.name}).exec()
    .then(company=>{
        res.status(200).send(company);
    })
    .catch(error=>res.status(500).send(error));
};

const postCompany = (req,res)=>{
    let company = new Company({
        name: req.body.name,
    });
    company.save()
    .then(result=>{
        let newCompany = ({
            data: company,
            url: `/GameAPI/company/${company._id}`
        });
        res.set('content-location', `/GameAPI/company/${company._id}`);
        res.status(201).send(newCompany);
    })
    .catch(error=>res.status(500).send(error));
};

module.exports = {
    getCompany,
    postCompany
};