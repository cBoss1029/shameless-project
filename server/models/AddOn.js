let mongoose = require('mongoose');
let schema = require('../schemas/AddOns');

module.exports =  mongoose.model('AddOn', schema);