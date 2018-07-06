let mongoose = require('mongoose');
let schema = require('../schemas/Users');

module.exports =  mongoose.model('User', schema);