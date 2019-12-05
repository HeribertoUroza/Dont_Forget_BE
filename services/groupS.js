//LOCAL MODULES
const { getDbConnection } = require('./dbConnection/db');
const { dbAddress } = require('./dbConnection/config');

//GROUP SERVICE FUNCTIONS

    //CREATE GROUP
const postReqGroup = ( group_name ) => getDbConnection(dbAddress).oneOrNone(
    `
        INSERT INTO groups
            (group_name)
        VALUES
            ($[group_name])
        RETURNING group_id
    `, { group_name }
);

    //GET GROUP BY ID
const getGroupByID = ( group_id ) => getDbConnection(dbAddress).oneOrNone(
    `
        SELECT *
        FROM groups
        WHERE groups.group_id = $[group_id]
    `, { group_id }
);

module.exports = {
    postReqGroup,
    getGroupByID,
}