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
}

const getGroupRouter = _=> {
    const GroupRouter = express.Router();

    GroupRouter.post('/', createGroup);

    return GroupRouter
};

module.exports = {
    getGroupRouter,
}