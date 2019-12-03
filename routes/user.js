//LOCAL MODULES
const UserService = require('../services/userS');
const express = require('express');

// CREATE USER
const createUser = ( request, response ) => {
    console.log(request.body);
    const { full_name, email } = request.body;

    UserService.postReqUser(full_name, email)
        .then(data => {
            response.json({
                message: 'User Created',
                data
            });
        })
        .catch(error => {
            response.json({
                error: error.toString()
            });
        });
}

const getUserRouter = _=> {
    const UserRouter = express.Router();
    
    UserRouter.post('/', createUser);

    return UserRouter
};

module.exports = {
    getUserRouter,
}