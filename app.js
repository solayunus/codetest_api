const express = require('express');
const cors = require('cors');
const app = express();
const getTextRoute = require('./routes/index');

// const textRoutes = require('./routes/index');
app.use(cors());
app.use(express.json());
app.use('/api/get', getTextRoute);

module.exports = app;