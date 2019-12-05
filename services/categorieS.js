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

    //GET ALL CATEGORIES BY GROUP ID
const getReqCategories = ( group_id ) => getDbConnection(dbAddress).any(
    `
        SELECT *
        FROM categories
        WHERE categories.group_id = $[group_id]
    `, { group_id }
);

module.exports = {
    postReqCategory,
    getReqCategories,
}