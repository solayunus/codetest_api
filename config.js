const mysql= require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'codetestDB',
});

module.exports = db;