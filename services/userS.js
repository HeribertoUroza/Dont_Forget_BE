//LOCAL MODULES
const { getDbConnection } = require('./dbConnection/db');
const { dbAddress } = require('./dbConnection/config');

//USER SERVICE FUNCTIONS

    //CREATE USER
const postReqUser = ( full_name, email ) => getDbConnection(dbAddress).oneOrNone(
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