let mongoose = require('mongoose');

const schema = new mongoose.Schema({
userName: {
required: true,
type: String
 },
password: {
required: true,
type: String
},
previousOrders: {
required: false,
type: Array
},
});

module.exports =  schema;