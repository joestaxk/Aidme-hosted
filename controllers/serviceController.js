const httpStatus = require("http-status");
const Categories = require("../models/categoryModel");
const countries = require("../services/countries-service.json")
let serviceController = {}

serviceController.getCountries = function(req,res,next) {
    const params = req.query;
    
    if(!Object.keys(params).length) {
        const countryRes = countries.map(({name, flag, iso3}) => {return {name, flag, iso3} });
        res.json(countryRes)
    }

    if(Object.keys(params).length && params.countrycode){
        // this return states
        for(let i = 0; i < countries.length; ++i) {
            if(countries[i]["iso3"].toLowerCase() === params.countrycode.toLowerCase()){
               return res.json(countries[i]["states"])
            }
        }
    }
}


serviceController.getTaskCategories = async function(req,res,next) {
    try {
        const getCategories = await Categories.find({});
        res.send(getCategories[0]?.erranderJobs); 
    } catch (error) {
        console.log(error)
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

module.exports = serviceController
