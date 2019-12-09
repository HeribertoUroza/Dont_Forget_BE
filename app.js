//NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//EXPRESS ROUTERS
const {getUserRouter} = require('./routes/user');
const {getGroupRouter} = require('./routes/group');
const {getCategoryRouter} = require('./routes/categories');
const {getListItemRouter} = require('./routes/list_items')

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
    app.use('/group', getGroupRouter());
    app.use('/category', getCategoryRouter());
    app.use('/list_item', getListItemRouter());

    return app;
};

module.exports = {
    getApp,
}