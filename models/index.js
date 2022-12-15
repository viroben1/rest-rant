const mongoose = require('mongoose')
const router = require('express').Router()
require('dotenv').config()







mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)



module.exports.Place = require('./places')
module.exports.Comment = require('./comment')


