//LOCAL MODULES
const { getDbConnection } = require('./dbConnection/db');
const { getDbAddress } = require('./dbConnection/config');

//USER SERVICE FUNCTIONS

    //CREATE USER
const postReqUser = ( full_name, email ) => getDbConnection(getDbAddress).oneOrNone(
    `
        INSERT INTO users
            (full_name, email)
        VALUES
            ($[full_name], $[email])
        RETURNING user_id
    `, { full_name, email }

);

module.exports = {
    postReqUser,
}