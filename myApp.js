const express = require('express');
const app = express();

// Requiere Helmet
const helmet = require('helmet');

// Aplica Helmet a tu app
app.use(helmet());

// Exporta la app para que los tests de freeCodeCamp funcionen
module.exports = app;
