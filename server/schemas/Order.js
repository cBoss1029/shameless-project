let mongoose = require('mongoose');

const schema = new mongoose.Schema({
items: {
required: true,
type: Array
 },
price: {
required: true,
type: String
},
coords: {
required: true,
type: Object
},
});

module.exports =  schema;