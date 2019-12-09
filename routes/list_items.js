//LOCAL MODULES
const ListItemService = require('../services/list_itemS');
const express = require('express');

//CREATE LIST_ITEM
const createListItem = (request, response) => {
    const { list_item_name, is_completed } = request.body;
    const { category_id } = request.params;

    ListItemService.postReqListItems( list_item_name, category_id, is_completed)
        .then( data => {
            response.json({
                message: 'Success',
                data
            });
        })
        .catch( error => {
            response.json({
                error: error.toString()
            });
        });
}

//UPDATE LIST_ITEM
const updateListItem = (request, response) => {
    const { list_item_name, is_completed } = request.body;
    const { list_item_id } = request.params;

    ListItemService.putReqListItems(list_item_id, list_item_name, is_completed)
        .then( data => {
            response.json({
                message: 'Success',
                data
            });
        })
        .catch( error => {
            response.json({
                error: error.toString()
            });
        });
}

const getListItemRouter = _=> {
    const ListItemRouter = express.Router();

    ListItemRouter.post('/:category_id', createListItem);
    ListItemRouter.put('/:list_item_id', updateListItem);

    return ListItemRouter
}

module.exports = {
    getListItemRouter,
}