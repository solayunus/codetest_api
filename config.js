const mysql= require('mysql');
const db = mysql.createConnection({
  host: 'sql4.freemysqlhosting.net',
  user: 'sql4442128',
  password: 'az13l2EeVn',
  database: 'sql4442128',
});

module.exports = db;