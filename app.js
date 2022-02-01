const express = require('express');
const cors = require('cors');
const app = express();
const getToken = require('./routes/index');

// const textRoutes = require('./routes/index');
app.use(cors());
app.use(express.json());

app.use('/login', getToken);

module.exports = app;