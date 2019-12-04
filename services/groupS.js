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

module.exports = {
    postReqGroup,
}