const mysql = require('mysql');
const bluebird = require('bluebird');

const db = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'test',
  password: 'caa679b6',
  database: 'heroku_4d85e7e8281f7b8',
  port: 3306
});

db.on('error', ex => {
  console.log(ex);
});

db.connect();

bluebird.promisifyAll(db);

module.exports = db;