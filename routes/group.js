//LOCAL MODULES
const GroupService = require('../services/groupS');
const express = require('express');

// CREATE GROUP 
const createGroup = (request, response) => {
    const { group_name } = request.body;

    GroupService.postReqGroup(group_name)
        .then( data => {
            response.json({
                message: 'Group Created',
                data
            });
        })
        .catch( error => {
            response.json({
                error: error.toString()
            });
        });
};

const getGroupbyID = (request, response) => {
    const { group_id } = request.params;

    GroupService.getGroupByID( group_id )
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
};

const getGroupRouter = _=> {
    const GroupRouter = express.Router();

    GroupRouter.post('/', createGroup);
    GroupRouter.get('/:group_id', getGroupbyID)

    return GroupRouter
};

module.exports = {
    getGroupRouter,
}