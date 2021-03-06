const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

//!routes
const middlwareRouter = require('./middleware/authMiddleware')
const userSystemRouter = require('./routes/userSystem')
const articleSystemRouter = require('./routes/articleSystem')

mongoose.connect('mongodb://localhost/stars_builds')
    .then(()=> console.log({ msg: "Connected to db"}))
    .catch(err => console.log(err))

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//!routes usage
app.use('/user', userSystemRouter)
app.use('/article', middlwareRouter, articleSystemRouter)

module.exports = app;
