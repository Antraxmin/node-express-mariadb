const maria = require('mysql');
const dotenv = require('dotenv');
const config = require('../database/config');
dotenv.config();

const con = maria.createConnection(
  config[process.env.NODE_ENV || 'development']
);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;