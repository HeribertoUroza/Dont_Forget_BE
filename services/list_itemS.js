//LOCAL MODULES
const { getDbConnection } = require('./dbConnection/db');
const { dbAddress } = require('./dbConnection/config');

//LIST ITEMS FUNCTIONS

    //CREATE LIST ITEMS
const postReqListItems = (list_item_name, category_id, is_completed) => getDbConnection(dbAddress).oneOrNone(
    `
        INSERT INTO list_items
            (list_item_name, category_id, is_completed)
        VALUES
            ($[list_item_name], $[category_id], $[is_completed])
        RETURNING list_item_id
    `, { list_item_name, category_id, is_completed}
)

module.exports = {
    postReqListItems,
}