const Ajv = require("ajv");
const ajv = new Ajv({allErrors:true, coerceTypes:true, useDefaults:'empty'});
const validator = require("validator");
require('ajv-keywords')(ajv);
require('ajv-formats')(ajv);
require('ajv-errors')(ajv);

exports.companyValidator=(req,res,next)=>{
    let schema = {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                minLength: 1,
                maxLength: 30,
                transform:['trim'],
                errorMessage: {
                    minLength: "Please enter the company's name!",
                    maxLength: "Company's name should less or equal than 30 characters!"
                }
            }
        },
        required: ['name'],
        errorMessage: {
            required: {
                'name': "Please enter the company's name!"
            }
        }
    };
    
    const validate = ajv.compile(schema);
    validate(req.body);
    if (validate.errors != null) {
        res.locals.errors = [];
        validate.errors.forEach((errors)=>{
            res.locals.errors.push(errors.message);
        });
    }
    next();
};

exports.gameValidator=(req,res,next)=>{
    let schema = {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                minLength: 1,
                maxLength: 30,
                transform:['trim'],
                errorMessage: {
                    minLength: "Please enter the game's name!",
                    maxLength: "Game's name should less or equal than 30 characters!"
                }
            },
            developer: {
                type: 'string'
            },
            platforms: {
                type: 'array',
                minItems: 1,
                errorMessage: {
                    minItems: "Please choose at least one platform!"
                }
            },
            score: {
                type: 'number',
                maximum: 10,
                minimum: 1,
                errorMessage: {
                    minimum: "Score should be between 1 and 10",
                    maximum: "Score should be between 1 and 10"
                }
            }
        },
        required: ['name', 'developer', 'platforms', 'score'],
        errorMessage: {
            required: {
                'name': "Please enter the game's name!",
                'developer': "Please choose a developer!",
                'platforms': "Please choose at least one platform!",
                'score': "Please enter your score!"
            }
        }
    }
    
    const validate = ajv.compile(schema);
    validate(req.body);
    if (validate.errors != null) {
        res.locals.errors = [];
        validate.errors.forEach((errors)=>{
            res.locals.errors.push(errors.message);
        });
    }
    next();
};