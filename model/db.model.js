const maria = require("mysql");
const dbConfig = require("../database/config.js");

// create database object 
const connection = maria.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

// run MariaDB connection 
connection.connect(error=>{
    if(error) throw error;
    console.log("MariaDB 접속 성공");
})

module.exports = connection;