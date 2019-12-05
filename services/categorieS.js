//LOCAl MODULES
const { getDbConnection } = require('../services/dbConnection/db');
const { dbAddress } = require('../services/dbConnection/config');

//CATEGORY SERVICE FUNCTIONS

    //CREATE CATEGORY
const postReqCategory = ( category_name, group_id ) => getDbConnection(dbAddress).oneOrNone(
    `
        INSERT INTO categories
            (category_name, group_id)
        VALUES
            ($[category_name], $[group_id])
        RETURNING category_id
    `, { category_name, group_id }
);

module.exports = {
    postReqCategory
}