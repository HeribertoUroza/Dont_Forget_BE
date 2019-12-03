//NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//FUNCTION THAT RETURNS THE APP
const getApp = _=> {
    const app = express();

    //MIDDLEWARE
    app.use(bodyParser.json());
    app.use(cors());
    
    //TEST CONNECTION
    app.get('/ping', (req, res) => {
        res.json({
            message: '🏓 '
        })
    })
    
    

    return app;
};

module.exports = {
    getApp,
}