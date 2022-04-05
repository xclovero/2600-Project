const Company = require("../models/Company.js");

const getAllCompany = (req,res)=>{
    Company.find({}).exec()
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(error=>res.status(500).send(error));
};

const getCompany = (req,res)=>{
    Company.findOne({name:req.params.name}).sort('name').exec()
    .then(company=>{
        res.status(200).send(company);
    })
    .catch(error=>res.status(500).send(error));
};

const postCompany = (req,res)=>{
    if (res.locals.errors != null) {
        res.send(res.locals.errors);
    } else {
        Company.findOne({'name': req.body.name}).exec()
        .then(result=>{
            console.log(result);
            if(result==undefined){
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
                .catch(error=>console.log(error));
            } else {
                res.send([`Company ${req.body.name} has existed!`]);
            }
        })
        .catch(error=>console.log(error));
        
    }
    
};

module.exports = {
    getCompany,
    postCompany,
    getAllCompany
};