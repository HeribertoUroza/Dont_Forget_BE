//NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//EXPRESS ROUTERS
const {getUserRouter} = require('./routes/user');

//FUNCTION THAT RETURNS THE APP
const getApp = _=> {
    const app = express();

    //MIDDLEWARE
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    
    //TEST CONNECTION
    app.get('/ping', (req, res) => {
        res.json({
            message: '🏓 '
        })
    })

    //ROUTERS
    app.use('/user', getUserRouter());
    

    return app;
};

module.exports = {
    getApp,
}