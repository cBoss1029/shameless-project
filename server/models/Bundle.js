let mongoose = require('mongoose');
let schema = require('../schemas/Bundles');

module.exports =  mongoose.model('Bundle', schema);