const express = require('express');
const router = express.Router();
const specialCategoryService = require('../services/special-category.services.js');


router.get('/', getCategory);

module.exports = router;

function getCategory(req, res, next){
    const reference = req.query.reference;

    specialCategoryService.getCategory(reference)
        .then(data => res.send(data))
        .catch(err => next(err));
}

function setCategory(req, res, next){
    const category = req.query;
}
