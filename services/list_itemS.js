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

    //UPDATE LIST ITEM
const putReqListItems = (list_item_id, list_item_name, is_completed) => getDbConnection(dbAddress).oneOrNone(
    `
        UPDATE list_items
        SET 
            list_item_name = $[list_item_name], 
            is_completed = $[is_completed],
            createdAt = NOW()
        WHERE
        list_items.list_item_id = $[list_item_id]
        RETURNING list_item_id
    `, {list_item_id, list_item_name, is_completed}
)

module.exports = {
    postReqListItems,
    putReqListItems,
}