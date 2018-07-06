let mongoose = require('mongoose');
let schema = require('../schemas/Orders');

module.exports =  mongoose.model('Order', schema);