const express = require("express");
const app = express();

const storeRouter = require('./routes/store');
const menuRouter = require('./routes/menu');

app.use('/store', storeRouter);
app.use('/menu', menuRouter);