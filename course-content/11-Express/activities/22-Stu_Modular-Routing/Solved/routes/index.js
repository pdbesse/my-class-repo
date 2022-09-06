const express = require('express');
const miniApp = require('express').Router();
// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

//const app = express();

miniApp.use('/tips', tipsRouter);
miniApp.use('/feedback', feedbackRouter);

module.exports = miniApp;
