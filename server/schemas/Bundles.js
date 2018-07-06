let mongoose = require('mongoose');

const schema = new mongoose.Schema({
name: {
required: true,
type: String
 },
includes: {
required: true,
type: Array
},
description: {
required: true,
type: String
},
price: {
required: true,
type: Number
},
});

module.exports =  schema;