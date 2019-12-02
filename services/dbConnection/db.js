// NPM MODULES
const pgp = require('pg-promise');

// IIFE THAT RETURNS DB CONNECTION
const getDbConnection = (_ => {
    let dbConnection = null;
    return dbAddress => {
        if (!dbConnection) {
            dbConnection = pgp({})(dbAddress);
        };
        return dbConnection;
    };
})();

module.exports = {
    getDbConnection,
};