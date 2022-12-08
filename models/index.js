const mongoose = require('mongoose')
const router = require('express').Router()
require('dotenv').config()







mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})


module.exports.Place = require('./places')
