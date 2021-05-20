const host = 'ziggy.db.elephantsql.com',
    database = 'rgamvxjo',
    user = 'rgamvxjo',
    password = 'IYhOKTbILnhBBz-4XK3SZD-NOXlJtB6x';

const pgp = require('pg-promise')({
    query: function(e) {
    console.log('QUERY:', e.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const db = pgp(options);

module.exports = db;