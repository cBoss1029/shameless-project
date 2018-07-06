let mongoose = require('mongoose');

const schema = new mongoose.Schema({
name: {
required: true,
type: String
 },
price: {
required: true,
type: Number
},
});

module.exports =  schema;