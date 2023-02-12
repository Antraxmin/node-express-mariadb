const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    host: 'localhost',
    user: 'root',
    password: process.env.MARIADB_ROOT_PASSWORD,
    database: 'sch_food'
  },
  test: {
    host: 'localhost',
    user: 'root',
    password: process.env.MARIADB_ROOT_PASSWORD,
    database: 'sch_food_test'
  }
};

module.exports = config;