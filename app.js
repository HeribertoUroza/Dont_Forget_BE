//NPM MODULES
const express = require('express');


//FUNCTION THAT RETURNS THE APP
const getApp = _=> {
    const app = express();

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