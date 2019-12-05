//LOCAL MODULES
const CategoryService = require('../services/categorieS');
const express = require('express');

// CREATE CATEGORY
const createCategory = (request, response) => {
    const { category_name } = request.body;
    const { group_id } = request.params; 

    CategoryService.postReqCategory(category_name, group_id)
        .then( data => {
            response.json({
                message: 'Category Created',
                data
            });
        })
        .catch( error => {
            response.json({
                error: error.toString()
            });
        });
}

const getCategoryRouter = _=> {
    const CategoryRouter = express.Router();

    CategoryRouter.post('/:group_id', createCategory)

    return CategoryRouter
}

module.exports = {
    getCategoryRouter,
}